import React from 'react'
import { faker } from '@faker-js/faker';
import {useState , useEffect} from 'react';
import Story from './Story';


function Stories() {

    const [suggestions , setSuggestions] = useState([]);

    useEffect(() => {
      const suggestions= [...Array(20)].map((_,index) => ({
        avatar : faker.image.avatar(),
        name : faker.name.firstName(),
        username : faker.internet.userName(),
        phone : faker.phone.number(),
        company : faker.company.bsNoun(),
        email : faker.internet.email(),
        id : index,
      }));
        setSuggestions(suggestions);
    },[]);



  return (
    <div className='flex space-x-2 justify-center items-center border border-gray-200 rounded-sm overflow-x-scroll bg-white mt-5 p-3 scrollbar-thin scrollbar-thumb-black'>
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar} 
          username={profile.username}
         />
      ))}
    </div>
  )
}

export default Stories
