import {useState,useEffect,useRef} from "react";
import { scroller } from "react-scroll";
import { useRouter } from 'next/router';

function Cartc(props) {
const router = useRouter();
const {setIsloading,addtocartdata , setAddtocartdata,calcTotal,total,setSubmission,submission,makePayment,isloading,numberofperson,setNumberofperson,isChecked,setIsChecked,advance,setAdvance,makeBypassPayment,setPaymentdetails , Tagmanageri} = props;
const [error,setError]=useState({name:"",email:"",mobile:"",checkindate:""})
const [add , setAdd] = useState("");
const [addperson , setAddperson] = useState("");
const [show,setShow] = useState(false);
const bottomRef = useRef(null);



const addQ=(id,e)=>{

let addingPerson;
setAdd({...add,[id] : e.target.value})
addingPerson = {...addingPerson,[id] : e.target.value};

if(id === "" || !id){
    return;
}
if(addingPerson[id] < 1 || !addingPerson){

    return;
}
let dis = [...addtocartdata];
let qts = "";

let pasa = dis.map((data)=>{
if(data.id === id){
data['packageqts'] = addingPerson[id];

data['packagepricetotal'] = parseInt(addingPerson[id]) * data['packageprice'];
qts = addingPerson[id];
if(data.packageid === "1n2d2999" || data.packageid === "2n3d4999" || data.packageid === "4n5d6999"){
    setNumberofperson(data.packageqts);
}

}
return data;

})

setAddperson(pasa);

}

useEffect(()=>{
setAddtocartdata(addperson);
},[addperson])

useEffect(()=>{
let adddata={};
addtocartdata && addtocartdata.map((data)=>{
let qts = data.packageqts ? data.packageqts:1;
adddata = {...adddata,[data.id]:qts}

})

setAdd(adddata);
},[addtocartdata])


const RemoveItem=(id,pkid)=>{

let removabledata = [...addtocartdata];
removabledata.splice(id, 1);
setAddtocartdata(removabledata);
calcTotal();

}
const removeAll=()=>{
setAddtocartdata([]);

}
const proceedtocheckout=()=>{
if(isChecked){

if(advance == "" || isNaN(advance)){
 alert("Advance amount should be numeric");   
return;
}
if(+advance < totalgrand * 0.5){
 alert("Advance amount should be 50% or higher of Invoice amount");   
return;
}

if(+advance > +totalgrand){
 alert("Advance amount cannot be greater than total invoice value");   
return;
}
    
}
setShow(!show);

if(show){
if(addtocartdata && addtocartdata.length > 0){
  Tagmanageri(addtocartdata,'begin_checkout');  
}    
}

}
const checkout= async (e)=>{
e.preventDefault();
setIsloading(true);
let newerror = {...error};
if(addtocartdata.length === 0){
  alert("Cart is Empty");
  router.push("/");
  return;
}
if(advance == "" || isNaN(advance)){
 alert("Advance amount should be numeric");   
return;
}
if(+advance < +totalgrand * 0.5){
 alert("Advance amount should be 50% or higher of Invoice amount");   
return;
}

if(+advance > +totalgrand){
 alert("Advance amount cannot be greater than total invoice value");   
return;
}

if(submission.name.length < 5){
newerror['name'] = "Full Name Required";
}else{
newerror['name'] = "";
}
if (submission.mobile.length !== 10 || isNaN(submission.mobile)) {
newerror['mobile'] = "10 digit Mobile Required";
}else{
 newerror['mobile'] ="";
}
if(submission.email.length < 5 && !submission.email.includes("@")){
newerror['email'] = "Valid Email Required";
}else{
  newerror['email'] = ""; 
}
if(!submission.checkindate || new Date(submission.checkindate) < new Date("2022-09-28") || new Date(submission.checkindate) > new Date("2022-10-02")  ){
newerror['checkindate'] = "Check in Date should be between 28-sep to 02-Oct";
}else{
  newerror['checkindate'] =""; 
}

if(newerror.checkindate ==="" && newerror.name ==="" && newerror.email ==="" && newerror.mobile ===""){
let submissiondata ={};
if(isChecked === true){
submissiondata = {...submission,packagedetail:addtocartdata,total,advance:advance};
}else{
 submissiondata = {...submission,packagedetail:addtocartdata,total};   
}

let getdata = await makeBypassPayment({...submission ,...submissiondata});
if(getdata){
    setPaymentdetails({
                    payment_id:'',
                    order_id:getdata.order_id,
                    signature:'',
                    name:getdata.name,
                    amount:getdata.amount,
                    prductdetails:getdata.prductdetails,
                    ordertotal:getdata.ordertotal,
                    contact:getdata.phone,
                    email:getdata.email,
                    checkindate:getdata.checkindate,
                    isadvance:getdata.isadvance

                  })
    setIsloading(false);
    setAddtocartdata([]);
    Tagmanageri(getdata.ordertotal , 'generate_lead');
}

//makePayment({...submission ,...submissiondata}); 
setSubmission([]);
submissiondata = [];
}else{

    setError(newerror);
    setIsloading(false);
}


}
const totalcollectable = total.length > 0 ? total[0].totalprice : 0;
const totalgst = total.length > 0 ? total[0].gst : 0;
const totalgrand = total.length > 0 ? total[0].grand : 0;
const totalcarbonfootprint = total.length > 0 ? total[0].totalcarbonemiison : 0;
const inputHandler=(e)=>{
setSubmission({...submission , [e.target.name]:e.target.value})

}
useEffect(()=>{
if(show === true){
 bottomRef.current?.scrollIntoView({behavior: 'smooth'});
}

},[show]);
const partial=(e)=>{
 if(e.target.checked === true){
setIsChecked(true);
setAdvance(Math.ceil((totalgrand * 0.5)));


 }else{
 setIsChecked(false);   
 }
}
const advcheck=(e)=>{
   setAdvance(e.target.value); 
}

    return (
        <>
        <div>
            <div className="w-full h-full bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0 py-14" id="chec-div">
                <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div className="flex md:flex-row flex-col justify-end" id="cart">
                        <div className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden" id="scroll">
                    
                                    <p className="text-3xl font-black leading-10 text-gray-800 pt-3">Cart</p>
                                    <div className="md:flex flex-col items-center mt-14 py-8 border-t border-gray-200">
                                        {/*mapping*/}
                                         {addtocartdata && addtocartdata.length > 0 ? addtocartdata.map((data,key)=>{
                                         return(
                                        <div key={"cartitems" + key} className="md:pl-3 md:w-full mb-9">
                                        
                                            <div className="flex items-center justify-between w-full pt-1">
                                                <p className="text-base font-black leading-none text-gray-800">{data.packagename ? data.packagename : ""}</p>
                                                <input key ={"dssqwpo" + key} className="disco" type ="number" name={data.id} id ="perperson" min="1" onChange={(e)=>addQ(data.id,e)} value={add[data.id]? add[data.id] :""}/>
                                             
                                            </div>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">{data.packagetype ? `Package Type: ${data.packagetype}` : ""}</p>
                                            <p className="text-xs leading-3 text-gray-600 py-2">{data.packageid ==="vehicle2999" ? 'Number of Persons' : (data.packageid ==="lunch449" || data.packageid ==="dinner449" )?"Number of Meals":'Number of Persons'} : {data.packageqts ? data.packageqts: 1 }</p>
                                           {(data.packageid ==="lunch449" || data.packageid ==="dinner449" ) ? <p className="text-xs leading-3 text-gray-600 py-2">Number of Persons: {numberofperson > 0 ? numberofperson : ""}</p>:""}
                                            <p className="text-xs leading-3 text-gray-600 py-2">Unit Package Price per person : {data.packageprice ? `${data.packageprice} /-`: 0 }</p>                                          
                                            <div className="flex items-center justify-between pt-3 pr-4">
                                                <div className="flex itemms-center">
                                                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={()=>RemoveItem(key,data.id)}>Remove</p>
                                                </div>
                                                <p className="text-base font-black leading-none text-gray-800">Rs. {data.packagepricetotal ? `${data.packagepricetotal} /-` : `${data.packageprice} /-`}</p>
                                            </div>
                                        </div>
                                    )}):""
                                     }
                                    


                                    </div>
                                </div>
                                <div className="xl:w-1/2 md:w-1/2 xl:w-1/2 w-full bg-gray-100 h-full">
                                    <div className="flex flex-col md:h-screen px-3 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-3xl font-black leading-9 text-gray-800">Summary</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">Rs. {totalcollectable ? totalcollectable : ""}/-</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Total C.F. (@ 2.5%)</p>
                                                <p className="text-base leading-none text-gray-800">Rs. {totalcarbonfootprint ? totalcarbonfootprint.toFixed(2) : ""}/-</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Total GST (@ 5%)</p>
                                                <p className="text-base leading-none text-gray-800">Rs. {totalgst ? totalgst : ""}/-</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">Rs. {totalgrand ? totalgrand : ""} /-</p>

                                            </div>
                                           {/* <div className="flex items-center justify-between pb-6">
                                             <p className="text-sm font-bold leading-normal text-right text-gray-800">
                                             <input type="checkbox" name="ispartial" onClick={(e)=>partial(e)}/>Pay Advance and book ?</p>
                                        
                                             </div>*/}
                                            {isChecked ? <div className="flex items-center justify-between pb-6">
                                                <input type="text" name="advancepayment" placeholder="Enter amount 50% of invoice value or higher" style={{padding:"8px 3px", width:"100%"}} value={advance} onChange ={(e)=>advcheck(e)}/>
                                            </div> :""}
                                            <button onClick={() => proceedtocheckout()} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Proceed to Checkout
                                            </button>
                                        </div>
                                    </div>
     
     {show === true ? <div className="w-full checkoutscroll">
     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" autoComplete="off">
       <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Name{error.name ? <span style={{color:'red',fontSize:'0.8rem',padding: '2px 10px'}}>{error.name}</span>:""}
      </label>
       <input  value={submission.name ? submission.name:"" } onChange={(e)=>inputHandler(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" name="name" placeholder="Enter Your Name" required/>
       </div>
       <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Email{error.email ? <span style={{color:'red',fontSize:'0.8rem',padding: '2px 10px'}}>{error.email}</span>:""}
      </label>
      <input value={submission.email ? submission.email:"" }  onChange={(e)=>inputHandler(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" name="email" placeholder="Enter Your Email Id" required/>
       </div>
       
       <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Mobile{error.mobile ? <span style={{color:'red',fontSize:'0.8rem',padding: '2px 10px'}}>{error.mobile}</span>:""}
      </label>
       <input value={submission.mobile ? submission.mobile:"" }  onChange={(e)=>inputHandler(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="mobile" name="mobile" placeholder="Enter Your Mobile Number" required/>        
        </div>
        <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Check-in Date{error.checkindate ? <span style={{color:'red',fontSize:'0.8rem',padding: '2px 10px'}}>{error.checkindate}</span>:""}
      </label>
       <input value={submission.checkindate ? submission.checkindate:"" }  onChange={(e)=>inputHandler(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" id="checkindate" name="checkindate" placeholder="Date Required" min="2022-09-28" max="2022-10-02"  required/>        
        </div>
        <div ref={bottomRef} className="mb-4">
       <input onClick={(e)=>checkout(e)} className="text-base leading-none w-full py-3 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white" type="submit" value="Checkout"/>
     
       </div>
     </form>
     </div> : ""}

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Cartc;