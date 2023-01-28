import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
// import { toast } from "react-toastify";
import InputControl from "../inputControl/Inputcontrol";
import styles from './signUp.module.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../firebase";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
function SignUp(){
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name:"",
        number:"",
        email:"",
        password:"",
    });
    
    const [errMsg, setErrMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmit =()=>{
       if(!values.name|| !values.number|| !values.email|| !values.password){
           setErrMsg("Fill all Fields");
           return;
       }
       setErrMsg("");
       setSubmitButtonDisabled(true);
       createUserWithEmailAndPassword(auth, values.email, values.password, values.number)
       .then(async(res) =>{
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user,{
            displayName: values.name,
        });
       navigate("/Home");
        console.log(user);
       })
       .catch((err)=> {
       setSubmitButtonDisabled(false);
       setErrMsg(err.message);
         });
        }

    // handleing err by toastify
    // const notify = () => toast.warn("Fields are required");

    return(
        <div className={styles.container}>
        <div className={styles.innerBox}> 
       <h1 className={styles.heading}>SignUp</h1>
     
      <InputControl 
      label="Name"
      placeholder="Enter Your Name"
      onChange={(event)=>
      setValues((prev) =>({...prev, name:event.target.value}))}/>
      <InputControl 
      label="Phone No." 
      placeholder="Enter Your Phone Number"
      onChange={(event)=>
     setValues((prev) =>({...prev, number:event.target.value}))}/>
      <InputControl
        label="Email"
        placeholder="Enter Your Email"
        onChange={(event)=>
        setValues((prev) =>({...prev, email:event.target.value}))}/>
      <InputControl
       label="Password" 
       placeholder="Enter Your Password"
       onChange={(event)=>
       setValues((prev) =>({...prev, password:event.target.value}))}/>
      <div className={styles.footer}>
        <b className={styles.err}>{errMsg}</b>
       <button
       disabled ={submitButtonDisabled}
        onClick={handleSubmit}>
        SignUp</button>
       <p>
       Allready have an Account ?{" "}
           <span>
           <Link to="/Login">Login</Link>
           </span>
       </p>
      </div>
       </div>
   </div>
    )
}

export default SignUp;