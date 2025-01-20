import React, { useState } from 'react';
import InputField from "./TextInput"
 

const  FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    if (nameError || emailError || phoneError) {
      alert('Fix validation errors before submitting.');
      return;
    }
    console.log('Form Data:', formData);
  };

  const validateName = (name) => {
    if (!name.trim()) {
      return 'Name is required.';
    } else if (name.length < 3) {
      return 'At least 3 characters.';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return 'Email is required.';
    } else if (!emailRegex.test(email)) {
      return 'Invalid email.';
    }
    return '';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone.trim()) {
      return 'Phone is required.';
    } else if (!phoneRegex.test(phone)) {
      return 'Must be 10 digits.';
    }
    return '';
  };


  return (
    <div>
      <h2>Form Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <InputField
            type="text"
            label="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            validation={validateName}
          />
        </div>
        <div>
          <InputField
            type="email"
            label="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            validation={validateEmail}
          />
        </div>
        <div>
          <InputField
            type="tel"
            label="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            validation={validatePhone}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
