import React from 'react'
import blue from "../assest/blue.jpg"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='login_container'>
        <div >
            <img className='image' src={blue}/>
        </div>
        <div className='textbox'>  
            <div className='circle'></div>
            <h3>APP NAME</h3>
            <p>Lorem ipsum dolor, sit amet consectetur<br/> adipisicing elit.</p>
            <input type="text" placeholder='Username'/>
            <br/>
            <input type="text" placeholder='Fullname'/>
            <br/>
            <input type="email" placeholder='Email'/>
            <br/>
            <input type="password" placeholder='Password'/>
            <br/>
            <input type="password" placeholder=' Confirm password'/>
            <br/>
            <button>Register</button>
            <h5>Don't have an account ?<Link to="/" style={{color:"skyblue", textDecoration:"none"}}>  Login</Link></h5>
        </div>
    </div>
  )
}

export default Signup