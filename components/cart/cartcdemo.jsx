import {useState} from "react";

const Cartc=(props)=>{
const {addtocartdata , setAddtocartdata,calcTotal,total,setSubmission,submission,makePayment,isloading,} = props;
const [error,setError]=useState({name:"",email:"",mobile:"",checkindate:""})
const RemoveItem=(id,pkid)=>{

let removabledata = [...addtocartdata];
removabledata.splice(id, 1);
setAddtocartdata(removabledata);
calcTotal();

}
const removeAll=()=>{
setAddtocartdata([]);

}
const totalcollectable = total.length > 0 ? total[0].totalprice : 0;
const totalgst = total.length > 0 ? total[0].gst : 0;
const totalgrand = total.length > 0 ? total[0].grand : 0;
const totalcarbonfootprint = total.length > 0 ? total[0].totalcarbonemiison : 0;
const inputHandler=(e)=>{
setSubmission({...submission , [e.target.name]:e.target.value})

}
const checkout=(e)=>{
e.preventDefault();
if(addtocartdata.length === 0){
  alert("Cart is Empty");
  return;
}
if(submission.name.length < 5){
setError({...error,name:"Full Name Required"});
}else{
  setError({...error,name:""});
}
if (/^\d{10}$/.test(submission.mobile)) {
setError({...error,mobile:"Valid Mobile Number Required"});
}else{
 setError({...error,mobile:""}); 
}
if(submission.email.length < 5 && !submission.email.includes("@")){
setError({...error,email:"Valid Email Required"});
}else{
  setError({...error,email:""}); 
}
if(!submission.checkindate){
setError({...error,checkindate:"Valid Date Required"});
}else{
  setError({...error,checkindate:""}); 
}
if(error.checkindate ==="" && error.name ==="" && error.email ==="" && error.mobile ===""){
let submissiondata = {...submission,packagedetail:addtocartdata,total};

makePayment({...submission ,...submissiondata}); 
setSubmission([]);
submissiondata = [];
}


}

return (<>
     <div className="md:flex md:flex-row sm:flex-col px-3">

	    <div className="md:w-3/4 flex flex-col justify-center items-center py-3">
      <h2 className="text-3xl uppercase text-gray-500 mb-2 text-center md:self-start md:text-left py-3">Cart Items</h2>
      {addtocartdata.length > 0 ? <div style={{maxWidth:"200px",textAlign: 'center',cursor:"pointer"}} className="bg-gradient-to-r from-red-600 to-red-500 rounded-full py-2 px-3 text-gray-50 text-x uppercase md:self-start mt-2" onClick={()=>removeAll()}>Remove all</div>:""}
      <div style={{width:"100%"}} className="md:flex md:flex-col mt-5">
      
       {addtocartdata && addtocartdata.length > 0 ? addtocartdata.map((data,key)=>{

       return(
        <div key ={"sadsd" + key} className="md:flex md:flex-column mt-5">
         <div className="md:flex flex-col justify-center items-center"> Package Id:{data.id}, Package Name: {data.packagename},Package Type: {data.packagetype}, Persons : {data.packageqts ? data.packageqts: 1 }, Unit Package Price: {data.packageprice}
         <div style={{maxWidth:"150px",justifyContent: 'center',display:"flex"}} className="bg-gradient-to-r from-red-600 to-red-500 text-center rounded-full py-2 px-3 text-gray-50 text-x uppercase md:self-start mt-2" onClick={()=>RemoveItem(key,data.id)}>Remove</div>


         </div>
        
        </div> 
       	)

       })
      

        :"No Item Found"} 
        <div  className="md:flex md:flex-row mt-5">
        <div className="text-xl md:w-1/2 flex flex-col justify-center items-center"><h3>Total Summery </h3></div>
        <div className="text-xl md:w-1/2 flex flex-col"><h3><b>Total Price</b>------ {totalcollectable}/-</h3>
           <h3><b>Total GST</b>------   {totalgst}/-</h3>
           <h3><b>Total Carbon Footprint</b>------   {totalcarbonfootprint} X 5 = {totalcarbonfootprint * 5}/-</h3>
           <h3><b>Grand Total</b>------   {totalgrand}  /-</h3>

        </div>
        </div>
        </div> 
	</div>

       <div className="md:w-1/4 flex flex-row justify-center items-center">
     <div className="w-full max-w-xs">
     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
        Check-in Date{error.checkindate ? <span style={{color:'red',fontSize:'0.8rem',padding: '2px 10px'}}>{error.mobile}</span>:""}
      </label>
       <input value={submission.checkindate ? submission.checkindate:"" }  onChange={(e)=>inputHandler(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" id="checkindate" name="checkindate" placeholder="Date Required" required/>        
        </div>
        <div className="mb-4">
       <input onClick={(e)=>checkout(e)} className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-3 text-gray-50 text-x uppercase md:self-start mt-2" type="submit" value="Checkout"/>
     
       </div>
     </form>
     </div>
     </div>
</div>


</>)

}
export default Cartc;