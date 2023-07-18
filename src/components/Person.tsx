import React, { useState } from 'react'

const Person = () => {

    const [Person, setPerson] = useState({
        name: "Tauseef",
        age: 22,
        address: {
            city: "Karachi",
            country: "Pakistan"
        }
    })

    const handleClick = () => {
        setPerson(
            {
                ...Person,
                address: {
                    ...Person.address,
                    country: "USA"
                }
            }        
        )
    }
  return (
    <div>
        <button onClick={handleClick}>
            {Person.name + " " + Person.age + " " + Person.address.city + " " + Person.address.country}
        </button>
    </div>
  )
}
  export default Person