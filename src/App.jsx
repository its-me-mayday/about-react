import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid grid-cols-4 gap-10'>
      <Card 
        title="Amsterdam" 
        imgUrl = "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" 
        isVisited={true}
      >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestiae porro nesciunt sunt, soluta totam facilis corporis voluptatum error aperiam vitae sapiente harum doloribus quae molestias! Accusantium doloremque voluptatum eaque.
      </Card>
      <Card 
        title="Rome" 
        imgUrl = "https://images.unsplash.com/photo-1548585742-1df49e753a83?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1754" 
        isVisited={true}
      >  
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestiae porro nesciunt sunt, soluta totam facilis corporis voluptatum error aperiam vitae sapiente harum doloribus quae molestias! Accusantium doloremque voluptatum eaque.
      </Card>
      <Card 
        title="Singapore" 
        imgUrl = "https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740" 
        isVisited={true}
      >  
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestiae porro nesciunt sunt, soluta totam facilis corporis voluptatum error aperiam vitae sapiente harum doloribus quae molestias! Accusantium doloremque voluptatum eaque.
      </Card>
      <Card 
        title="Rovaniemi" 
        imgUrl = "https://images.unsplash.com/photo-1584380029866-f03d863766a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740" 
        isVisited={false}
      >  
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestiae porro nesciunt sunt, soluta totam facilis corporis voluptatum error aperiam vitae sapiente harum doloribus quae molestias! Accusantium doloremque voluptatum eaque.
      </Card>
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
