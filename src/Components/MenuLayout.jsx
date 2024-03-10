
function MenuLayout({ menuFilter, title, meats, titleInfo }) {


  return (

    <div className='flex flex-col items-center p-3 mt-24 flex-grow'>
    <h2 className='font-bold text-center text-2xl mb-3 text-white'>{title}</h2>
    {
      titleInfo && <h2 className='text-center text-sm mb-3 px-3 text-white max-w-5xl'>{titleInfo}</h2>
    }

    {meats && <ul className="grid sm:grid-cols-3 grid-cols-2 w-full px-3 gap-1 items-center sm:place-items-center max-w-5xl text-sm">{meats.map((meat, index) => (
      <li key={index} className='text-white'>{meat.title} </li>
    ))}</ul>}

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