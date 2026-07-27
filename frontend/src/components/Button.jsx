const Button = ({ value, color, action }) => {
    return (
        <button onClick={action} className={`px-8 py-4 text-2xl capitalize rounded-2xl ${color} active:scale-95 hover:scale-110 transition-all duration-300 ease-in-out`}>{value}</button>
    )
}

export default Button
