import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Pitmaster() {


  return (
    <MenuLayout
      menuFilter={fameusDaves.pitmasterFavorites.itemsMenu}
      titleInfo= {fameusDaves.pitmasterFavorites.information}
      title='-PITMASTER FAVORITES-'
    >
    </MenuLayout>
  )
}

export default Pitmaster