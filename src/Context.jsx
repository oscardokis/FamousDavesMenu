import { createContext, useEffect, useMemo, useState } from "react"
import { useLocation } from 'react-router-dom';

export const MenuContext = createContext()

export const MenuProvider = ({children}) => {
  const [isMenuActivate, setIsMenuActivate] = useState(false)
  const [menuItems, setmenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('./menuItems.json')
      const data = await response.json()
      setmenuItems(data)
    }

    fetchMenuItems()
  }, [])
  const memoizedItemsMenu= useMemo(() => menuItems, [menuItems]);

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
        isMenuActivate,
        memoizedItemsMenu
      }}
    >
    {children}
    </MenuContext.Provider>
  )
}