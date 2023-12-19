import React, { useState } from "react";
import "./Register.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';
function Register(props) {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phno, setphno] = useState("");
  const [age, setage] = useState('');
  const [month, setmonth] = useState('');
  const [batch, setbatch] = useState('');
  const register = (e) =>{
    const isGmail = email.toLowerCase().endsWith('@gmail.com');
    if(!(age !== '' && (age >= 18 && age <= 65))){
        toast.error('Age must be in range of 18 to 65', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    else if(!(isGmail)){
        toast.error('Email must ends with @gmail.com', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    else if(name !== "" && email !== "" && phno !== "" && (age !== '' && (age >= 18 || age <=65)) && month !== '' && batch !== ''){
     const userdata = {
      name: name,
      email : email,
      phno : phno,
      age : age,
      month : month,
      batch: batch
     }
      localStorage.setItem('userdata', JSON.stringify(userdata));
     navigate('/payamount');
  }
    else{
        toast.error('Please fill the valid details', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
  }
  const updatename = (e) =>{
    setname(e.target.value);
  }
  const updateemail = (e)=>{
    setemail(e.target.value);
  }
  const updatephno = (e)=>{
    setphno(e.target.value);
  }
  const updateage = (e) =>{
    setage(e.target.value);
  }
  const updatemonth = (e) =>{
    setmonth(e.target.value);
  }
  const updatebatch = (e) =>{
    setbatch(e.target.value);
  }
  return (
    <div className="Registerpage">
      <h4>One Step to go...🏃‍♂️</h4>
      <div className="registerform">
        <form action="">
          <input type="text" placeholder="Enter Name" value={name} onChange={updatename}/> <br />
          <input type="email" placeholder="Enter Email" value={email} onChange = {updateemail}/> <br />
          <input
            type="text"
            placeholder="Enter Phone Number" onChange = {updatephno}
            value={phno}
          />{" "}
          <br />
          <input type="text" placeholder="Enter Age" value={age} onChange={updateage}/>
          <select name="" id="" onChange={updatemonth}>
            <option value="">Month</option>
            <option value="jan">Jan</option>
            <option value="feb">Feb</option>
            <option value= "mar">Mar</option>
            <option value="apr">Apr</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="aug">Aug</option>
            <option value="sep">Sep</option>
            <option value="oct">Oct</option>
            <option value="nov">Nov</option>
            <option value="dec">Dec</option>
          </select>
          <br />
          <br />
          <select name="" id="" onChange={updatebatch}>
            <option value="">Batch</option>
            <option value="6 - 7 AM">6-7 AM</option>
            <option value="7 - 8 AM">7-8 AM</option>
            <option value="8 - 9 AM">8-9 AM</option>
            <option value="5 - 6 AM">5-6 PM</option>
          </select>
          <button className="registerbtn" onClick={register}>Register</button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Register;
