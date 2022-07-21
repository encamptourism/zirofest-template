import {useState,useEffect} from "react";
const Success=(props)=>{
const {amount,name,order_id,ordertotal,payment_id,prductdetails,signature,contact,email,checkindate,isadvance} = props.paymentdetails;
return (<>
	<div className="container px-3">
	 <div className="md:w-4/4 flex flex-col justify-center items-center py-5">
      <h2 className="text-3xl uppercase text-gray-500 mb-2 text-center md:self-start md:text-left py-5">Booking Summery</h2>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{order_id?`Order Id:-  ${order_id}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{name?`Name:-  ${name}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{email?`Email:-  ${email}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{contact?`Contact-Details:-  ${contact}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{checkindate?`CheckIn Date:-  ${checkindate}`:""}</div>
      <div style={{width:"100%"}} className="md:flex md:flex-col justify-center items-center text-center mt-5">
    
       {prductdetails && prductdetails.length > 0 ? prductdetails.map((data,key)=>{

       return(
        <div key ={"sadsd" + key} className="md:flex md:flex-row mt-5">
         <div className="md:w-1/5 flex flex-col justify-center items-center text-center">Package Name : {data.packagename}</div>
         <div className="md:w-1/5 flex flex-col justify-center items-center text-center">Package Type : {data.packagetype}</div>
         <div className="md:w-1/5 flex flex-col justify-center items-center text-center">Number of Package: {data.packageqts ? data.packageqts: 1 }</div>
         <div className="md:w-1/5 flex flex-col justify-center items-center text-center">Package Price: {data.packageprice}</div>
         
        </div> 
       	)

       })
      

        :"No Item Found"} 
        <div  className="md:flex md:flex-row mt-5">
        <div className="text-xl md:w-1/2 flex flex-col justify-center items-center text-center"><h3>Total Summery </h3></div>
        <div className="text-xl md:w-1/2 flex flex-col justify-center items-center text-center"><h3>Total Price {ordertotal[0].totalprice}/-</h3>
           <h3><b>Total GST @ 5%:</b>  {ordertotal[0].gst}/-</h3>
           <h3><b>Total C.F.(@2.5%)</b>  = {Math.ceil(ordertotal[0].totalcarbonemiison)}/-</h3>
           <h3><b>Grand Total</b> {ordertotal[0].grand}  /-</h3>
           {isadvance === "yes" ? <h3><b>Advance Booked</b> {+amount/100}  /-</h3>:""}
           {isadvance === "yes" ? <h3><b>Will be paid at arival</b> {(ordertotal[0].grand - +amount/100).toFixed(2)}  /-</h3>:""}
          <small>All additional packages except Vehicle prices are per person per day. vehicle prices is per person that includes pickup and drop to destined location.</small>
        </div>
        </div>
        </div> 
	</div>
	</div>
</>)

}
export default Success;