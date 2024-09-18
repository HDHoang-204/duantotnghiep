import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import GioiThieu from './components/gt.jsx';
import LienHe from './components/lienhe.jsx';


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'gt',
        element: <GioiThieu />
      },
      {
        path: 'lienhe',
        element: <LienHe />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
