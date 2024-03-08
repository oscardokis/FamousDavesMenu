import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Salads() {

  return (
    <MenuLayout
      menuFilter={fameusDaves.salads}
      title='-SALADS-'
    >
    </MenuLayout>
  )
}

export default Salads