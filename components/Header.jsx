import Image from 'next/image'
import React from 'react'
import {SearchIcon,MenuIcon,PaperAirplaneIcon,PlusCircleIcon,UserGroupIcon,HeartIcon} from "@heroicons/react/outline"
import {HomeIcon} from "@heroicons/react/solid"

function Header() {
  return (
    <div className=' border-b  shadow-sm bg-white sticky top-0 z-50'>
      <div className=' flex items-center justify-between xl:mx-auto max-w-6xl'>

          {/* left - logo */}
          <div className='hidden lg:inline-grid w-32 h-12 cursor-pointer relative m-2'>
                  <Image
                  src="https://www.didogram.com/wp-content/uploads/2020/08/12-logo.png" layout='fill'
                  alt='instagram logo'
                  objectFit='contain'
                  />
          </div>
          <div className='lg:hidden w-10 h-9 cursor-pointer relative flex-shrink-0 m-2'>
                  <Image
                  src="https://fs.noorgram.ir/xen/2020/10/452_5505ba3ca7398e19b395e7a44807cc7c.png" layout='fill'
                  alt='instagram logo'
                  objectFit='contain'
                  />
          </div>

          {/* middle-search */}
          <div className='max-w-xs'>
            <div className='relative mt-1'>
              <div className='absolute inset-y-0 flex items-center px-2 pointer-events-none'>
                <SearchIcon className=' w-6 h-6 text-gray-500 ' />
              </div>
              
              <input type="text" className='rounded-lg px-10 w-full bg-gray-50 border-gray-300 focus:border-gray-700 focus:ring-black text-sm md:text-base' placeholder='search...' />    

            </div>
          </div>

          {/* right */}
          <div className='flex justify-center gap-1 items-center'>
            
            <HomeIcon className='btn' />
            <MenuIcon className='inline-flex md:hidden hover:scale-125 w-6 m-1 cursor-pointer transition-all' />

            <div className='btn relative'>
              <PaperAirplaneIcon className='rotate-45' />
              <div className='absolute  bg-red-600 text-sm rounded-full flex w-5 h-5 items-center -right-2 -top-2 justify-center animate-pulse'>3</div>
            </div>

            <PlusCircleIcon className='btn' />
            <UserGroupIcon className='btn' />
            <HeartIcon className='btn' />

            <img src="/m.jpeg" alt="" className='img'/>
          </div>
        
      </div>
    </div>
  )
}

export default Header
