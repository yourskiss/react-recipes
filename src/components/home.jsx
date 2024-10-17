import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ul className='homepage'>      
        <li>
            <h2>Themealdb Recipes </h2>
            <aside><Link to='/themealdb'>Show Recipes</Link></aside> 
        </li>
        <li>
            <h2>Dummyjson Recipes</h2>
            <aside><Link to='/dummyjson'>Show Recipes</Link></aside> 
        </li>
        
    </ul>
  )
}
