import { Link } from "react-router-dom";
import landingBg from "../assets/bg.png"
import logo from "../assets/logo.png"

const LandingPage = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,1)), url(${landingBg}) no-repeat center / cover fixed` }}>
            <img src={logo} alt="Logo" className="h-96 w-full object-cover drop-shadow-[0_0_80px_#ff00bf80]" />
            <p className="px-28 text-4xl relative bottom-4 text-center text-cyan-100 leading-tight italic animate-pulse transition-all duration-300 ease-in-out">"Stop sending resumes. Start sharing your identity. A dynamic portfolio generator built for modern developers."</p>
            <div className="flex gap-8">
                <Link to="/create" className="mt-16 mb-4 text-2xl px-8 py-4 font-semibold capitalize rounded-full text-white bg-blue-600 hover:bg-pink-600 hover:-translate-y-1 hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out">get started</Link >
                <Link to="/profiles" className="mt-16 mb-4 text-2xl px-8 py-4 font-semibold capitalize rounded-full bg-white hover:bg-pink-600 hover:text-white hover:-translate-y-1 hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out">view profiles</Link >
            </div>
        </div >
    )

}

export default LandingPage
