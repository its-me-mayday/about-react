function Card(props) {
    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestiae porro nesciunt sunt, soluta totam facilis corporis voluptatum error aperiam vitae sapiente harum doloribus quae molestias! Accusantium doloremque voluptatum eaque."

    return (
        <div className="rounded-md bg-zinc-950">
            <img 
                src={props.imgUrl} alt="">    
            </img>
            
            <div className="flex flex-col p-5">
                <h2 className="text-amber-100 font-bold">
                    {props.title}
                </h2>
                <p className="text-gray-500">
                    {description}
                </p>
                </div>
        </div>
    )
}
export default Card