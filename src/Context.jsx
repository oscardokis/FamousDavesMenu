import { createContext, useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';

export const MenuContext = createContext()

export const MenuProvider = ({children}) => {
  const [isMenuActivate, setIsMenuActivate] = useState(false)

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
    const checkPath = () => {
      if(location.pathname !== '/') {
        setIsMenuActivate(true);
      } else {
        setIsMenuActivate(false);
      }
    };
    checkPath();
  }, [location]);

  return (
    <MenuContext.Provider value={{
        isMenuActivate
      }}
    >
    {children}
    </MenuContext.Provider>
  )
}