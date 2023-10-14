import React from 'react'
import { Link } from 'react-router-dom';

function Po({title,image,desc,stamp,id}) {

  const stamps = new Date(stamp.toDate()).toLocaleString()
 

  return (
    <>
    <Link to={'Political/'+ id}>
    <div className='card' >
    <div className='image'>
         <img src={image}/>
         <p>{title}</p>
    </div>
    <div className='descti'>
        <p>{JSON.stringify(desc).substring(0,190).replace(/['"]+/g, '')}........</p>
        <p className='time'>{stamps}</p>
        {/* above p is 
        conversion to 
        string and 
        substring and 
        removing quotations from string*/}
    </div>
</div></Link>

</>
  )
}

export default Po