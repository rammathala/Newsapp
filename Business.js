import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from './firebase';
import Bo from './home pages/Bo';

function Business() {
  const [busi, setbusi] = useState([])
  useEffect(()=>{
     getpns();
   },[]);
   function getpns(){
     db.collection('Business').orderBy('date','desc').limit(3).onSnapshot(function(querySnapshot){
       setbusi(
         querySnapshot.docs.map((doc)=>({
           id:doc.id,
           title:doc.data().title,
           image: doc.data().image,
           desc: doc.data().description,
           artlink:doc.data().links,
           date:doc.data().date
         }))
       );
     });
     
   }
  return (
    <div className='Polihome1'>
    <div className='Poliindex'>
         <p>Business</p>
         <Link  to={'/Business'}>More</Link>
    </div>
   
    <div className='Polihome'>
    {
      busi.map(po=>(
        <Bo id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlinks}/>
      ))
    }
    
    </div>
    </div>
  )
}

export default Business