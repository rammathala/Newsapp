import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from './firebase';
import Eo from './home pages/Eo';

function Education() {
  const [edu, setedu] = useState([])
  useEffect(()=>{
     getpns();
   },[]);
   function getpns(){
     db.collection('Education').orderBy('date','desc').limit(3).onSnapshot(function(querySnapshot){
       setedu(
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
         <p>Education</p>
         <Link  to={'/Education'}>More</Link>
    </div>
   
    <div className='Polihome'>
    {
      edu.map(po=>(
        <Eo id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlinks}/>
      ))
    }
    
    </div>
    </div>
  )
}

export default Education