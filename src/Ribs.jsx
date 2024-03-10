import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"

function Ribs() {


  return (
    <MenuLayout
      menuFilter={fameusDaves.ribs.itemsMenu}
      titleInfo= {fameusDaves.ribs.information}
      title='-AWARD-WINNING RIBS-'
    >
    </MenuLayout>
  )
}

export default Ribs