import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Sides() {


  return (
    <MenuLayout
      menuFilter={fameusDaves.sides}
      title='-SIDE DISHES-'
    >
    </MenuLayout>
  )
}

export default Sides