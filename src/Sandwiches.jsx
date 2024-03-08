import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Sandwiches() {

  return (
    <MenuLayout
      menuFilter={fameusDaves.sandwiches}
      title='-SIGNATURE SANDWICHES-'
    >
    </MenuLayout>
  )
}

export default Sandwiches