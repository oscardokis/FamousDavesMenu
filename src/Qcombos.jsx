import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Qcombos() {


  return (
    <MenuLayout
      menuFilter={fameusDaves.combos}
      title='-`Q COMBOS-'
    >
    </MenuLayout>
  )
}

export default Qcombos