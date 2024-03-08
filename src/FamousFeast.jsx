import MenuLayout from "./Components/MenuLayout"
import fameusDaves from '../fameusDaves.json'
function FamousFeast() {


  return (
    <MenuLayout
    menuFilter={fameusDaves.feasts}
    title='-FAMOUS FEASTS-'
  >
  </MenuLayout>
  )
}

export default FamousFeast