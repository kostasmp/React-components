import './validstyles.css'
import { useState } from "react";

function Validationrules()
{

    const [formfields, showinputs] = useState({username: "", useremail: "", userpass: ""});
    const [errors, checkerrors] = useState(null);
    const [errorstwo, checkerrorstwo] = useState(null);
    const [errorsthree, checkerrorsthree] = useState(null);

    const handleChanges = (e) => {
        const {name, value} = e.target;
        showinputs((prevFormData) => ({...prevFormData, [name]: value}));
        if(formfields.username.length <= 2)
        {
            checkerrors('Invalid username');
        }
        else if(formfields.username.length > 2)
        {
            checkerrors('Username field is ok');
        }
   };



   const handleemail = (ev) => {
    const{name, value} = ev.target;
    showinputs((prevFormData) => ({...prevFormData, [name]: value}));
    if(formfields.useremail.length <= 2)
    {
        checkerrorstwo('Invalid Email');
    }
    else if(formfields.useremail.length > 0)
    {
        checkerrorstwo('Email field is ok')
    }
   };

   const handlePassword = (evn) => {
    const{name, value} = evn.target;
    showinputs((prevFormData) => ({...prevFormData, [name]: value}));
    if(formfields.userpass.length < 8 | formfields.useremail.length === 0)
    {
        checkerrorsthree('Password is too small');
        
    }
    else if(formfields.userpass.length > 0)
    {
        checkerrorsthree('Password field is ok');
    }
   };

    const submitForm = (e) => {
        e.preventDefault();
        if(formfields.username.length === 0)
        {
            alert('Enter a valid username');
            return false;
        }
        if(formfields.useremail.length <= 0)
        {
            alert('Enter a valid email');
            return false;
        }
        if(formfields.userpass.length <= 0)
        {
            alert('Enter a valid password');
            return false;

        }
        else{
            alert(`Username: ${formfields.username}, Email: ${formfields.useremail}, Password: ${formfields.userpass}`);
        }
     }

    return(
     
    
    <>
    <div id="formbox">
    <h1>Validation Form</h1>
    <form onSubmit={submitForm}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="fieldone" name="username" value={formfields.username} onChange={handleChanges}></input>
        {errors}
        <br></br>
        <br></br>
        <label htmlFor="mail">email: </label>
        <input type="email" id="fieldtwo" name="useremail" value={formfields.useremail} onChange={handleemail}></input>
         {errorstwo}
        <br></br>
        <br></br>
        <label htmlFor="pass">Password: </label>
        <input type="password" id="fieldthree" name="userpass" value={formfields.userpass} onChange={handlePassword} size={16}></input>
        {errorsthree}
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
    </form>
    </div>
    </>
    )
};
export default Validationrules;