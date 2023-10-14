import React, { useState } from 'react'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
function Ecard({title,image,timestamp,desc,links}) {
  const tstamps = new Date(timestamp?.toDate()).toLocaleString() /*question mark verify the date then only it works */
  return (
   < div className='Pcards'>
    <h1>{title}</h1>
    <p className='subtitle'>The Army has accused the Pakistan Army of violating the ceasefire agreement and opening fire during an anti-infiltration operation in the Uri Sector</p>
 <h5 className='date'>{tstamps}</h5>
<img src={image} alt='Image'/>
<h5>Image Name</h5>
<p className='descr'>{desc}</p>
<a   href={links}>Related articles<InsertLinkIcon/></a>
</div>
  )
}

export default Ecard