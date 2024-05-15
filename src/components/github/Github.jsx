import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
  const data = useLoaderData()
    // const [data, seData] = useState([])
    // useEffect(()=> {
    //   fetch('https://api.github.com/users/Shilpajha29')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Github profile" width={300}/>
    </div>
  )
}

export default Github
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Shilpajha29')
  return response.json()
}
