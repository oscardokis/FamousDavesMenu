import { Link } from 'react-router-dom'
import Layout from './Components/Layout'
import { useState } from 'react';
export const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const menuItmes = [
    {title: '-SMOKIN` STARTERS-', img: '../starters2.png', alt: 'SMOKIN STARTERS', to: '/Starters'},
    {title: '-FAMOUS FEASTS-', img: '../feast.png', alt: 'FAMEUS FEAST', to: '/FamousFeast'},
    {title: '-AWARD-WINNING RIBS-', img: '../ribs.png', alt: 'AWARD-WINNING RIBS', to: '/Ribs'},
    {title: '-PITMASTER FAVORITES-', img: '../salmon.png', alt: 'PITMASTER FAVORITES', to: '/Pitmaster'},
    {title: '-`Q COMBOS-', img: '../qcombos.png', alt: 'Q COMBOS', to: '/Qcombos'},
    {title: '-SIGNATURE SANDWICHES-', img: '../sandwiches.png', alt: 'SIGNATURE SANDWICHES', to: '/Sandwiches'},
    {title: '-SIGNATURE BURGERS-', img: '../burger.png', alt: 'SIGNATURE BURGERS', to: '/Burgers'},
    {title: '-SALADS-', img: '../salad.png', alt: 'SALADS', to: '/Salads'},
    {title: '-SOUPS & BOWLS-', img: '../bowl.png', alt: 'SOUPS & BOWLS', to: '/Bowls'},
    {title: '-STUFEED BAKED POTATOES-', img: '../bakedPotato.png', alt: 'STUFEED BAKED POTATOES', to: '/BakedPotato'},
    {title: '-HANDCRAFTED DESSERTS-', img: '../dessert.png', alt: 'HANDCRAFTED DESSERTS', to: '/Desserts'},
    {title: '-SIDE DISHES-', img: '../sides.png', alt: 'SIDE DISHES', to: '/Sides'},
  ]
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-6 md:gap-3 mb-6 px-3 text-white w-full h-full max-w-5xl md:justify-items-center'>
        {menuItmes.map((item, index) => (
          <Link 
            to={item.to}
            key={index}
            className='w-full bg-[#571412] relative max-w-lg'>
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