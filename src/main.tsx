import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, Route, RouterProvider
} from 'react-router-dom'
import './index.css'
import ErrorPage from './routes/ErrorPage'
import GamePage from './routes/GamePage'
import LocalGameInitPage from './routes/LocalGameInitPage'
import StartPage from './routes/StartPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/play',
    element: <GamePage />
  },
  {
    path: '/local-init',
    element: <LocalGameInitPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
