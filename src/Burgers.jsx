import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Burgers() {

  return (
    <MenuLayout
      menuFilter={fameusDaves.burgers.itemsMenu}
      titleInfo= {fameusDaves.burgers.information}
      title='-SIGNATURE BURGERS-'
    >
    </MenuLayout>
  )
}

export default Burgers

