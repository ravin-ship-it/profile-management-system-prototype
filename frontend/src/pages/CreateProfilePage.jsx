import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import bgImageProfiles from "../assets/info3.png"
import logo from "../assets/logo.png"
import Input from "../components/Input.jsx"
import ProfileAPI from "../api/profile.api.js"

const CreateProfilePage = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        bio: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {

        // stop reload
        e.preventDefault()

        try {
            const result = await ProfileAPI.create(formData)

            if (result.success) {
                const newId = result.data._id
                alert(`${formData.name}'s profile created successfully`)
                navigate(`/${newId}`)
            } else {
                alert("Error : " + result.message)
            }
        } catch (error) {
            console.error(error)
            alert("Backend error : " + error.message)
        }

    }

    return (
        <div className="flex items-center justify-center min-h-screen w-full md:p-8" style={{ background: `url(${bgImageProfiles}) no-repeat center / cover fixed` }}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-4 p-8 md:p-16 w-[90%] md:w-[65%] rounded-2xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.05)] backdrop-blur-xs">
                <div className="flex items-center justify-between relative w-full md:mb-6">
                    <Link to="/" className=" h-20 w-[70%] md:w-[40%] flex items-center justify-center relative overflow-clip -left-6 md:-left-14 active:scale-95 hover:scale-105 transition-transform">
                        <img src={logo} alt="Profile Hub" className="h-auto w-auto absolute left-1 md:left-6 -top-5 md:-top-16 scale-116 object-cover drop-shadow-[0_0_10px_#ff00bf80]" />
                    </Link>
                    <h1 className="md:text-3xl font-bold capitalize text-cyan-300">identity.</h1>
                </div>
                <Input id="name" label="Name" type="text" value={formData.name} onChange={handleChange} />
                <Input id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
                <Input id="age" label="Age" type="number" value={formData.age} onChange={handleChange} />
                <Input id="bio" label="Bio" type="text" value={formData.bio} onChange={handleChange} />
                <button type="submit" className="py-2 md:py-4 grow text-1xl md:text-2xl rounded-sm bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.5)] drop-shadow-[0_0_10px_black] block text-white border border-gray-500 hover:border-white capitalize transition-all duration-300 ease-in-out">submit</button>
            </form >
        </div >
    )

}

export default CreateProfilePage
