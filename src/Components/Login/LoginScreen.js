import React from 'react';
import './Login.css';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Login() {
  const [userState, setUserState] = useState([
    { userName: 'a', password: '1' },
    { userName: 'b', password: '2' }
  ])
  const [newUserState, setNewUserState] = useState({ userName: '', password: null })
  const onFieldsChanged = (event) => {
    let copy = { ...newUserState };
    copy[event.target.name] = event.target.value;
    setNewUserState(copy);
  }
  const loginButtonClicked = () => {
    //console.log(userState.map(u=>u.userName).filter(n=>n===newUserState.f))
    if((userState.filter(user => user.userName === newUserState.userName).filter(user => user.password === newUserState.password).length )> 0) {
    console.log('login')
    } else {
      console.log('login erorr')
    }
  }
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      UserName: <input
        type="text"
        //value="d"
        onChange={onFieldsChanged}
        name='userName'
      />
      Password: <input
        type='text'
        //value="4"
        onChange={onFieldsChanged}
        name='password'
      />
      <input
        type='button'
        value='Login'
        onClick={loginButtonClicked}
      />
    </div>
  )
}