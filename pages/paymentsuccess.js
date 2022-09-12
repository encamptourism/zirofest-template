import adminapi from "../api/adminapi";
import {useState,useEffect} from "react";
import { useRouter } from "next/router";
import Login from "../components/common/login";

const Paymentsuccess=()=>{
const router = useRouter();
const [successdata,setSuccessdata] = useState({
	payment_id:"",
	payment_link_reference_id:"",
	payment_link_id : "",
	payment_status : ""
});
const [checklogin,setChecklogin] = useState(false);

const [orderData,setOrderData] = useState('');
const [userwebsite,setUserwebsite] = useState('');


const balanceamount=(ordertotal)=>{
let paymentobj = [];
let balance = 0;
let grandtotal = ordertotal[0] ? ordertotal[0].grand : 0 ;
let totalpaid = 0;
if(ordertotal[0] && ordertotal[0].hasOwnProperty('paymentobj')){
paymentobj = ordertotal[0].paymentobj;

if(paymentobj.length > 0){
paymentobj.map((ad)=>{
if(ad.payment_id !=="" && ad.status === 'success' || ad.status === 'paid'){
 totalpaid += +(ad.amount);  
}
})
}
balance = grandtotal - totalpaid;
if(balance < 0){
  return 0;
}

}

return balance.toFixed(2);
}




//login
useEffect(()=>{
setUserwebsite(localStorage.getItem(userwebsite));
},[checklogin]);

useEffect(()=>{
if(userwebsite !==""){
let payment_id = router.query['razorpay_payment_id'] ||"";
let payment_link_reference_id = router.query['razorpay_payment_link_reference_id'] || "";
let payment_link_id = router.query['razorpay_payment_link_id'] || "";
let payment_status = router.query['razorpay_payment_link_status'] || "";
setSuccessdata({...successdata,payment_id:payment_id,
	payment_link_reference_id:payment_link_reference_id,
	payment_link_id : payment_link_id,
	payment_status : payment_status,
	
});

}

},[userwebsite]);
console.log(successdata);
useEffect(()=>{
const fetchData=async ()=>{
let mreference_id;
if(successdata.payment_id !=="" && successdata.payment_link_id !=="" && successdata.payment_status !=="" && successdata.payment_link_reference_id !==""){
mreference_id = successdata.payment_link_reference_id;

if(successdata.payment_link_reference_id.substr(-2,1) === "-"){
mreference_id = successdata.payment_link_reference_id.substr(0,successdata.payment_link_reference_id.length - 2);
}
}

try{
if(mreference_id){
  let path = `/payment/${mreference_id}`;
  const localresponse = await adminapi.get(path);
if(localresponse.data !== 400){
let data = localresponse.data;
let paymentobj = data.ordertotal[0].paymentobj;
let vamount = 0;
paymentobj && paymentobj.map((res,key)=>{

if(payment_link_id === res.payment_link_id && res.payment_id === "" ){
res.payment_id = payment_id;
res.status= payment_status;
res.t_date = new Date();
vamount = (res.amount);

}
})
data.ordertotal[0].paymentobj = paymentobj;
data.payment_id = payment_id;
data.status = 'success';
data.amount = vamount;
let today = new Date().toISOString().slice(0, 10);
data.t_date = today;
setOrderData(data);
}

}

}catch(e){
	console.log(e);
}

}
if(checklogin){
 fetchData(); 
}

},[successdata,checklogin])

useEffect(()=>{
let trigger = false;
let mreference_id;
if(successdata.payment_id !=="" && successdata.payment_link_id !=="" && successdata.payment_status !=="" && successdata.payment_link_reference_id !==""){
mreference_id = successdata.payment_link_reference_id;

if(successdata.payment_link_reference_id.substr(-2,1) === "-"){
mreference_id = successdata.payment_link_reference_id.substr(0,successdata.payment_link_reference_id.length - 2);
}
}
const dss = async()=>{

try{
  let path = `/payment/${mreference_id}`;
  const localresponse = await adminapi.put(path,JSON.stringify(orderData));
if(localresponse.data !== 400){
console.log('successfully updated');
}

}catch(e){
  alert(e);
}

}
if(orderData !== ""){
let {paymentobj} = orderData.ordertotal[0];
if(paymentobj.length > 0){
paymentobj.map((as)=>{
if(as.payment_link_id === payment_link_id && as.status !==""){
trigger = true;

}

})
}
if(trigger){
	dss();
}

}



},[orderData])



return (
	     <>
	  <Login setChecklogin={setChecklogin}/>
	  {orderData && successdata ? 
      <div className="md:w-4/4 flex flex-col justify-center items-center py-8">
      <h2 className="text-3xl py-8">Order Summery</h2>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{successdata.payment_link_reference_id?`Order Id:-  ${successdata.payment_link_reference_id}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{orderData.name?`Name:-  ${orderData.name}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{orderData.email?`Email:-  ${orderData.email}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{orderData.contact?`Contact-Details:-  ${orderData.contact}`:""}</div>
      <div style={{width:"100%",textAlign:"center"}} className="text-xl text-gray-700">{orderData.checkindate?`CheckIn Date:-  ${orderData.checkindate}`:""}</div>
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
       {orderData.prductdetails && orderData.prductdetails.length > 0 ? orderData.prductdetails.map((data,key)=>{
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
        <div className="text-xl md:w-1/2 flex flex-col justify-center items-center text-center"><h3>Total Summary </h3></div>
        <div className="text-xl md:w-1/2 flex flex-col justify-center items-center text-center"><h3>Total Price : {orderData.ordertotal[0].totalprice}/-</h3>
           <h3><b>Total GST @ 5%:</b>  {orderData.ordertotal[0].gst}/-</h3>
           <h3><b>Total C.F.(@2.5%):</b>  {Math.ceil(orderData.ordertotal[0].totalcarbonemiison)}/-</h3>
           <h3><b>Grand Total:</b> {orderData.ordertotal[0].grand}  /-</h3>
           {<h3><b>Paid</b> {+orderData.amount}  /-</h3>}
           {<h3><b>Balance</b> {balanceamount(orderData)}  /-</h3>}
         
        </div>
        </div>
         <small className="px-14 py-8"><span className="text-red-500" >Note: </span>Vehicle prices are per person basis that includes pickup and drop to destined location (Zero festival location) only.</small>
        </div> 
	</div> :""}
	     </>
	    )


}
export default Paymentsuccess;