import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Burgers() {

  return (
    <MenuLayout
      menuFilter={fameusDaves.burgers}
      title='-SIGNATURE BURGERS-'
    >
    </MenuLayout>
  )
}

export default Burgers

