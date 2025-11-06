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
    }
    
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
      </div>
    </>
  )
}

export default App
