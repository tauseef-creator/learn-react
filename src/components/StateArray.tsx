import React, { useState } from 'react'

const StateArray = () => {
    const [tags, setTags] =    useState( ['tag1', 'tag2', 'tag3'])
    
    const handleClick = () => {
        // setTags([...tags, 'tag4'])
    //    setTags(tags.filter( tag => tag !== 'tag2' && tag !== 'tag3'))
    setTags(tags.map( tag => tag === 'tag4' ? 'tag20' : tag))    
    }
  return (
    <div>
        <button onClick={handleClick}>
            {tags.map((tag, index) => <li key={index}>{tag}</li>)}
        </button>
    </div>
  )
}

export default StateArray