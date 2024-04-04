import React from 'react'
import blue from "../assest/blue.jpg"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login_container'>
        <div >
            <img className='image' src={blue}/>
        </div>
        <div className='textbox'>  
            <div className='circle'></div>
            <h3>APP NAME</h3>
            <p>Lorem ipsum dolor, sit amet consectetur<br/> adipisicing elit.</p>
            <input type="text" placeholder='username'/>
            <br/>
            <input type="password" placeholder='password'/>
            <br/>
            <button>Login</button>
            <h5>Don't have an account ?<Link to="/signup" style={{color:"skyblue", textDecoration:"none"}}>  Sign up</Link></h5>
        </div>
    </div>
  )
}

export default Login