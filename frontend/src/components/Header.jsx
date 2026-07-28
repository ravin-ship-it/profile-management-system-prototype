import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <header className="w-full flex items-center justify-between bg-black/90">
            <Link to="/" className="h-24 w-60 block hover:scale-105 active:scale-95 overflow-clip transition-all duration-300 ease-in-out">
                <img src={logo} alt="Profile Hub" className="w-full object-[0_-26px] hover:drop-shadow-[0_0_8px_#ff3399b3] transition-all duration-300 ease-in-out" />
            </Link>
            <ul>
                <li>
                    <Link to="/create" className="mr-8 px-6 py-3 block text-2xl capitalize rounded-lg text-white/80 bg-pink-600 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">create</Link>
                </li>
            </ul>
        </header >
    )
}

export default Header
