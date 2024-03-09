import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MenuContext } from './Context'
function NavBar() {
  const {isMenuActivate} = useContext(MenuContext)
  function mainFamousDavesPage() {
    window.location.assign("https://www.famousdaves.com/lake-delton");
  }
  return (
    <div className="h-24 fixed z-20 top-0 py-2 backdrop-blur-sm w-full flex items-center justify-center">
      {isMenuActivate && 
        <Link to='/'>
          <figure 
            className="flex justify-center items-center mx-auto h-10 w-10 absolute top-1/2 -translate-y-1/2 left-6 lg:left-1/4 -translate-x-1/2">
            <img className="w-full aspect-square" src="../backLeft.svg" alt="Logo of Fameus Daves" />
          </figure>
        </Link>
      }
        <figure className="flex justify-center items-center mx-auto h-20 w-20 cursor-pointer" onClick={mainFamousDavesPage}>
          <img className="w-full aspect-square" src="../logo.svg" alt="Logo of Fameus Daves" />
        </figure>
    </div>
  )
}

export default NavBar