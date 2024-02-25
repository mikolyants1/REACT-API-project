import {Outlet,createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './paths/About.jsx'
import App from './paths/App.jsx'
import Episode from './paths/Episode.jsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import Search from './paths/Seach.jsx'
import Place from './routes/place.jsx'

const query = new QueryClient({
  defaultOptions:{
    queries:{
     keepPreviousData:true,
     refetchOnWindowFocus:false,
      }
    }
  })

const router = createBrowserRouter([
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
        element:<Place />
      },
      {
        path:'find',
        element:<Search />
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
]);

export default function Home(){
  return (
    <QueryClientProvider client={query}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}