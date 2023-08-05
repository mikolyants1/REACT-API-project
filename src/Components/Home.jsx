import {BrowserRouter as Router,Routes,Route,Outlet} from 'react-router-dom'
import About from './About.jsx'
import App from './App.jsx'
import Episode from './Episode.jsx'
import Location from './Location.jsx'
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
    return <Router>
            <Routes>
                <Route path='/' element={<Start />} >
                  <Route index element={<App />} />
                  <Route path=':id' element={<Rout />}>
                    <Route index element={<About  />} />
                     <Route path=':par' element={<Episode />} />
                  </Route>
              </Route>
              <Route path='/loc' element={<Location />} />
           </Routes>
        </Router>
}