import React, { useState } from 'react'
import { produce } from 'immer'

const StateObjArray = () => {
    const [bugs, setBugs] = useState([
        {id: 1, name: "bug1", resolved: false},
        {id: 2, name: "bug2", resolved: false}
    ])
    const handleClick = () => {
        // setBugs(bugs.map( bug => bug.id === 1 ? {...bug, resolved: true} : bug))
        setBugs(produce(draft => {
              const bug = draft.find(bug => bug.id === 1);
              if(bug) bug.resolved = true;      
        }))
    }
  return (
    <div>
        <button onClick={handleClick}>
            {bugs.map( bug => <li key={bug.id}>{bug.resolved? "true": "false"}</li>)}
        </button>
    </div>
  )
}

export default StateObjArray