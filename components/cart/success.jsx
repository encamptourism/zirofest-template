import {useState,useEffect} from "react";
const Success=(props)=>{
const {amount,name,order_id,ordertotal,payment_id,prductdetails,signature,contact,email,checkindate,isadvance} = props.paymentdetails;



return (<>
	<div className="container px-3">
   <h2 className="text-3xl uppercase text-gray-500 mb-2 text-center py-10">Booking Summery</h2>
	 <div className="md:w-4/4 flex flex-col justify-center items-center py-5">
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{order_id?`Order Id:-  ${order_id}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{name?`Name:-  ${name}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{email?`Email:-  ${email}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{contact?`Contact-Details:-  ${contact}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{checkindate?`CheckIn Date:-  ${checkindate}`:""}</div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg py-5 px-3">
       <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
         <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
      <tr className ="bg-gray-500 text-white">
      <th className="text-center px-3 py-2">Package Name</th>
      <th className="text-center px-3 py-2">Quantity</th>
      <th className="text-center px-3 py-2">Price per unit</th>
    </tr>
         </thead>
         <tbody className="bg-white py-2 px-3">
       {prductdetails && prductdetails.length > 0 ? prductdetails.map((data,key)=>{
       return(
        <tr key ={"sadsd" + key}>
         <td className="text-center text-basic">{data.packagename ? data.packageid : ""}</td>
         <td className="text-center text-basic">{data.packagename === 'Lunch' || data.packagename === 'Dinner' ? ('No. of Meals : ' + (data.packageqts ? data.packageqts : 1) ) : ('No. of Person : ' + (data.packageqts ? data.packageqts : 1))}</td>
         <td className="text-center text-basic">{data.packageprice ? data.packageprice : ""} / -</td>
         
        </tr> 
       	)

       })
      

        :"No Item Found"} 
          </tbody>
            </table>
        <div  className="md:flex md:flex-row mt-5">
        <div className="text-xl md:w-1/2 flex flex-col justify-center items-center text-center"><h3>Total Summery </h3></div>
        <div className="text-xl md:w-1/2 flex flex-col justify-center items-center text-center"><h3>Total Price : {ordertotal[0].totalprice}/-</h3>
           <h3><b>Total GST @ 5%:</b>  {ordertotal[0].gst}/-</h3>
           <h3><b>Total C.F.(@2.5%):</b>  {Math.ceil(ordertotal[0].totalcarbonemiison)}/-</h3>
           <h3><b>Grand Total:</b> {ordertotal[0].grand}  /-</h3>
           {isadvance === "yes" ? <h3><b>Advance Booked</b> {+amount/100}  /-</h3>:""}
           {isadvance === "yes" ? <h3><b>Will be paid at arival</b> {(ordertotal[0].grand - +amount/100).toFixed(2)}  /-</h3>:""}
         
        </div>
        </div>
         <small className="px-14 py-8"><span className="text-red-500" >Note: </span>Vehicle prices are per person basis that includes pickup and drop to destined location (Zero festival location) only.</small>
        </div> 
	</div>
	</div>
</>)

}
export default Success;