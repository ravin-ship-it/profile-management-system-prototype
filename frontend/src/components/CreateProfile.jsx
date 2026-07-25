import { useState } from "react"
import Input from "./input.jsx"

const CreateProfile = () => {

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

        e.preventDefault()

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/profile/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            const result = await response.json()

            if (result.success) {
                alert(`${formData.name}'s profile was created successfully`)
            } else {
                alert(`Backend error : ${result.message} - ${result.error}`)
            }
        } catch (error) {
            alert("Network error : ", error.message)
            console.error("full error : ", error)
        }

    }


    return (
        <div className="h-screen w-full flex justify-center items-center bg-gray-900 text-white">
            <form onSubmit={handleSubmit} className="w-[60%] border-amber-500 border">
                <label htmlFor="name">Name : </label>
                <Input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
                <label htmlFor="email">Email : </label>
                <Input type="email" id="email" placeholder="e.g., lol@gmail.com" value={formData.email} onChange={handleChange} />
                <label htmlFor="age">Age : </label>
                <Input type="number" id="age" placeholder="e.g, 21" value={formData.age} onChange={handleChange} />
                <label htmlFor="bio">Bio : </label>
                <textarea name="bio" id="bio" placeholder="I am cool 😛" value={formData.bio} onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default CreateProfile
