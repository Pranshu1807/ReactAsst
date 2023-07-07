import React, { useContext, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    if (!email) {
      return alert("Please enter email");
    }
    if (!password) {
      return alert("Please enter password");
    }
    const userData = { email, password };
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login Success");
        localStorage.setItem("profile", JSON.stringify(userData));
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  return (
    <div className="loginContainer">
      <div className="login__bg"></div>
      <div className="loginContent">
        <form onSubmit={handleLogin} className="loginForm">
          <label>
            <div className="formText">Email Address</div>
            <input
              type="text"
              name="name"
              className="loginInput"
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
              className="loginInput"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="loginBtn">
            Login
          </button>
          <div className="signupForm">
            Don't have an account ? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
