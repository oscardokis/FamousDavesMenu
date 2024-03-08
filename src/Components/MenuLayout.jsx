
function MenuLayout({ menuFilter, title }) {


  return (
    <div className='flex flex-col justify-center items-center p-3 m-auto mt-24'>
    <h2 className='font-bold text-center text-2xl mb-3 text-white'>{title}</h2>
    <ul className='text-white flex flex-col justify-center w-full max-w-5xl'>
    {menuFilter.map((dave, index) =>(
        <li key={index} className='flex flex-col gap-1 hover:bg-white hover:text-black p-3 hover:rounded-3xl hover:cursor-pointer'>
          <div className='flex justify-between'>
            <div className=''>
              <h3 className='font-bold text-xl'>{dave.title}</h3>
              <p className='flex-shrink-0'>{dave.calories}</p>
            </div>
            <p className='font-bold text-xl shrink-0'>{dave.price}</p>
          </div>
          {dave.options?.map((option, index) => (
              <div key={index} className="flex justify-between items-center mb-3">
                <div className="flex flex-col justify-start">
                <h4 className='font-bold text-md'>{option.title}</h4>
                <p className='flex-shrink-0'>{option.calories}</p>
                </div>
                <p className='font-bold text-xl'>{option.price}</p>
              </div>
            ))}
          <div className='flex justify-between items-center gap-12'>
          <p className='text-sm text-left'>{dave.description}</p>
          </div>
          
        </li>
      ))}
    </ul>
    </div>
  )
}

export default MenuLayout