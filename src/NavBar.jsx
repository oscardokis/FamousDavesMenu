import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MenuContext } from './Context'
function NavBar() {
  const {isMenuActivate} = useContext(MenuContext)

  return (
    <div className="h-24 fixed z-20 top-0 py-2 backdrop-blur-sm w-full flex items-center justify-center">
      <Link to='/'>
        {isMenuActivate && <
          figure 
            className="flex justify-center items-center mx-auto h-10 w-10 absolute top-1/2 -translate-y-1/2 left-3 lg:left-1/4 -translate-x-1/4">
          <img className="w-full aspect-square" src="../backLeft.svg" alt="Logo of Fameus Daves" />
        </figure>}
        <figure className="flex justify-center items-center mx-auto h-20 w-20">
          <img className="w-full aspect-square" src="../logo.svg" alt="Logo of Fameus Daves" />
        </figure>
      </Link>
    </div>
  )
}

export default NavBar