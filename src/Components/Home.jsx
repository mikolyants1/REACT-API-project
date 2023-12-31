import {Outlet,createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './About.jsx'
import App from './App.jsx'
import Episode from './Episode.jsx'
import Location from './Location.jsx'
import { useStore } from '../store/store.jsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { View,SortButton } from '../styles/style.jsx'
const query = new QueryClient({
  defaultOptions:{
    queries:{
     keepPreviousData:true,
     refetchOnWindowFocus:false,
      }
    }
  })

function Place(){
 const page=useStore(state=>state.page)
 const next=useStore(state=>state.nextPage)
 const prev=useStore(state=>state.prevPage)
  return (
    <Location page={page}>
      <View>
        <StepButton
         onClick={prev}
         step={page!==1}
         text='prev'
         />
        <StepButton
         onClick={next}
         step={page!==7}
         text='next'
         />
      </View>
    </Location>
  )
}
const StepButton=(props)=>{
  if (props.step) {
  return <>
        <SortButton {...props}>
          {props.text}
        </SortButton>
      </>
      }
    return null
       }
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
        element:<Place />
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