import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Sandwiches() {

  return (
    <MenuLayout
      menuFilter={fameusDaves.sandwiches.itemsMenu}
      titleInfo= {fameusDaves.sandwiches.information}
      title='-SIGNATURE SANDWICHES-'
    >
    </MenuLayout>
  )
}

export default Sandwiches