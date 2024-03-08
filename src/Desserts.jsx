import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Desserts() {


  return (
    <MenuLayout
      menuFilter={fameusDaves.desserts}
      title='-HANDCRAFTED DESSERTS-'
    >
    </MenuLayout>
  )
}

export default Desserts