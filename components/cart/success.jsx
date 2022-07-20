import {useState,useEffect} from "react";
const Success=(props)=>{
const {amount,name,order_id,ordertotal,payment_id,prductdetails,signature,contact,email,checkindate,isadvance} = props.paymentdetails;
return (<>
	<div className="container">
	 <div className="md:w-4/4 flex flex-col justify-center items-center py-3">
      <h2 className="text-3xl uppercase text-gray-500 mb-2 text-center md:self-start md:text-left py-3">Payment Summery</h2>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{payment_id?`Payment Transaction Id:-  ${payment_id}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{order_id?`Order Id:-  ${order_id}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{name?`Name:-  ${name}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{email?`Email:-  ${email}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{contact?`Contact-Details:-  ${contact}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{checkindate?`CheckIn Date:-  ${checkindate}`:""}</div>
      <div style={{width:"100%"}} className="md:flex md:flex-col mt-5">
        {prductdetails ? <div className="md:flex md:flex-row mt-5 justify-center items-center">
         <div className="text-xl md:w-1/5 flex flex-col justify-center items-center">Package Id</div>
         <div className="text-xl md:w-1/5 flex flex-col justify-center items-center">Package Name</div>
         <div className="text-xl md:w-1/5 flex flex-col justify-center items-center">Package Type</div>
         <div className="text-xl md:w-1/5 flex flex-col justify-center items-center">Package Qts</div>
         <div className="text-xl md:w-1/5 flex flex-col justify-center items-center">Package Price</div>
        </div> : ""} 
       {prductdetails && prductdetails.length > 0 ? prductdetails.map((data,key)=>{

       return(
        <div key ={"sadsd" + key} className="md:flex md:flex-row mt-5">
         <div className="md:w-1/5 flex flex-col justify-center items-center">{data.id}</div>
         <div className="md:w-1/5 flex flex-col justify-center items-center">{data.packagename}</div>
         <div className="md:w-1/5 flex flex-col justify-center items-center">{data.packagetype}</div>
         <div className="md:w-1/5 flex flex-col justify-center items-center">{data.packageqts ? data.packageqts: 1 }</div>
         <div className="md:w-1/5 flex flex-col justify-center items-center">{data.packageprice}</div>
         
        </div> 
       	)

       })
      

        :"No Item Found"} 
        <div  className="md:flex md:flex-row mt-5">
        <div className="text-xl md:w-1/2 flex flex-col justify-center items-center"><h3>Total Summery </h3></div>
        <div className="text-xl md:w-1/2 flex flex-col justify-center items-center"><h3>Total Price {ordertotal[0].totalprice}/-</h3>
           <h3><b>Total GST @ 5%:</b>  {ordertotal[0].gst}/-</h3>
           <h3><b>Total C.F.(@2.5%)</b>  = {ordertotal[0].totalcarbonemiison}/-</h3>
           <h3><b>Grand Total</b> {ordertotal[0].grand}  /-</h3>
           {isadvance === "yes" ? <h3><b>Advance Paid</b> {+amount/100}  /-</h3>:""}
           {isadvance === "yes" ? <h3><b>Outstanding</b> {(ordertotal[0].grand - +amount/100).toFixed(2)}  /-</h3>:""}
          <small>All additional packages except Vehicle prices are per person per day. vehicle prices is per person that includes pickup and drop to destined location.</small>
        </div>
        </div>
        </div> 
	</div>
	</div>
</>)

}
export default Success;