import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState('')

  const generateCode = () => {
    const mycode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    
    let thisCode = "";
    for(let i = 0; i < mycode.length; i++){
      thisCode += mycode.charAt(Math.floor(Math.random() * mycode.length));
    }

    setCode(thisCode);
  }

  return (
    <div className='max-w-screen-2xl w-full h-screen'>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='button bg-green-600 rounded-md mb-2'>
          count is {count}
        </button>
        <button onClick={() => setCount(0)} className='button bg-blue-600 rounded-md'>
          Reset the Count
        </button>
      </div>
      <p className='text-lg'>
        This also generate a code for You
      </p>

      <button className='button my-2 bg-yellow-600 rounded-md' onClick={generateCode}>
        Generate Code
      </button>

      <p className='text-xl text-blue-700/90 font-semibold'>
        {code ?? code}
      </p>

      <p className="read-the-docs">
        This is a Chrome Extension
      </p>
    </div>
  )
}

export default App
