import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import './rout.css'
import Ecard from './Ecard';
import Bcard from './Bcard';
function Businessdesc() {
   const [educ,seteduc] = useState([])
    let params = useParams();
    let id = params.id;
    const fetchDetails = async()=>{
   db.collection('Business').doc(id).get().then((snapshot)=>seteduc(snapshot.data()))
      
    };
    useEffect(()=>{
fetchDetails();
    },[id])
  return (
    <div className='show'>
      <Bcard id={educ.id} desc={educ.description} title={educ.title} timestamp={educ.date}  image={educ.image} links={educ.links}/>
    </div>
  )
}

export default Businessdesc