import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <header className="w-full flex items-center justify-between fixed top-0 z-10 bg-black/90 border border-b-pink-500">
            <Link to="/" className="h-24 w-60 block relative right-4 md:right-0 hover:scale-105 active:scale-95 overflow-clip transition-transform">
                <img src={logo} alt="Profile Hub" className="w-full object-[0_-26px] hover:drop-shadow-[0_0_8px_#ff3399b3] transition-transform" />
            </Link>
            <ul>
                <li>
                    <Link to="/create" className="mr-4 md:mr-8 px-3 py-2 md:px-4 md:py-2 block md:text-2xl capitalize rounded-lg text-white/80 bg-pink-600 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">create</Link>
                </li>
            </ul>
        </header >
    )
}

export default Header
