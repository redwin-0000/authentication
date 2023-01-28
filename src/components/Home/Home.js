import React from "react";
import {Link} from 'react-router-dom';
import styles from './Home.module.css'
//import InputControl from "../inputControl/Inputcontrol";
import { getAuth, signOut } from "firebase/auth";

function Home(){
    
    const auth = getAuth();
    signOut(auth).then(() => {
    console.log("Log Out")
}).catch((error) => {
  console.log("error");
});


    return(
        <div className={styles.container}>
        <div className={styles.heading}>
        <h1>Wellcome to Home Page</h1>
        <Link to="/Login"><button className={styles.logOutbtn}>Log Out</button></Link>
        </div>
        <h1>You are LoggedIn</h1>
          </div>
         
    )
}

export default Home;