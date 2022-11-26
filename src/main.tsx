import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, Route, RouterProvider
} from 'react-router-dom'
import './index.css'
import ErrorPage from './routes/ErrorPage'
import LocalGameInitPage from './routes/LocalGameInitPage'
import GamePage from './routes/LocalGamePage'
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
  },
  {
    path: '/local-play',
    element: <GamePage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
