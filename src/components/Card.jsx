function Card({title, imgUrl, children}) {
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
                </div>
        </div>
    )
}
export default Card