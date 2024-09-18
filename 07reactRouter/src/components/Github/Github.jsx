import React, { useEffect, useState } from 'react'

export default function Github() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Anirvan08')
        .then(res => res.json())
        .then( data => {
            console.log(data);
            setData(data)
        }        
      )
      
    }, [data])
    
  return (
    <div>Github Followers : {data.followers}
            <img src={data.avatar_url} alt="github image" />

    </div>

  )
}
