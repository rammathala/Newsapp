import React from 'react'
import Political from './Political'
import './News.css'
import Polihome from './Polihome'
import Culture from './Culture'
import Sports from './Sports'
import Education from './Education'
import Business from './Business'
import Local from './Local'
import Agriculture from './Agriculture'
import Cinema from './Cinema'

function News() {
  return (
    <div className='News'>
     <Polihome/>
     <Culture/>
     <Sports/>
     <Education/>
     <Business/>
     <Local/>
     <Agriculture/>
     <Cinema/>
    </div>
  )
}

export default News