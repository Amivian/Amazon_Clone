import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { auth } from './firebase.js';
import "./Login.css";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error =>alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password) .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
          <Link to="/">
            <img className="login_logo" src="././images/amazonlogo.png"/>
          </Link>

            <div className="login_info">
                <h1>Sign-in</h1>

                <form action="" method="">
                    <h5>E-mail</h5>
                    <input type='email'value={email} onChange={e => setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type='password' value={password} onChange ={e => setPassword(e.target.value)}/>
                    <button className="sign_in" onClick={signIn} type="submit">Sign In</button>
                </form>

                <p>
                     By signing-in you agree to <strong> Amivian's Amazon Clone</strong> Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>

                <button className="register_button" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
