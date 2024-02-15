import React from 'react'

const HomesectoinCard = ({src,brandName,description}) => {
  
  return (
    <div className=' cursor-pointer
    flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem]
    mx-3 '>
<div className=' h-[13rem] w-[10rem]'
    >
        <img  className='object-cover object-top w-full h-full 'src={src} alt="" />
   
   <div className="p-4">
    <h3 className='text-lg font-medium'>{brandName}</h3>
    <p className='mt-2 text-sm text-gray-500'>{description}</p>
   </div>
    </div>
      

    </div>
  )
}

export default HomesectoinCard