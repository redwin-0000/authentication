import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import InputControl from "../inputControl/Inputcontrol";
import styles from './Login.module.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";

function Login(){
  
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const [values, setValues] = useState({
        email:"",
        Password:"",
    })
const handleSubmit=()=>{
   if(!values.email|| !values.Password){
    setErrMsg("Fill required fields");
    return;
   }
   setErrMsg("");
   setSubmitButtonDisabled(true);
   
   signInWithEmailAndPassword(auth, values.email, values.Password)
   .then(async(res)=>{
    setSubmitButtonDisabled(false);
    
    navigate("/Home")
   })
   .catch((err)=>{
    setSubmitButtonDisabled(false);
    setErrMsg(err.message);
   })
    }

return(
        <div className={styles.container}>
         <div className={styles.innerBox}> 
        <h1 className={styles.heading}>Login</h1>
       <InputControl 
       label="Email" 
       placeholder="Enter Your Email"
       onChange={(event)=>
        setValues((prev) =>({...prev, email:event.target.value}))}/>
       <InputControl 
       label="Password" 
       placeholder="Enter Your Password"
       onChange={(event)=>
        setValues((prev) =>({...prev, Password:event.target.value}))}/>
       <div className={styles.footer}>
       <b className={styles.err}>{errMsg}</b>
        <button
        disabled={submitButtonDisabled}
        onClick={handleSubmit}>Login</button>
        <p>
            Register YourSelf ?{" "}
            <span>
           <Link to="/">Sign Up</Link>
           </span>
          
        </p>
    
       </div>
        </div>
    </div>
    )
}

export default Login;