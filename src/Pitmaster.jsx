import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Pitmaster() {


  return (
    <MenuLayout
      menuFilter={fameusDaves.pitmasterFavorites}
      title='-PITMASTER FAVORITES-'
    >
    </MenuLayout>
  )
}

export default Pitmaster