import { Link } from 'react-router-dom'
import Layout from './Components/Layout'
import { useState } from 'react'
import menuItems  from '../menuItems.json'
export const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Layout>
      <div className='flex justify-center items-center flex-wrap gap-3 max-w-7xl md:gap-3 mb-6 text-white w-full h-full md:justify-items-center'>
        {menuItems.map((item, index) => (
          <Link 
            to={item.to}
            key={index}
            className='w-full bg-[#571412] relative max-w-md sm:max-w-sm'>
            <img className='w-full object-cover aspect-video opacity-70' src={item.img} alt={item.alt} 
            onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >{item.title}</h2>}
          </Link>
        ))}
      </div>
    </Layout>
  )
}