 
 
import React, { useState, useEffect, useRef } from 'react';

export function Cacherequest() {
  const [list, setList] = useState([]);
  const [errors, setErrors] = useState('');
  const [cached, setCached] = useState(false);
  const cache = useRef({ data: null, timestamp: null }); 
  const  userdata = async () => {
    const url = 'https://fakestoreapi.com/users';
    const cacheExpiry = 5 * 60 * 1000; 
    try 
    { 
        const now = new Date().getTime();
        console.log('expiry:', cacheExpiry);
        console.log('time:', now); 
        console.log('timestamp:', cache.current.timestamp); 


        if (cache.current.data && (now - cache.current.timestamp < cacheExpiry))
        { 
            console.log('Using cache data - ', cache.current.data); 
            setList(cache.current.data); 
            setCached(true);
        } 
        else  
        {
            const response = await fetch(url); 
            if (response.ok) 
            { 
                const data = await response.json(); 
                cache.current.data = data; 
                cache.current.timestamp = now;
                setList(data); 
                setCached(false);
                console.log('adding cache data - ', cache.current.data); 
            } 
            else 
            { 
                //throw new Error('Network response was not ok'); 
                const errorData = await response.text();
                setErrors('Network response was not ok '+ errorData); 
            }
        }
    } 
    catch (error) 
    { 
        setErrors('Fetch error: ' + error.message); 
        console.error('Fetch error:', error);
    }
  }
  
  useEffect(()=>{
    userdata()
    return () => { setList([]); setErrors(''); };
  },[])
   
  if(errors) return(<div>{errors}</div>)
  return (
    <div className='App'>
      <h1>{cached ? 'Data is from cache' : 'Data is from network'} <br/><br/></h1>
      <ul>
        {
          list.map((item) =>  <li key={item.id} style={{'borderBottom':'solid 2px #f30'}}>{item.email} - {item.name.firstname} {item.name.lastname}</li> )
        }
      </ul>
    </div>
  );
}

 