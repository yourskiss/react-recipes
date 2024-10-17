import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './dummyjson.css';
import Loading from '../../navigation/loading';

export default function DummyjsonList() {
  const[recdata, setRecdata] = useState({});
  const[loading, setLoading] = useState(false);
  const[loadmsg, setLoadmsg] = useState('');

  useEffect(()=>{
    setLoading(true);
    setLoadmsg('Loading Recipes');
    axios.get('https://dummyjson.com/recipes')
    .then(response => {
      console.log(response);
      setLoading(false);
      if(response.status === 200)
      {
        setRecdata(response.data.recipes);
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
         <h1>Source : https://dummyjson.com/</h1>

         <div className="home-row">
          {
            recdata.map && recdata.map((item, index)=><div key={index} className='home-col'>
                <h2>{item.name}</h2>
                <img src={item.image} alt={item.name} />
                <aside><Link to={`/dj/${item.id}`}>View More</Link></aside>
              </div>)
          }
          </div>


         { loading ? <Loading loadmsg={loadmsg} /> : '' }
    </>
  )
}
