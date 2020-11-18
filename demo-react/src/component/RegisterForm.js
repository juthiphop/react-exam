import React, { useState } from 'react';

function RegisterForm(props) {
  const initData = { id: null, firstName: '', lastName: '' };
  const [data, setValues] = useState(initData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...data,
      [name]: value,
    });

    // const {name, value} = e.target;
    //     setUser({...user, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      firstName: data.firstName,
      lastName: data.lastName,
    });
    setValues({
      firstName: '',
      lastName: '',
    });
  };
  return (
    <form className="register-form">
      {/* <input
        type="text"
        placeholder="first name"
        name="firstName"
        id="firstName"
        value={data.firstName}
        // value=""
        className="todo-input"
        onChange={handleChange('firstName')}
        // onChange={(e) => e.target.value}
      />
      <input
        type="text"
        placeholder="last name"
        name="lastName"
        id="lastName"
        value={data.lastName}
        // value=""
        className="todo-input"
        onChange={handleChange('lastName')}
        // onChange={(e) => e.target.value}
      /> */}
      <input className="" type="text" value={data.firstName} name="firstName" onChange={handleChange} />
      <input className="" type="text" value={data.lastName} name="lastName" onChange={handleChange} />
      <button className="todo-button" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default RegisterForm;
