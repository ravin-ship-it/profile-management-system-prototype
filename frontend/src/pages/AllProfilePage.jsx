import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ProfileAPI from "../api/profile.api.js"
import bgAllProfile from "../assets/scenery2.png"
import profilePic from "../assets/xen.png"

const AllProfilePages = () => {

    // Variable for storing list of profiles
    const [profiles, setProfiles] = useState([])

    useEffect(() => {

        // Fetch All prof.iles
        const fetchALLProfiles = async () => {
            try {
                // Storing data into result variable after fetching
                const result = await ProfileAPI.getAll()

                if (result.success) {
                    setProfiles(result.data)
                } else {
                    console.error(error)
                }
            } catch (error) {
                console.log("Backend error : " + error)
            }
        }

        fetchALLProfiles() // Fetchinf function call

    }, []) // this empty array at the last telly react to fetch the profiles only once 

    return (
        <div className="p-8 min-h-screen w-full grid grid-cols-3 gap-8" style={{ background: `linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0)) no-repeat center center, url(${bgAllProfile}) no-repeat center / cover fixed` }}>
            {profiles.map((profile) => (

                <Link to={`/${profile._id}`} className="group block h-full w-full content-center border-[2px] border-solid border-black/50 rounded-2xl bg-[rgba(0,0,0,0.7)] hover:bg-[#002633bf] backdrop-blur-sm hover:scale-105 hover:text-shadow-[0_0_4px_cyan] hover:border-cyan-300 transition-all duration-300 ease-in-out">
                    <div key={profile._id} className="p-8 flex gap-4 items-center justify-between relative">
                        <img src="https://picsum.photos/200" alt={`${profile.name}'s profile pic`} className="h-25 aspect-square object-center rounded-full border-2 border-cyan-500/80 group-hover:shadow-[0_0_10px_cyan] transition-all duration-300 ease-in-out" />
                        <div className="min-w-0 grow">
                            <h2 className=" text-3xl grow truncate text-white/90">{profile.name}</h2>
                            <p className=" text-2xl grow truncate text-white/70">{profile.email}</p>
                            <p className="px-4 grow truncate absolute right-0 top-0 text-8xl text-white/30">{profile.age}</p>
                        </div>
                    </div>
                </Link>

            ))}
        </div>
    )

}

export default AllProfilePages
