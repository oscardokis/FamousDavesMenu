import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Qcombos() {


  return (
    <MenuLayout
      menuFilter={fameusDaves.qcombos.combos}
      title='-`Q COMBOS-'
      meats={fameusDaves.qcombos.meats}
    >
    </MenuLayout>
  )
}

export default Qcombos