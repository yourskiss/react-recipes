
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
        </ul>
      </section> 
    }
  </>
    
  )
}
