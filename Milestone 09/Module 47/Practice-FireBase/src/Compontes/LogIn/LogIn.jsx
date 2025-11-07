import React, { useState } from "react";
import "./Login.css";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../env/private.config";

const GoogleProvider = new GoogleAuthProvider();

const LogIn = () => {
  const [user, SetUser] = useState(null);
  const handleGooglesign = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        console.log(result.user);
        SetUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGooglesignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Done");
        SetUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Please LogIn</h1>
      {user ? (
        <button onClick={handleGooglesignout} className="btn">
          Sign Out
        </button>
      ) : (
        <button onClick={handleGooglesign} className="btn">
          Sign in With Google
        </button>
      )}
      {user && (
        <div>
          <h1> User Name : {user.displayName} </h1>
          <p> User E-mail : {user.email} </p>
          <div>
            <img src={user.photoURL} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
