import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ul>      
        <li>
            <h2>Check recipes from : https://themealdb.com/</h2>
            <Link to='/themealdb'>Show</Link>
        </li>
        <li>
            <h2>Check recipes from : https://dummyjson.com/</h2>
            <Link to='/dummyjson'>Show</Link>
        </li>
        
    </ul>
  )
}
