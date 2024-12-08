import React, { useState, useContext } from 'react';
import classes from "./SignUp.module.css"; // Assuming you have some styles here
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from "../../Components/DataProvider/DataProvider"
import { Type } from '../../Utility/Action.type';
import {CircleLoader} from "react-spinners";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn:false,
    signUp:false
  })

  const [{user}, dispatch] = useContext(DataContext);
    const navigate = useNavigate();
    //console.log(user);

  const authHandeler = async (e)=>{
    e.preventDefault();
    console.log(e.target.name);
    if(e.target.name == "signin"){
    //firebase auth
    setLoading({...loading, signIn:true})
    signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
    });
        setLoading({...loading, signIn:false});
        navigate("/");
    })
      .catch((err)=>{
      setError(err.message);
      setLoading({...loading, signIn:false})
    });

    }else{
      setLoading({...loading, signUp:true})
    createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
      
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user
    });
        setLoading({...loading, signUp:false});
        navigate("/");
    })
    .catch((err)=>{
      setError(err.message);
      setLoading({...loading, signUp:false})
    });
    }
  }


  // console.log(password, email)
  return (
    <section className={classes.login}>
      {/* Logo */}
      <Link to={"/"}>
        <img 
          src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' 
          alt='Amazon Logo' 
        />
      </Link>
      {/*form*/}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action=''>
          <div>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' id='email'/>
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' id='password'/>
          </div>
          <button type='submit' onClick={authHandeler} name='signin' className={classes.login_signbutton}
          >{
            loading.signIn ?(
            <CircleLoader color='#000' size={15}></CircleLoader>
          ) : (
            "sign In"
          )}
            Sign In
          </button>
        </form>
        {/* agreement*/}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          See our privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        {/* create account btn*/}
        <button type='submit' name='signup' onClick={authHandeler} className={classes.login_registerbutton}
        >
          {loading.signUp ? (
            <CircleLoader color='#000' size={15}></CircleLoader>
          ) :(
            "Create Your Amazon Account"
        

          )}
        
          </button>

        {error && ( 
          <small style={ {paddingTop:"5px",color:"red"}}>{error}</small>
        
        )}

      </div>
    </section>
  );
}

export default Auth;
