import React from 'react'
import './Tabs.css'
import { NavLink } from 'react-router-dom'
function Tabs() {
  return (
    <div className='Tabs'>
        <NavLink to={'/Local'}>Local News</NavLink>
        <NavLink to={'/Agriculture'}>Agriculture</NavLink>
        <NavLink to={'/Business'}>Business</NavLink>
        <NavLink to={'/Sports'}>Sports</NavLink>
        <NavLink to={'/Cinemas'}>Cinema</NavLink>
        <NavLink to={'/Education'}>Education</NavLink>
        <NavLink to={'/Political'}>Political</NavLink>
        <NavLink to={'/Cultural'}>Cultural</NavLink>
    </div>
  )
}

export default Tabs