import { Link } from "react-router-dom"

const SocialMediaLink = ({ svg, url }) => {
    return (
        <Link to={url} className="h-20 w-20 active:scale-95 hover:scale-110 transition-transform bg-linear-30 rounded-xl from-pink-600 to-cyan-500">
            {svg}
        </Link>
    )
}

export default SocialMediaLink
