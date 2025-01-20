 
 
import React, { useState, useEffect } from 'react';

export function Filteruser() {
  const [list, setList] = useState([]);
  const [errors, setErrors] = useState('');
  const [input, setInput] = useState('');
  const  userdata = async () => {
    const url = 'https://fakestoreapi.com/users';
    try 
    { 
        const response = await fetch(url); 
        if (response.ok) 
        { 
          const data = await response.json(); 
          console.log(data);
          setList(data); 
        } 
        else 
        { 
          //throw new Error('Network response was not ok'); 
          setErrors('Network response was not ok'); 
        }
    } 
    catch (error) 
    { 
      setErrors(error.message); 
    }
  }
  
  useEffect(()=>{
    userdata()
    return () => { setList([]); setErrors(''); };
  },[])
  
  const filteredData = list.filter(item => { 
    var fullname = item.name.firstname.toLowerCase() + " " + item.name.lastname.toLowerCase();
    return fullname.includes(input.toLowerCase()) 
  });

  if(errors) return(<div>{errors}</div>)
  return (
    <div className='App'>
      <h1>Filter User Data onChange</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <p>&nbsp;</p>
      <ul>
        {filteredData.length > 0 ? ( filteredData.map((item) => ( <li key={item.id} style={{ borderBottom: 'solid 2px #f30' }}> {item.email} <br /> {item.name.firstname} {item.name.lastname} </li> )) ) : ( <li>No results found</li> )}
      </ul>
    </div>
  );
}

 