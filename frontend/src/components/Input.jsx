const Input = ({ id, label, type = "text", value, onChange }) => {

    return (

        <div className="flex gap-4 text-gray-200">
            <label
                htmlFor={id}
                className="px-8 py-4 block grow text-2xl text-center rounded-sm hover:outline outline-pink-500 hover:outline-pink-500 focus:outline focus:outline-pink-500 hover:drop-shadow-[0_0_20px_#ff00bfcc] focus:drop-shadow-[0_0_20px_#ff00bfcc] bg-[#ff149333] border border-pink-600">
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-[80%] px-8 py-4 text-2xl rounded-sm hover:outline outline-cyan-500 hover:outline-cyan-500 focus:outline-cyan-500 hover:drop-shadow-[0_0_20px_#0015ffd9] focus:drop-shadow-[0_0_20px_#0015ffd9] bg-[#0086e633] border border-cyan-600" />
        </div>
    )

}

export default Input
