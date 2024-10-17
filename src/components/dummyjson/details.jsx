import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./dummyjson.css"
import Loading from '../../navigation/loading';

export default function DummyjsonDetails() {
  const[loading, setLoading] = useState(false);
  const[loadmsg, setLoadmsg] = useState('');

const[recdata, setRecdata] = useState({});
const { id } = useParams();

  useEffect(()=>{
    setLoading(true);
    setLoadmsg('Recipe Loading');
    axios.get(`https://dummyjson.com/recipes/${id}`)
    .then(response => {
      console.log(response);
      setLoading(false);
      if(response.status === 200)
      {
        setRecdata(response.data);
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

       <div className="meal-main">
          
          <div className='meal-left'>
            <img src={recdata.image} alt={recdata.name} />
          </div>
          <div className='meal-right'>
            <h2>{ recdata.name }</h2>
            <p>{recdata.cuisine} </p>
            <ul>
              <li>Ingredients:</li>
              {
                recdata?.ingredients?.map && recdata.ingredients.map((item, index)=><li key={index}>{item}</li>)
              }
            </ul>
          </div>
          <div className='meal-bottom'>
            <ol>
              <li>Instructions:</li>
              {
                recdata?.instructions?.map && recdata.instructions.map((itm, index)=><li key={index}>{itm}</li>)
              }
            </ol>
          </div>
            
 
        </div>

        { loading ? <Loading loadmsg={loadmsg} /> : '' }
    </>
  )
}
 