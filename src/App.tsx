import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
// import Counter from './components/Counter';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
// import Button from './components/Button';

function App() {


  return (
    <>
{/*    
    <Button onClick={()=>alert("okay")}   text="rohit mishra"/> */}

    <RegistrationForm/>
    {/* <Counter/> */}

    </>
   
  );
}

export default App;
