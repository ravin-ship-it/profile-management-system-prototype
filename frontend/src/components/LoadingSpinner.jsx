const LoadingSpinner = () => {
    return (
        <div className="h-screen w-full flex flex-col gap-4 absolute z-50 inset-0 items-center justify-center bg-black shadow-[0_0_10px_cyan]">
            <div className="h-24 w-24 md:h-32 md:w-32 flex items-center justify-center animate-bounce bg-transparent border-4 border-cyan-500 ">
                <div className="h-[50%] w-[50%] flex items-center justify-center animate-ping bg-transparent border-4 border-cyan-500 ">
                    <div className="h-[50%] w-[50%] flex items-center justify-center animate-ping bg-transparent border-4 border-cyan-500 ">
                        <div className="h-[50%] w-[50%] flex items-center justify-center animate-ping bg-transparent border-4 border-cyan-500 "></div>
                    </div>
                </div>
            </div>
            <div className="italic text-3xl text-cyan-500">Loading...</div>
        </div>
    )
}

export default LoadingSpinner
