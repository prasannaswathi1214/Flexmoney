import React, { useState, useRef } from "react";
import "./Amount.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactToPrint from "react-to-print";
import axios from 'axios';
function Amount(props) {
    const componentRef = useRef(null);
  const [payentstatus, setpaymentstatus] = useState("💳Pay 500 Rupees");
  const userdata = JSON.parse(localStorage.getItem("userdata"));

  
  const completepayment = () => {

  
     
        setpaymentstatus('✅ payment done');
        toast.success("Payment done", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
  
        toast.warning("Please download your receipt", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
     
  };
  
  return (
    <div className="amount">
        {
            (payentstatus === '✅ payment done' ? 
                <ReactToPrint
                trigger={() =>{
                    return <button className="download">Download reciept</button>
                }}
                content={() => componentRef.current}
                documentTitle="Payment reciept"
                pageStyle= "print"
                />
            : (null))
        }
     
        
      <div className="paymentdetails" ref={componentRef} >
        <div className="details">
          <h4>Name : {userdata.name}</h4>
          <h4>Email : {userdata.email}</h4>
          <h4>Phone number : {userdata.phno}</h4>
          <h4>Age : {userdata.age}</h4>
          <h4>Month : {userdata.month}</h4>
          <h4>Batch : {userdata.batch}</h4>
          <button onClick={completepayment}>{payentstatus} </button>

        </div>
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

export default Amount;
