import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  const cities = [
    {
      id: 0,
      name: "Amsterdam",
      description: "Charming canals, narrow houses, and a relaxed city vibe by the water.",
      imgUrl: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      isVisited: true
    },
    {
      id: 1,
      name: "Rome",
      description: "Ancient ruins, lively streets, and iconic landmarks in every direction.",
      imgUrl: "https://images.unsplash.com/photo-1548585742-1df49e753a83?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1754",
      isVisited: true
    },
    {
      id: 2,
      name: "Singapore",
      description: "Futuristic skyline, lush gardens, and a vibrant mix of cultures.",
      imgUrl: "https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      isVisited: true
    },
    {
      id: 3,
      name: "Rovaniemi",
      description: "Arctic town of snowy forests, husky rides, and Northern Lights hunts.",
      imgUrl: "https://images.unsplash.com/photo-1584380029866-f03d863766a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      isVisited: false
    },
    {
      id: 4,
      name: "Reykjavík",
      description: "Colorful coastal city, geothermal vibes, and gateway to Iceland’s wild nature.",
      imgUrl: "https://images.unsplash.com/photo-1465353471565-b77e538f34c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      isVisited: false
    },
    {
      id: 5,
      name: "Kyoto",
      description: "Shrines, bamboo forests, and traditional streets full of calm and charm.",
      imgUrl: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
      isVisited: false
    },
    {
      id: 6,
      name: "Tokyo",
      description: "Neon streets, quiet temples, and endless food adventures day and night.",
      imgUrl: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      isVisited: false
    },
    {
      id: 7,
      name: "New York",
      description: "Skyscrapers, yellow cabs, and a fast-paced city that never sleeps.",
      imgUrl: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      isVisited: false
    }, 
  ]

  return (
    <>
    <div className='grid grid-cols-4 gap-5'>
    {
      cities
      //.filter((city) => !city.isVisited)
      .map((city) => (
        <Card
          key={city.id}
          name={city.name}
          imgUrl={city.imgUrl}
          isVisited={city.isVisited}
        >
          {city.description}
        </Card>
      ))
    }
    </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleClick}>alert</button>
        <input className="bg-amber-200" type="text" onChange={handleChange} />
        <form onSubmit={handleSubmit}>
          <button className="border-t-cyan-300" type="submit">Send!</button>
        </form>
      </div>
    </>
  )
}

function handleClick() {
  alert("ciao")
}
function handleChange(e) {
  console.log("handleChange: " + e.target.value)
}

function handleSubmit(e) {
  e.preventDefault();
  console.log("handleSubmit: " + e.target)
}

export default App
