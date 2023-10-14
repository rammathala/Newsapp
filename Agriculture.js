import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from './firebase';
import Ao from './home pages/Ao';

function Agriculture() {
  const [agric, setagric] = useState([])
  useEffect(()=>{
     getpns();
   },[]);
   function getpns(){
     db.collection('Agricultural').orderBy('date','desc').limit(3).onSnapshot(function(querySnapshot){
       setagric(
         querySnapshot.docs.map((doc)=>({
           id:doc.id,
           title:doc.data().title,
           image: doc.data().image,
           desc: doc.data().description,
           artlink:doc.data().artlink,
           date:doc.data().date
         }))
       );
     });
     
   }
  return (
    <div className='Polihome1'>
    <div className='Poliindex'>
         <p>Agriculture</p>
         <Link  to={'/Agriculture'}>More</Link>
    </div>
   
    <div className='Polihome'>
    {
      agric.map(po=>(
        <Ao id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlinks}/>
      ))
    }
    </div>
    </div>
  )
}

export default Agriculture