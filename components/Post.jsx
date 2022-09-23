import React from 'react'
import {BookmarkAltIcon, BookmarkIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon} from "@heroicons/react/outline"

function Post({id , username , img , userImg , caption}) {
  return (
    <div className='bg-whit my-7 border rounded-sm '>
        
        {/* header */}

        <div className='flex items-center p-5'>
            <img src={userImg} alt="" className='rounded-full w-12 h-12 object-contain p-1 mr-3' />
            <p className='flex-1 font-bold'>{username}</p>
            <DotsHorizontalIcon className='h-5' />
        </div>

        {/* img-post*/}
        <img src={img} alt="" className='object-cover w-full' />

        {/* buttons */}
        <div className='flex justify-between items-center m-6'>
            <div className='flex  items-center gap-6'>
                <HeartIcon className='btn-share' />
                <ChatIcon className='btn-share' />
                <PaperAirplaneIcon className=' btn-share rotate-45 relative bottom-1' />
            </div>
            <BookmarkIcon className='btn-share' />
        </div>

        {/* caption */}

        {/* comments */}

        {/* input-box */}

    </div>
  )
}

export default Post
