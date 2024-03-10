import { useRoutes, BrowserRouter} from 'react-router-dom'
import { Home } from './Home'
import { MenuProvider } from './Context.jsx'
import './App.css'
import SmokeBg from './Components/SmokeBg.jsx'
import Starters from './Starters.jsx'
import Burgers from './Burgers.jsx'
import Desserts from './Desserts.jsx'
import FamousFeast from './FamousFeast.jsx'
import Pitmaster from './Pitmaster.jsx'
import Qcombos from './Qcombos.jsx'
import Ribs from './Ribs.jsx'
import Salads from './Salads.jsx'
import Sandwiches from './Sandwiches.jsx'
import Sides from './Sides.jsx'
import BakedPotato from './BakedPotato.jsx'
import Bowls from './Bowls.jsx'
import NotFound from './NotFound.jsx'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/Starters', element: <Starters />},
    {path: '/Burgers', element: <Burgers />},
    {path: '/Desserts', element: <Desserts />},
    {path: '/FamousFeast', element: <FamousFeast />},
    {path: '/Pitmaster', element: <Pitmaster />},
    {path: '/Qcombos', element: <Qcombos />},
    {path: '/Ribs', element: <Ribs />},
    {path: '/Salads', element: <Salads />},
    {path: '/Bowls', element: <Bowls />},
    {path: '/Sandwiches', element: <Sandwiches />},
    {path: '/BakedPotato', element: <BakedPotato />},
    {path: '/Sides', element: <Sides />},
    {path: '/*', element: <NotFound />},
  ])
  return routes
}
function App() {


  return (
    <BrowserRouter>
      <MenuProvider>
        <SmokeBg />
        <NavBar/>
        <div className='flex flex-col min-h-screen justify-center '>
          <AppRoutes />
          <Footer />
        </div>
      </MenuProvider>
    </BrowserRouter>
  )
}

export default App