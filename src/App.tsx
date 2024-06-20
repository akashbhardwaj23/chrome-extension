import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-screen-2xl w-full h-screen'>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='button bg-green-600 rounded-md'>
          count is {count}
        </button>
        <button onClick={() => setCount(0)} className='button bg-blue-600 rounded-md'>
          Reset the Count
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
