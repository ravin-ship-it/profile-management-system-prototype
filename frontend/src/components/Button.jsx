const Button = ({ value, color, action }) => {
    return (
        <button onClick={action} className={`px-4 py-2 md:px-8 md:py-4 grow md:grow-0 md:text-2xl capitalize rounded-md md:rounded-2xl ${color} active:scale-95 hover:scale-110 transition-all duration-300 ease-in-out`}>{value}</button>
    )
}

export default Button
