import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from './firebase';
import Co from './home pages/Co';

function Culture() {
  const [co, setco] = useState([])
  useEffect(()=>{
     getpns();
   },[]);
   function getpns(){
     db.collection('Cultural').orderBy('date','desc').limit(3).onSnapshot(function(querySnapshot){
       setco(
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
         <p>Cultural</p>
         <Link to={'/Cultural'}>More</Link>
    </div>
   
    <div className='Polihome'>
    {
      co.map(po=>(
        <Co id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlinks}/>
      ))
    }
     
    </div>
    </div>
  )
}

export default Culture