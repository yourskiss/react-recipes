import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuthentication = (WrappedComponent, auth) => {
  return () => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!auth) {
        navigate('/');
      }
    }, [auth]);

    return <WrappedComponent />;
  };
};

export default withAuthentication;


// import React, { useState, createContext, useContext } from 'react';
//  const MyContext = createContext();

// export function App() {
//   const [data, setData] = useState(0);
//   return (
//     <MyContext.Provider value={{ data, setData }}>
//       <MyComponent />
//     </MyContext.Provider>
//   );
// }



// const MyComponent = () => {
//   const { data, setData } = useContext(MyContext);
//   return (
//     <>
//       <p>{data}</p>
//       <button onClick={()=>{ setData(data + 1) }}>Click me!</button>
//     </>
//   );
// };