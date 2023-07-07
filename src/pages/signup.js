import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSignup(e) {
    e.preventDefault();
    if (!name) {
      return alert("Please enter name");
    }
    if (!email) {
      return alert("Please enter email");
    }
    if (password.length < 8) {
      return alert("Password should be atleast 8 characters");
    }
    const userData = { name, email, password };
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Signup success");
        localStorage.setItem("profile", JSON.stringify(userData));
        navigate("/");
      })
      .catch((err) => {
        return alert(err.message);
      });
  }
  return (
    <div className="signupContainer">
      <div className="signupContent">
        <div className="signupTop">
          <h1>Create Account</h1>
        </div>
        <form onSubmit={handleSignup}>
          <label>
            <div className="formText">Name</div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            <div className="formText">Email Address</div>
            <input
              type="text"
              name="name"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="mutedText">
              We'll never share your email with anyone else.
            </div>
          </label>
          <label>
            <div className="formText">Password</div>
            <input
              type="password"
              name="name"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="signupbtn" type="submit">
            Sign Up
          </button>
          <div className="signupForm">
            Already have an account ? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
      <div className="signup__bg"></div>
    </div>
  );
};
export default Signup;
