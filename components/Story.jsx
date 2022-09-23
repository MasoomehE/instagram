import React from 'react'

function Story({img , username}) {
  return (
    <div className=''>
        <div className='flex justify-center items-center '>
                <img src={img} alt="" className='w-14 h-14 rounded-full border-red-500 border-2 p-[1.5px] hover:scale-110 transition duration-200 ease-in-out object-contai' />
        </div>
      <p  className='w-14 text-xs text-center truncate m-1'>{username}</p>
    </div>
  )
}

export default Story
