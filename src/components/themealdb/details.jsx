import React, { useEffect, useState, useRef  } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import "./themealdb.css"
import Loading from '../../navigation/loading';

export default function MealdbDetails() {
  const[loading, setLoading] = useState(false);
  const[loadmsg, setLoadmsg] = useState('');

const[recdata, setRecdata] = useState({});
const { idMeal } = useParams();

 

 

  useEffect(()=>{
    setLoading(true);
    setLoadmsg('Recipe Loading');
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(response => {
      console.log(response);
      setLoading(false);
      if(response.status === 200)
      {
        setRecdata(response.data.meals[0]);
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
        
       <div className="meal-main">
          
          <div className='meal-left'>
            <img src={recdata.strMealThumb} alt={recdata.strMeal} />
          </div>
          <div className='meal-right'>
            <h2>{ recdata.strMeal }</h2>
            <p>{recdata.strCategory} | {recdata.strArea}</p>
            <ul>
              <li>Ingredients:</li>
              { recdata.strIngredient1 && <li>{ recdata.strIngredient1 }, { recdata.strMeasure1 } </li> }
              { recdata.strIngredient2 && <li>{ recdata.strIngredient2 }, { recdata.strMeasure2 } </li> }
              { recdata.strIngredient3 && <li>{ recdata.strIngredient3 }, { recdata.strMeasure3 } </li> }
              { recdata.strIngredient4 && <li>{ recdata.strIngredient4 }, { recdata.strMeasure4 } </li> }
              { recdata.strIngredient5 && <li>{ recdata.strIngredient5 }, { recdata.strMeasure5 } </li> }
              { recdata.strIngredient6 && <li>{ recdata.strIngredient6 }, { recdata.strMeasure6 } </li> }
              { recdata.strIngredient7 && <li>{ recdata.strIngredient7 }, { recdata.strMeasure7 } </li> }
              { recdata.strIngredient8 && <li>{ recdata.strIngredient8 }, { recdata.strMeasure8 } </li> }
              { recdata.strIngredient9 && <li>{ recdata.strIngredient9 }, { recdata.strMeasure9 } </li> }
              { recdata.strIngredient10 && <li>{ recdata.strIngredient10 }, { recdata.strMeasure10 } </li> }
              { recdata.strIngredient11 && <li>{ recdata.strIngredient11 }, { recdata.strMeasure11 } </li> }
              { recdata.strIngredient12 && <li>{ recdata.strIngredient12 }, { recdata.strMeasure12 } </li> }
              { recdata.strIngredient13 && <li>{ recdata.strIngredient13 }, { recdata.strMeasure13 } </li> }
              { recdata.strIngredient14 && <li>{ recdata.strIngredient14 }, { recdata.strMeasure14 } </li> }
              { recdata.strIngredient15 && <li>{ recdata.strIngredient15 }, { recdata.strMeasure15 } </li> }
            </ul>
          </div>
          <div className='meal-bottom'>
            <p>
              <b>Method:</b>
              { recdata.strInstructions }
            </p>
            <ReactPlayer controls={true} url={ recdata.strYoutube } width='100%'  height="auto" />
          </div>
          
 
        </div>

        { loading ? <Loading loadmsg={loadmsg} /> : '' }
    </>
  )
}
 