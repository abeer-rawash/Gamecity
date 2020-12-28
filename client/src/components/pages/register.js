import React, { useState } from 'react';
import  { registerUser } from '../../actions';
import { connect } from 'react-redux';




const Register = ({ registerUser, isLoggedIn}) => {
    console.log(isLoggedIn,"isLoggedIn")

    let [data, setData] = useState ({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        city: "",
        phoneNo: "",
        birthday: "",
        password: ""
    })

    let { firstName, lastName, username, email, city, phoneNo, birthday, password  } = data


    const onChange = (e)=> {

        setData({...data, [e.target.name]: e.target.value})
    }

    const onsubmit = () =>{
        if(firstName === "" || lastName === "" || username === "" || email === "" || city === "" || phoneNo === "" || birthday === "" || password === ""){
            console.log("Please fill all required fields");
        } else {
        registerUser(firstName, lastName, username, email, city,phoneNo, birthday, password)
        }   
    }
    

    return (
        <div><form action="/login" method="get">
            <h1>REGISTER PAGE</h1>
            <label>First name</label>
            <br/>
            <input onChange = {(e)=> onChange(e) } type="text" name = "firstName" value={firstName}  required></input>
            <br/>
            <label>Last name</label>
            <br/>
            <input onChange = {(e)=> onChange(e) } type="text" name = "lastName" value={lastName} required={true}></input>
            <br/>
            <label>username</label>
            <br/>
            <input onChange = {(e)=> onChange(e) } type="text" name = "username" value={username} required={true}></input>
            <br/>
            <label>Email</label>
            <br/>
            <input onChange = {(e)=> onChange(e) } type="email" name = "email" value={email} required={true}></input>
            <br/>
            <label>city</label>
            <br/>
            <input onChange = {(e)=> onChange(e) } type="text" name = "city" value={city} required={true}></input>
            <br/>
            <label>Phone No.</label>
            <br/>
            <input onChange = {(e)=> onChange(e) } type="tel"  placeholder="07X-XXXX-XXX"  maxLength="10" name = "phoneNo" value={phoneNo} required={true}></input>
            <br/>
            <label>Birthday</label>
            <br/>
            <input onChange = {(e)=> onChange(e) } type="date" name = "birthday" value={birthday} required={true}></input>
            <br/>
            <label>Password</label>
            <br/>
            <input onChange = {(e)=> onChange(e) } type="password" name = "password" value={password}   required={true}></input>
            <br/>
            <br/>
            <button type= "submit" onClick= {()=> onsubmit()}>submit</button>
            <br/>
            <p>Already have an account? <a href="/login">Sign in</a></p>
            </form>
        </div>
    )
    }




const mapStateToProps = state => ({
    isLoggedIn: state.authReducer.isLoggedIn
})

export default connect(mapStateToProps, {registerUser})(Register);