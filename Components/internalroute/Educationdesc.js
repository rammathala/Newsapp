import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import './rout.css'
import Ecard from './Ecard';
function Educationdesc() {
   const [educ,seteduc] = useState([])
    let params = useParams();
    let id = params.id;
    const fetchDetails = async()=>{
   db.collection('Education').doc(id).get().then((snapshot)=>seteduc(snapshot.data()))
      
    };
    useEffect(()=>{
fetchDetails();
    },[id])
  return (
    <div className='show'>
      <Ecard id={educ.id} desc={educ.description} title={educ.title} timestamp={educ.date}  image={educ.image} links={educ.links}/>
    </div>
  )
}

export default Educationdesc