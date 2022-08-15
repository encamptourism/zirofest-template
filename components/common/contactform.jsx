import {useState,useEffect} from 'react';
import {DataSubmittedtoapi} from '../functions/enquiry';

const Contactform=()=>{
const [toggle,setToggle] = useState(false);
const [contactform,setContactform] = useState({name:"",email:"",phone:"",message:""});
const [contactformerror,setContactformerror] = useState({name:"",email:"",phone:"",message:""});
const [issuccess,setIssuccess] = useState({success:false,message:""});
const [isloading,setIsloading] = useState(false);
 function validateEmail(email) {

        let mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (email== "") {
            return false;
        }
        else if (!mailFormat.test(email)) {
            
            return false;
        }
        else {
            return true;
        }

    }
const Submit=async (e)=>{
e.preventDefault();
setIsloading(true);
let datatsubmit = {...contactform};
let formactivate = false;
if(datatsubmit.name.length < 4 ){
   setContactformerror({...contactformerror , name:"Invalid Name"});
  formactivate = false;
  setIsloading(false);
  return;
 }else{
 setContactformerror({...contactformerror , name:""});
  formactivate = true;
 }
if(!validateEmail(datatsubmit.email)){
 setContactformerror({...contactformerror , email:"Invalid Email Id"});
 formactivate = false;
  setIsloading(false);
 return;
 }else{
 setContactformerror({...contactformerror , email:""});
 formactivate = true;
 }
 if(datatsubmit.phone && isNaN(datatsubmit.phone)){
   setContactformerror({...contactformerror , phone:"Invalid mobile number"});
    formactivate = false;
    setIsloading(false);
    return;

 } 
else if(datatsubmit.phone.length !== 10){
 setContactformerror({...contactformerror , phone:"Enter 10 digit mobile number"});
  formactivate = false;
  setIsloading(false);
  return;
 }else{
 setContactformerror({...contactformerror , phone:""});
  formactivate = true;

 }

  if(datatsubmit.message.length < 20 ){
   setContactformerror({...contactformerror , message:"Message must have atleast 20 Characters"});
 formactivate = false;
   setIsloading(false);
  return;
 }else{
 setContactformerror({...contactformerror , message:""});
 formactivate = true;
 }
if(formactivate && formactivate === true){
  
let dataSubmitted = await DataSubmittedtoapi(datatsubmit);


if(dataSubmitted && dataSubmitted.success === true){
setIssuccess({...issuccess, success: true ,message: `Your Message has been sent Successfully with Reference id ${dataSubmitted.message}. We'll revert back you within couple of hours.` });
setContactform({name:"",email:"",phone:"",message:""});
  setIsloading(false);
}else{
 setIssuccess({...issuccess, success: false ,message: dataSubmitted.message || "Something wnt wrong. Please try after sometime" }); 
  setIsloading(false);
}


}

}

const onChangeHandler=(e)=>{

setContactform({...contactform,[e.target.name]:e.target.value});
let val = e.target.value;
if(e.target.name === 'email'){
if(!validateEmail(val)){
 setContactformerror({...contactformerror , email:"Invalid Email Id"});
 }else{
 setContactformerror({...contactformerror , email:""});
 }
 }

 if(e.target.name === 'phone'){
 if(val && isNaN(val)){
   setContactformerror({...contactformerror , phone:"Invalid mobile number"});

 } 
else if(val && val.length !== 10){
 setContactformerror({...contactformerror , phone:"Enter 10 digit mobile number"});
 }else{
 setContactformerror({...contactformerror , phone:""});
 }
 }
  if(e.target.name === 'name'){
 if(val && val.length < 4 ){
   setContactformerror({...contactformerror , name:"Invalid Name"});

 }else{
 setContactformerror({...contactformerror , name:""});
 }
 }
   if(e.target.name === 'message'){
 if(val && val.length < 20 ){
   setContactformerror({...contactformerror , message:"Message must have atleast 20 Characters"});

 }else{
 setContactformerror({...contactformerror , message:""});
 }
 }


}
useEffect(()=>{
if(!toggle){
  setContactform({name:"",email:"",phone:"",message:""});
  setIssuccess({success:false,message:""});
  setIsloading(false);
}


},[toggle])

return (
<>

 <div className="circle" onClick={()=>setToggle(!toggle)}>
 Enquiry
 </div>
 { toggle ? <div>
	    <div id="yusu" className="bg-gray-50 flex-grow p-3">
	    <div className="cross text-xl" onClick={()=>setToggle(!toggle)}>X</div> 
       <div id="formle" className="flex p-2 flex-col justify-center items-center h-20 bg-indigo-600">
        <h3 className="text-lg text-white">How can we help?</h3>
        <div className="text-white opacity-50">We usually respond in a few hours</div>
      </div>
          <form
          id="form"
          className="needs-validation"
          
        >
     
            <div className="mb-4">
              <label
                htmlFor="names"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Full Name<span className="error">{contactformerror.name || ""}</span></label
              >
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e)=>onChangeHandler(e)}
                placeholder="John Doe"
                required
                value={contactform.name  || ""}
                className="w-full px-3 py-1 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div
                className="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
              >
                Please provide your full name.
              </div>
            </div>
            
              <div className="mb-4">
              <label
                htmlFor="phones"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Contact Number<span className="error">{contactformerror.phone || ""}</span></label
              >
              <input
                type="text"
                name="phone"
                id="phone"
                value={contactform.phone  || ""}
                onChange={(e)=>onChangeHandler(e)}
                placeholder="Enter Your 10 digit phone Number"
                required
                className="w-full px-3 py-1 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div
                className="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
              >
                Please provide your full name.
              </div>
            </div>

        
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Email Address<span className="error">{contactformerror.email || ""}</span></label
              >
              <input
                type="email"
                name="email"
                id="email"
                value={contactform.email  || ""}
                onChange={(e)=>onChangeHandler(e)}
                placeholder="you@company.com"
                required
                className="w-full px-3 py-1 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div className="empty-feedback text-red-400 text-sm mt-1">
                Please provide your email address.
              </div>
              <div className="invalid-feedback text-red-400 text-sm mt-1">
                Please provide a valid email address.
              </div>
            </div>
 
           
          <div className="mb-3">
            <label
              htmlFor="messages"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Your Message<span className="error">{contactformerror.message || ""}</span></label
            >

            <textarea
              rows="3"
              name="message"
              id="message"
              placeholder="Your Message"
              onChange={(e)=>onChangeHandler(e)}
              className="w-full h-28 px-3 py-1 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
              value={contactform.message  || ""}
            />
            <div
              className="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
            >
              Please enter your message.
            </div>
          </div>
          {issuccess.success ? <span className="text-green-400 text-sm">{issuccess.message}</span> : ""}
           {!issuccess.success ? <span className="error py-3 text-xl">{issuccess.message}</span> : ""}
          <div className="mb-3">
            <button
              type="submit"
              className="w-full px-3 py-1 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              onClick={(e)=>Submit(e)}
              disabled={isloading}
            >
              Send Message
            </button>
          </div>
        </form>


       </div>
       </div>:""}
	     </>
	   )


}
export default Contactform;