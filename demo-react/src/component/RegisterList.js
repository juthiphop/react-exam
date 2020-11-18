import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

function RegisterList() {
  const [values, setValues] = useState([]);

  const addValue = value =>{
      const newValues = [value, ...values]

      setValues(newValues)
      console.log(value, ...values);
  }

  return (
    <div>
      <h1>Data</h1>
      <RegisterForm onSubmit={addValue}/>
    </div>
  );
}

export default RegisterList;
