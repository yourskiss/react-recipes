import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './themealdb.css';
import Loading from '../../navigation/loading';

export default function MealdbList() {
  const[recdata, setRecdata] = useState({});
  const[loading, setLoading] = useState(false);
  const[loadmsg, setLoadmsg] = useState('');

  useEffect(()=>{
    setLoading(true);
    setLoadmsg('Loading Recipes');
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=')
    .then(response => {
      console.log(response);
      setLoading(false);
      if(response.status === 200)
      {
        setRecdata(response.data.meals);
      }
      else
      {
        console.log("Error");
      }
    })
    .catch(error => {
      setLoading(false);
      console.log(error.message);
    });
  },[]);

  return (
    <>
         <h1>Source : themealdb.com/</h1>
         {/* <p>Filter by </p>
         <select>
          <option value=''></option>
          <option value='?c=Seafood'>Category</option>
          <option value='?i=chicken'>Ingredient</option>
          <option value='?a=Canadian'>Area</option>
         </select> */}
         <div className="home-row">
          {
            recdata.map && recdata.map((item, index)=><div key={index} className='home-col'>
                <h2>{item.strMeal}</h2>
                <img src={item.strMealThumb} alt={item.strMeal} />
                <aside><Link to={`/mealdb/${item.idMeal}`}>View More</Link></aside>
              </div>)
          }
          </div>


         { loading ? <Loading loadmsg={loadmsg} /> : '' }
    </>
  )
}
