import adminapi from "../api/adminapi";
import {useState,useEffect} from "react";
import Image from 'next/image';
import Heads from "../components/common/Heads";
import Header from "../components/common/header";
import Cartc from "../components/cart/cartc";
import Success from "../components/cart/success";
import {initializeRazorpay} from "../components/functions/razorpay/initializerazorpay"
import LoginSpinner from "../components/common/LoginSpinner";
const Cart=()=>{
const [addtocartdata,setAddtocartdata] = useState([]);
const [setter,setSetter] = useState(false);
const [total,setTotal] = useState([]);
const [submission,setSubmission] = useState({name:"",email:"",mobile:"",packagedetail:[],total:[]});
const [paymentdetails,setPaymentdetails] = useState("");
const [salert,setSalert] = useState({success:"",fail:""});
const [isloading,setIsloading] = useState(true);

const calcTotal=()=>{
setIsloading(true);   
let calcdata = [...addtocartdata];
let totalprice = 0;
let totalqts = 0;
let eachqts = 0;
let totalcarbonemiison=0;

calcdata.map((data)=>{
 totalprice = totalprice + data.packagepricetotal || data.packageprice;
 totalqts = totalqts + (data.packageqts ? data.packageqts:1);
 eachqts = data.packageqts ? data.packageqts:1;
 totalcarbonemiison = totalcarbonemiison + (data.carbonemiison ? +data.carbonemiison * +eachqts:0);
})
let gst= totalprice ? (totalprice * 18/100).toFixed(2) : 0;
let grand = (+totalprice + +gst + +totalcarbonemiison*5).toFixed(2);
setTotal([{totalprice:totalprice,totalqts:totalqts,gst:gst,grand:grand,totalcarbonemiison:totalcarbonemiison}])
setIsloading(false);
}

useEffect(()=>{
let uniqueid = localStorage.getItem('cartid');

if(uniqueid){
 let predata = localStorage.getItem(uniqueid);

 if(predata){
   setAddtocartdata(JSON.parse(predata));
 }   
}

setSetter(true);
setIsloading(false);
},[])
useEffect(()=>{
setIsloading(true);
if(addtocartdata.length > 0){

let uniqueid = localStorage.getItem('cartid');
localStorage.setItem(uniqueid,JSON.stringify(addtocartdata));
}
setIsloading(false);
},[addtocartdata])

useEffect(()=>{
 setIsloading(true);   
if(setter){
let uniqueid = localStorage.getItem('cartid');
localStorage.setItem(uniqueid,JSON.stringify(addtocartdata));
}
calcTotal();
setIsloading(false);
},[addtocartdata])
const makePayment=async (cartdata)=>{
 setIsloading(true);   
const res = await initializeRazorpay();
 if (!res) {
      alert("Razorpay SDK Failed to load");
      setSalert({...salert,fail:"Razorpay SDK Failed to load"});
      return;
    }
const data = await fetch("/api/razorpay", {
                                            method: "POST",
                                            body: JSON.stringify(cartdata),
                                            headers: {"Content-type": "application/json; charset=UTF-8"}
                                          }).then((t) =>
                                                 t.json()
                                               );
                                              
var options = {
      key: process.env.RAZORPAY_KEY,
      name: data.name,
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your Payment",
      image: "https://encampadventures.com/images/logo1.png",
      handler: async function (response) {
       if(data.id === response.razorpay_order_id){
  let path = `/payment/${response.razorpay_order_id}`;
  const localresponse = await adminapi.put(path,JSON.stringify({
                                                          payment_id:response.razorpay_payment_id,
                                                          order_id:response.razorpay_order_id,
                                                          signature:response.razorpay_signature,
                                                          name:data.name,
                                                          amount:data.amount,
                                                          prductdetails:data.prductdetails,
                                                          ordertotal:data.ordertotal,
                                                          contact:data.phone,
                                                          email:data.email,
                                                          checkindate:data.checkindate,
                                                          status:"success"
    
                                                    }));
  

if(localresponse.data !== 400){
 setAddtocartdata([]);
      // Validate payment at server - using webhooks is a better idea.
 setPaymentdetails({
                    payment_id:response.razorpay_payment_id,
                    order_id:response.razorpay_order_id,
                    signature:response.razorpay_signature,
                    name:data.name,
                    amount:data.amount,
                    prductdetails:data.prductdetails,
                    ordertotal:data.ordertotal,
                    contact:data.phone,
                    email:data.email,
                    checkindate:data.checkindate
                  })
        
        let uniqueid = localStorage.getItem('cartid');
        localStorage.removeItem(uniqueid);
   setSalert({...salert,success:"Payment transaction has been success",fail:""});
    setIsloading(false);
   }else{
    setSalert({...salert,fail:"Payment transaction has been Failed"});
     setIsloading(false);
   } 
       }else{
        //if payment not verified
       setSalert({...salert,fail:"Payment transaction verification pending"});
        setIsloading(false);
       }
 
      },
      prefill: {
        name: data.name,
        email: data.email,
        contact: data.phone,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

}

return (
	<>
	<Heads/> 
     <Header addtocartdata = {addtocartdata} />
     <div className="container mx-auto py-14">
     <div className="py-14"></div>
     <LoginSpinner isloading={isloading}/>
     {paymentdetails !=="" ?<Success paymentdetails={paymentdetails}/> :<Cartc 
     addtocartdata = {addtocartdata}
     setAddtocartdata={setAddtocartdata}
     calcTotal={calcTotal}
     total={total}
     submission={submission}
     setSubmission={setSubmission}
     makePayment={makePayment}
      />}  
      
     </div>
	</>
	)
}
export default Cart;
