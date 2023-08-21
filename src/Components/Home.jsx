import {BrowserRouter as Router,Routes,Route,Outlet} from 'react-router-dom'
import About from './About.jsx'
import App from './App.jsx'
import Episode from './Episode.jsx'
import Location from './Location.jsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
const query=new QueryClient()
function Rout() {
    return <div>
        <Outlet />
    </div>
}
function Start(){
    return <div>
        <Outlet />
    </div>
}
export default function Home(){
  return (
      <QueryClientProvider client={query}>
        <Router>
          <Routes>
             <Route path='/' element={<Start />} >
               <Route index element={<App />} />
               <Route path='loc' element={<Location />} />
               <Route path=':id' element={<Rout />}>
                  <Route index element={<About  />} />
                  <Route path=':par' element={<Episode />} />
               </Route>
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    )
}