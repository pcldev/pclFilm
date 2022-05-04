import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import React from "react";
import signInImg from "../../assets/signIn.png";
import { auth } from "../../config/firebase";
import Button from "../button/Button";
import "./Signin.scss";
function Signin(props) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="sign-in">
      <img src={signInImg} alt="" />

      <p>
        You need
        <Button className="small ml-1 mr-1" onClick={signInWithGoogle}>
          login
        </Button>
        to comment!
      </p>
    </div>
  );
}

export default Signin;
