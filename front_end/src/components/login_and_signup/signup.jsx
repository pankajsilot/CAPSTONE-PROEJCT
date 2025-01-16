import React, { useState } from 'react'
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";
import YupPassword from 'yup-password';
// import png from './bikewash.png';
// import title from "./title1.png"
YupPassword(yup);

const Signup = () => {

    const navigate = useNavigate()
    const [load,setLoad] = useState(false)
    const [userType,setUserType] = useState(new URLSearchParams(window.location.search).get('userType'))
    const [secretkey,setSecretkey] = useState("")
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")

    const signup = ()=>{

        if(name === ""){
            alert("Please enter your name")
            return
        }

        if(mail === ""){
            alert("Please enter your email")
            return
        }

        if(password === ""){
            alert("Please enter your password")
            return
        }

        if(password.length<8){
            alert("Password must be at least 8 characters long")
            return
        }

        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail)){
            alert("Invalid email address")
            return
        }

        // console.log(values)
        setLoad(true)
        // https://bikewashapp.onrender.com/signup
        fetch("http://localhost:9000/signup",
        {
          method : "POST",
          crossDomain : true,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin' : "*",
          },
          body: JSON.stringify({
            name,
            mail,
            phone,
            password,
            usertype: userType,
            secretkey,
          }),
        })
        .then((ans)=>ans.json())
        .then((data)=>{
            // console.log(data)
            setLoad(false)
            if(data.status==="401"){
                // alert(data.msg)
                // NotificationManager.error(data.msg,"Error",4000)
                alert(JSON.stringify(data.msg))
                return
            }
            else if(data.status==="200"){
                // NotificationManager.success(data.msg,"Success",4000)
                alert(JSON.stringify(data.msg));
                // localStorage.setItem("userName",data.name ?? "User");
                // localStorage.setItem("token",data.token);
                // localStorage.setItem("userType",data.usertype);
                // localStorage.setItem("userId",data.id);
                navigate(`/login`) 
            }
            else if(data.msg==="Invalid secret key"){
                // NotificationManager.error(data.msg,"Error !! Please enter the correct Secret key",4000)
                alert(JSON.stringify(data.msg))
            }
        })
        .catch((error)=>{
            console.log(error)
            setLoad(false)
            alert(JSON.stringify(error?.message))
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        signup()
    }

return (

    <div className='signup-container'>
        <div className='signup-inputs'>

            <div className='signup-heading'>
                {userType === "user" ? "User" : userType === "doctor" ? "Doctor" : ""} Signup
            </div>

            <div className='input-div'>
                <label className='input-label'>Name : </label><br/>
                <input
                    className='input-box'
                    type="text"
                    name="name"
                    value={name}
                    placeholder='Enter your name here'
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    onBlur={()=>{
                        setName(name)
                    }}
                /><br/>
                {/* {formik.touched.name && formik.errors.name ?<span className='error'>{formik.errors.name}</span>:"" } */}
            </div>

            <div className='input-div'>
                <label className='input-label'>Mail : </label><br/>
                <input
                    className='input-box'
                    type="text"
                    name="mail"
                    placeholder='Enter your email here'
                    value={mail}
                    onChange={(e)=>{
                        setMail(e.target.value)
                    }}
                    onBlur={()=>{
                        setMail(mail)
                    }}
                /><br/>
                {/* {formik.touched.mail && formik.errors.mail ?<span className='error'>{formik.errors.mail}</span>:"" } */}
            </div>

            <div className='input-div'>
                <label className='input-label'>Password : </label><br/>
                    <input
                        className='input-box'
                        type="password"
                        name="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        onBlur={()=>{
                            setPassword(password)
                        }}
                    /><br/>
                {/* {formik.touched.password && formik.errors.password?<span className='error'>{formik.errors.password}</span>:""} */}
            </div> 


            <div className='footer'>
                <button className='btn' type="submit" onClick={handleFormSubmit}>
                    {load? "Submitting..." :"Signup"}
                </button>
                <div className='already'><Link to={`/login`}>Already have an account?  Login</Link></div>
            </div>
        </div>
    </div> 

  )
}

export default Signup