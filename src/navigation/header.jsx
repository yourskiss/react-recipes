
import React, {  useState } from "react";
import { NavLink } from "react-router-dom";
import './header.css';
 

export default function Header() {
  const [pos, setPos] = useState(false);
 
 
   
 

  const showHideHandler = (val) => {
    if(val === 'open')
    {
      setPos(true)
    }
    else
    {
      setPos(false);
    }
  }


  return (<>
    <header className='header'>
       <img src="../../vite.svg" alt="abc" /> 


      <aside onClick={()=>showHideHandler('open')}>
        <span></span>
        <span></span>
        <span></span>
      </aside>

    

    </header>

    {
        !pos ? '' : <section className="headerMenu">
        <aside onClick={()=>showHideHandler('close')}>
          <span></span>
          <span></span>
        </aside>
        <ul>
          <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')} onClick={()=>showHideHandler('close')}>Home</NavLink></li>
          
          <li><NavLink to='/themealdb' className={({ isActive }) => (isActive ? 'active' : '')} onClick={()=>showHideHandler('close')}>The Meal DB</NavLink></li>

          <li><NavLink to='/dummyjson' className={({ isActive }) => (isActive ? 'active' : '')} onClick={()=>showHideHandler('close')}>Dummyjson</NavLink></li>
        </ul>
      </section> 
    }
  </>
    
  )
}
