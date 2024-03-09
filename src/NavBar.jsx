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
            className="flex justify-center items-center mx-auto h-10 w-10 absolute top-1/2 -translate-y-1/2 left-6 xl:left-1/4 -translate-x-1/2">
            <img className="w-full aspect-square" src="../backLeft.svg" alt="Logo of Fameus Daves" />
          </figure>
        </Link>
      }
    <div className='flex items-center w-full justify-center px-3 gap-3 md:gap-6 max-w-5xl'>
    <Link to='/' className='flex-1 text-center'>
          <span className='text-white font-semibold text-md'>MENU</span>
        </Link>
        <figure className="flex justify-center items-center cursor-pointer w-20" onClick={mainFamousDavesPage}>
          <img className="w-full aspect-square" src="../logo.svg" alt="Logo of Fameus Daves" />
        </figure>
        <button className='flex-1 text-center' onClick={mainFamousDavesPage}>
          <span className='text-white font-semibold text-md'>WISCONSIN DELLS</span>
        </button>
    </div>
    </div>
  )
}

export default NavBar