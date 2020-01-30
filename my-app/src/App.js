import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './App.css';
import UserForm from "./Components/Form";

const App = ({ }) => {
  return (
    <div className="App">
     
        <label htmlFor="name">Name:</label>
     <UserForm />
    
    </div>
  );
}

export default App;
