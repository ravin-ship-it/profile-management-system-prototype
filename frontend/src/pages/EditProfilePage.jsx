import { useState, useEffect } from "react"
import { useNavigate, Link, useParams } from "react-router-dom"
import bgImageProfiles from "../assets/info3.png"
import logo from "../assets/logo.png"
import Input from "../components/Input.jsx"
import ProfileAPI from "../api/profile.api.js"

const EditProfilePage = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        bio: ""
    })

    useEffect(() => {
        const fetchOldData = async () => {
            try {
                const result = await ProfileAPI.getOne(id)

                if (result.success) {
                    setFormData({
                        name: result.data.name,
                        email: result.data.email,
                        age: result.data.age,
                        bio: result.data.bio
                    })
                }
            } catch (error) {
                console.error(error)
                alert("Could not fetch old data - " + result.message)
            }
        }
        fetchOldData()
    }, [id])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {

        // stop reload
        e.preventDefault()

        try {
            const result = await ProfileAPI.update(id, formData)

            if (result.success) {
                alert(`${formData.name}'s profile saved successfully`)
                navigate(`/${id}`)
            } else {
                alert("Error : " + result.message)
            }
        } catch (error) {
            console.error(error)
            alert("Backend error : " + error.message)
        }

    }

    return (
        <div className="grid content-center justify-items-center min-h-screen w-full p-8" style={{ background: `url(${bgImageProfiles}) no-repeat center / cover fixed` }}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-16 w-[65%] rounded-2xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.05)] backdrop-blur-xs">
                <div className="flex items-center justify-between relative w-full mb-6">
                    <Link to="/" className="h-20 w-[40%] flex items-center justify-center relative overflow-clip -left-12">
                        <img src={logo} alt="Profile Hub" className="h-auto w-auto absolute -top-16 object-cover drop-shadow-[0_0_10px_#ff00bf80]" />
                    </Link>
                    <h1 className="text-3xl font-bold capitalize text-cyan-200">identity.</h1>
                </div>
                <Input id="name" label="Name" type="text" value={formData.name} onChange={handleChange} />
                <Input id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
                <Input id="age" label="Age" type="number" value={formData.age} onChange={handleChange} />
                <Input id="bio" label="Bio" type="text" value={formData.bio} onChange={handleChange} />
                <button type="submit" className="py-4 grow text-2xl rounded-sm bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.5)] block text-white border border-gray-500 hover:border-white capitalize transition-all duration-300 ease-in-out">submit</button>
            </form >
        </div >
    )

}

export default EditProfilePage
