function Card() {
    const title = "Amsterdam"
    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestiae porro nesciunt sunt, soluta totam facilis corporis voluptatum error aperiam vitae sapiente harum doloribus quae molestias! Accusantium doloremque voluptatum eaque."
    const imgUrl = "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"

    return (
        <div className="rounded-md bg-zinc-950">
            <img 
                src={imgUrl} alt="">    
            </img>
            
            <div className="flex flex-col p-5">
                <h2 className="text-2x1 font-bold">
                    {title}
                </h2>
                <p className="text-gray-500">
                    {description}
                </p>
                </div>
        </div>
    )
}
export default Card