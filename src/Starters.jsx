import fameusDaves from '../fameusDaves.json'
import MenuLayout from "./Components/MenuLayout"

function Starters() {
  return (
    <MenuLayout
      menuFilter={fameusDaves.starters}
      title='-SMOKIN&apos; STARTERS-'
    >
    </MenuLayout>
  )
}

export default Starters