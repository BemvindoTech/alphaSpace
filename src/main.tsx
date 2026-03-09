
import { createRoot, } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Apod, HomeLayout, Hubble, Landing, News, SpaceX, Webb } from './pages';
import { newPageLoader } from './pages/News';


const router = createBrowserRouter([
  {
    path: "/", element: <HomeLayout />, 
    children : [
      {index:true,element: <Landing />},
      {path:"news",element: <News />, loader: newPageLoader},
      {path:"webb",element: <Webb />},
      {path:"spacex",element: <SpaceX />},
      {path:"apod",element: <Apod />},
      {path:"hubble",element: <Hubble />},
    ]
  }
]
);

createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router} />

)
