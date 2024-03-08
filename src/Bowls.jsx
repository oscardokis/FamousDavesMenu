import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"
function Bowls() {

  return (
    <MenuLayout
      menuFilter={fameusDaves.bowls}
      title='-SOUPS & BOWLS-'
    >
    </MenuLayout>
  )
}
Bowls
export default Bowls