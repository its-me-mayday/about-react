import { useState } from "react";

function CardForm({addCity}) {
    const [formData, setFormData] = useState({
        name: "city name",
        description: "write a description",
        imgUrl: "https://img.url",
        isVisited: false
    });
 
    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target
        const inputValue = type == "checkbox" ? checked : value
        setFormData({
            ...formData,
            [name]: inputValue
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const city =
        {
            id: Math.random(),
            name: formData.name,
            description: formData.description,
            imgUrl: formData.imgUrl,
            isVisited: formData.isVisited
          } 
        addCity(city)
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 rounded-lg p-5">
        <div className="flex flex-col">
            <label className="font-semibold text-zinc-300">Name</label>
            <input 
                type="text" 
                name="name" 
                className="bg-zinc-300" 
                value={formData.name} 
                onChange={handleInputChange}>
            </input>
        </div>
        <div className="flex flex-col">
            <label className="font-semibold text-zinc-300">Description</label>
            <textarea 
                name="description" 
                className="bg-zinc-300"
                value={formData.description} 
                onChange={handleInputChange}>
            </textarea>
        </div>
        <div className="flex flex-col">
            <label className="font-semibold text-zinc-300">Image Url</label>
            <input 
                type="text" 
                name="imgUrl" 
                className="bg-zinc-300"
                value={formData.imgUrl} 
                onChange={handleInputChange}>
            </input>
        </div>
        <div className="flex flex-col">
            <label className="font-semibold text-zinc-300">isVisited?</label>
            <input 
                type="checkbox" 
                name="isVisited"
                checked={formData.isVisited} 
                onChange={handleInputChange}
                ></input>
        </div>
        <button className="bg-zinc-200" type="submit">Add Card</button>
        </form>
    )
}

export default CardForm