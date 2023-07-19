import React, { useState } from 'react'

interface Props {
    children: string;
    lengthToSet: number;
}

 

const ExpandableText = ({children, lengthToSet}: Props) => {
    const[isExpanded, setExpanded] = useState(false)

    const handleLength = () => {
        setExpanded(!isExpanded)
     }

     if(children.length <= lengthToSet)
     return (
         <p>
        {children}
      </p>
          )
          return (
    <div>
        {isExpanded? children: children.substring(0, lengthToSet)+"..."}
        <button onClick={handleLength}>
            {isExpanded? "Less": "More"}
        </button>
    </div>
  )
}

export default ExpandableText