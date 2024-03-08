import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function BakedPotato() {

  return (
    <MenuLayout
      menuFilter={fameusDaves.bakedPotatoes}
      title='-STUFEED BAKED POTATOES-'
    >
    </MenuLayout>
  )
}

export default BakedPotato