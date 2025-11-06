function Card({title, imgUrl, isVisited, children}) {
    const visitedLabel = isVisited ?  
        <span className="text-green-400">❤️ visited</span> :
        <span className="text-red-500">💔 not visited</span>    

    return (
        <div className="rounded-md bg-zinc-950">
            <img 
                src={imgUrl} alt=""> 
            </img>
            
            <div className="flex flex-col p-5">
                <h2 className="text-amber-100 font-bold">
                    {title}
                </h2>
                <p className="text-gray-500">
                    {children}
                </p>
                {visitedLabel}
                </div>
        </div>
    )
}

export default Card