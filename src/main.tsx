import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from "./components/login.tsx"
import './index.css'
import {createMemoryRouter, RouterProvider} from 'react-router-dom'


const router = createMemoryRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path : '/login',
        element: <Login />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
