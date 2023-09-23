import React, { useRef, useState } from 'react'
import Header from './Header'
import CheckValidData from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/Firebase"

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const username = useRef('');
  const email = useRef(''); 
  const password = useRef(''); 

  const handleButtonClick = () => {
    console.log('Name field here', username)
  // Validate Form Data
  const message = CheckValidData(email.current.value, password.current.value)
  setErrorMessage(message);
  if(message) return; 

  // Sign In Signup logic
  if(!isSigninForm){
    // Signup Logic
    createUserWithEmailAndPassword(auth, username.current.value, email.current.value, password.current.value)
    .then((userCrendential) => {
      //Sign in
      const user = userCrendential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + '-' + errorMessage);
    })
  } else {
    // Sign In logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCrendential) => {
      const user = userCrendential.user
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + '-' + errorMessage)
    })
  }
  }

  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm)
  }
  
  return (
    <div className='bg-slate-950 h-full'>
      <Header />
      <form onSubmit={(event) => event.preventDefault()} className='p-12 bg-gray-300 m-auto w-96 mt-6 mb-6 rounded-lg bg-opacity-20'>
        <h2 className='p-5 m-2 text-white text-2xl pl-0'>
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSigninForm && (
          <>
          <input ref={username} type='text' placeholder='Full Name' className='p-2 m-2 rounded-lg' />
          <p>{errorMessage}</p>
          </>
        )}
        <input ref={email} type='text' placeholder='Email Address' className='p-2 m-2 rounded-lg' />
        <input ref={password} type='password' placeholder='Password' className='p-2 m-2 rounded-lg' />
        <p>{errorMessage}</p>
        <button className='pl-10 pr-10 pt-2 pb-2 text-white m-4 ml-2 w-full rounded-lg bg-red-600' onClick={handleButtonClick}>
        {isSigninForm ? "Sign In" : "Sign Up"}
          </button>
        <p className='text-white cursor-pointer' onClick={toggleSignInForm}>
        {isSigninForm ? "New to Netflix? Sign up now" : "Already Registered User"}
          </p>
      </form>
    </div>
  )
}

export default Login
