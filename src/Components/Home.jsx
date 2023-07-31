import {BrowserRouter as Router,Routes,Route,Outlet} from 'react-router-dom'
import About from './About.jsx'
import App from './App.jsx'
import Episode from './Episode.jsx'
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
                <Route path='/' element={<Start />}>
                    <Route index element={<App />} />
                    <Route path='episode' element={<Rout />}>
                       <Route path=':id' element={<Episode />} />
                     </Route>
                <Route path=':id' element={<About />} />
              </Route>
           </Routes>
        </Router>
}