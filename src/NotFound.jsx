import Layout from "./Components/Layout"
import { Link } from 'react-router-dom'
function NotFound() {

  return (
    <Layout>
      <Link to="/">
      <h1 className='text-center text-5xl text-white font-bold my-56'>Not Found</h1>
        <figure className="flex justify-center items-center mx-auto h-56 w-56">
          <img className="w-full aspect-square" src="../logo.svg" alt="Logo of Fameus Daves" />
        </figure>
      </Link>
    </Layout>
  )
}
export default NotFound