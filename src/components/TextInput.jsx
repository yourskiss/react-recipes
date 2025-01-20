import React, { useState } from 'react';

 

const InputField = ({ label, name, type, value, onChange, validation  }) => {
    const [error, setError] = useState('');

    const handleBlur = () => {
        if (validation) 
        {
          const errorMessage = validation(value);
          setError(errorMessage);
        }
      };

    return (
      <div>
        <label htmlFor={name}>{label}:</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          
        />
        {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
      </div>
    );
  };
export default InputField;