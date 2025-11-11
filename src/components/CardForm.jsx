function CardForm({addCity}) {
    const handleClick = () => {
        const city =
        {
            id: 8,
            name: "Madrid",
            description: "Sunny boulevards, lively plazas, late-night tapas, and elegant museums.",
            imgUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
            isVisited: true
          } 
        addCity(city)
    }

    return(
        <div className="flex flex-col gap-3 w-80 mb-10">
            <input type="text" className="bg-amber-200"></input>
            <input type="text" className="bg-amber-200"></input>
            <input type="text" className="bg-amber-200"></input>
        <button onClick={handleClick}>Add Card</button>
        </div>
    )
}

export default CardForm