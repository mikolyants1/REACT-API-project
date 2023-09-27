import {Outlet,createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './About.jsx'
import App from './App.jsx'
import Episode from './Episode.jsx'
import Location from './Location.jsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
const query=new QueryClient()
const router=createBrowserRouter([
  {
    path:'/',
    element:<Outlet />,
    children:[
      {
        index:true,
        element:<App />
      },
      {
        path:'loc',
        element:<Location />
      },
      {
        path:':id',
        element:<Outlet />,
        children:[
          {
            index:true,
            element:<About />
          },
          {
            path:':par',
            element:<Episode />
          }
        ]
      }
    ]
  }
])
export default function Home(){
  return (
      <QueryClientProvider client={query}>
        <RouterProvider router={router} />
      </QueryClientProvider>
        )
}