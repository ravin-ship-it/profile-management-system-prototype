import { useParams, useNavigate } from "react-router-dom"
import ProfileAPI from "../api/profile.api.js"
import { useState, useEffect } from "react"
import LoadingSpinner from "../components/LoadingSpinner.jsx"
import bgOneProfile from "../assets/info2.png"
import profilePic from "../assets/xen.png"

const OneProfilePage = () => {

    // Capture id directly from url
    const { id } = useParams()

    const [profile, setProfile] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        const fetchOneProfile = async () => {
            try {
                const result = await ProfileAPI.getOne(id)

                if (result.success) {
                    setProfile(result.data)
                } else {
                    console.error(error)
                }
            } catch (error) {
                console.log(error.message)
                alert("Backend error : " + error.message)
            }
        }

        // Fetch the profile
        fetchOneProfile()
    }, [id])


    // DeleteFunction
    const handleDelete = async () => {

        if (window.confirm("Are you sure you want to delete this profile?")) {
            try {
                const result = await ProfileAPI.delete(id)

                if (result.success) {
                    alert("Profile deleted successfully!")
                    navigate("/profiles")
                }
            } catch (error) {
                console.error(error)
                alert(`Failed to delete ${profile.name}'s profile - ` + error)
            }
        }

    }


    // Loading Spinner
    if (!profile) {
        return <LoadingSpinner />
    }

    return (
        <div className="h-screen w-full grid content-center justify-items-center" style={{ background: `url(${bgOneProfile}) no-repeat center / cover` }}>
            <section className="p-8 w-[90%] flex gap-8 justify-between backdrop-blur-sm text-white/80 border-4 rounded-l-4xl border-t-pink-500 border-l-pink-500 border-b-cyan-500 border-r-cyan-500">
                <div className="flex flex-col gap-4 grow">
                    <h1 className="w-max text-8xl font-bold bg-linear-30 from-pink-600 to-cyan-500 text-transparent bg-clip-text">{profile.name}</h1>
                    <p className="text-6xl">Email: {profile.email}</p>
                    <p className="text-5xl">Age: {profile.age}</p>
                    <p className="text-4xl">Bio: {profile.bio}</p>
                </div>
                <img src={profilePic} alt="Profile Pic" className="h-80 w-[20rem] " />
            </section>
            <section className="text-white">
                <div className="flex gap-8">
                    <button className="px-8 py-4 bg-pink-900">Edit</button>
                    <button onClick={handleDelete} className="px-8 py-4 bg-red-500">Delete Profile</button>
                </div>
                <div>Social Media</div>
            </section>
        </div>
    )

}

export default OneProfilePage
