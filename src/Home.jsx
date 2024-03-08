import { Link } from 'react-router-dom'
import Layout from './Components/Layout'
import { useState } from 'react';
export const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Layout>
      <div className='flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-6 md:gap-3 mb-6 px-3 text-white w-full h-full max-w-5xl md:justify-items-center'>
        <Link 
          to='/Starters'>
          <figure className='w-full bg-black relative max-w-lg'>
            <img className='w-full object-cover aspect-video opacity-30' src="../starters2.png" alt="Starters img"
             onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-SMOKIN&apos; STARTERS-</h2>}
          </figure>
        </Link>
        <Link to='/FamousFeast'>
          <figure className='w-full bg-black relative max-w-lg'>
            <img className='w-full object-cover aspect-video opacity-30' src="../feast.png" alt="Famous Feast image"
            onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-FAMOUS FEASTS-</h2>}
          </figure>
        </Link>
        <Link to='/Ribs'>
          <figure className='w-full bg-black relative max-w-lg'>
            <img className='w-full object-cover aspect-video opacity-30' src="../ribs.png" alt="AWARD-WINNING RIBS" 
            onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-AWARD-WINNING RIBS-</h2>}
          </figure>
        </Link>
        <Link to='/Pitmaster'>
          <figure className='w-full bg-black relative max-w-lg aspect-video'>
            <img className='w-full object-cover aspect-video opacity-30' src="../salmon.png" alt="PITMASTER FAVORITES"
            onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-PITMASTER FAVORITES-</h2>}
          </figure>
        </Link>
        <Link to='/Qcombos'>
          <figure className='w-full bg-black relative max-w-lg'>
            <img className='w-full object-cover aspect-video opacity-30' src="../qcombos.png" alt="-`Q COMBOS-" onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-`Q COMBOS-</h2>}
          </figure>
        </Link>
        <Link to='/Sandwiches'>
          <figure className='w-full bg-black relative max-w-lg'>
            
            <img className='w-full object-cover aspect-video opacity-30' src="../sandwiches.png" alt="SIGNATURE SANDWICHES"  onLoad={() => setImageLoaded(true)} />
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-SIGNATURE SANDWICHES-</h2>}
          </figure>
        </Link> 
        <Link to='/Burgers'>
          <figure className='w-full bg-black relative max-w-lg'>
            
            <img className='w-full object-cover aspect-video opacity-30' src="../burger.png" alt="SIGNATURE BURGERS" onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-SIGNATURE BURGERS-</h2>}
          </figure>
        </Link>
        <Link to='/Salads'>
          <figure className='w-full bg-black relative max-w-lg'>
            
            <img className='w-full object-cover aspect-video opacity-30' src="../salad.png" alt="SALADS" onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-SALADS-</h2>}
          </figure>
        </Link>
        <Link to='/Bowls'>
          <figure className='w-full bg-black relative max-w-lg'>
            
            <img className='w-full object-cover aspect-video opacity-30' src="../bowl.png" alt="-SOUPS & BOWLS-" onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-SOUPS & BOWLS-</h2>}
          </figure>
        </Link>
        <Link to='/BakedPotato'>
          <figure className='w-full bg-black relative max-w-lg'>
            
            <img className='w-full object-cover aspect-video opacity-30' src="../bakedPotato.png" alt="-STUFEED BAKED POTATOES-" onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-STUFEED BAKED POTATOES-</h2>}
          </figure>
        </Link>
        <Link to='/Desserts'>
          <figure className='w-full bg-black relative max-w-lg'>
            
            <img className='w-full object-cover aspect-video opacity-30' src="../dessert.png" alt="HANDCRAFTED DESSERTS" onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-HANDCRAFTED DESSERTS-</h2>}
          </figure>
        </Link>
        <Link to='/Sides'>
          <figure className='w-full bg-black relative max-w-lg'>
            
            <img className='w-full object-cover aspect-video opacity-30' src="../sides.png" alt="SIDE DISHES" onLoad={() => setImageLoaded(true)}/>
            {imageLoaded && <h2 
            className='z-10 font-bold text-3xl w-full text-center absolute top-1/2  transform -translate-y-1/2'
            >-SIDE DISHES-</h2>}
          </figure>
        </Link>     
      </div>
    </Layout>
  )
}