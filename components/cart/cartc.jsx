import {useState,useEffect} from "react";

function Cartc(props) {
const {setIsloading,addtocartdata , setAddtocartdata,calcTotal,total,setSubmission,submission,makePayment,isloading,} = props;
const [error,setError]=useState({name:"",email:"",mobile:"",checkindate:""})
const [add , setAdd] = useState("");
const [addperson , setAddperson] = useState("");
const [show,setShow] = useState(false);

const addQ=(id,e)=>{
setIsloading(true);
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
if(!data['packagepricetotal']){
data['packagepricetotal'] = data['packageprice'];
}else{
    data['packagepricetotal'] = parseInt(addingPerson[id]) * data['packageprice'];
}

qts = addingPerson[id];


}
return data;

})

setAddperson(pasa);
setIsloading(false);
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

const totalcollectable = total.length > 0 ? total[0].totalprice : 0;
const totalgst = total.length > 0 ? total[0].gst : 0;
const totalgrand = total.length > 0 ? total[0].grand : 0;
const totalcarbonfootprint = total.length > 0 ? total[0].totalcarbonemiison : 0;
const inputHandler=(e)=>{
setSubmission({...submission , [e.target.name]:e.target.value})

}
    return (
        <>
        <div>
            <div className="w-full h-full bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0 py-14" id="chec-div">
                <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div className="flex md:flex-row flex-col justify-end" id="cart">
                        <div className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                    
                                    <p className="text-3xl font-black leading-10 text-gray-800 pt-3">Cart</p>
                                    <div className="md:flex flex-col items-center mt-14 py-8 border-t border-gray-200">
                                        {/*mapping*/}
                                         {addtocartdata && addtocartdata.length > 0 ? addtocartdata.map((data,key)=>{
                                         return(
                                        <div key={"cartitems" + key} className="md:pl-3 md:w-full mb-9">
                                            <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{data.id ? data.id :"" }</p>
                                            <div className="flex items-center justify-between w-full pt-1">
                                                <p className="text-base font-black leading-none text-gray-800">{data.packagename ? data.packagename : ""}</p>
                                                <input key ={"dssqwpo" + key} className="disco" type ="number" name={data.id} id ="perperson" min="1" onChange={(e)=>addQ(data.id,e)} value={add[data.id]? add[data.id] :""}/>
                                             
                                            </div>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">{data.packagetype ? `Package Type: ${data.packagetype}` : ""}</p>
                                            <p className="text-xs leading-3 text-gray-600 py-2">Persons : {data.packageqts ? data.packageqts: 1 }</p>
                                            <p className="text-xs leading-3 text-gray-600 py-2">Unit Package Price per Person : {data.packageprice ? `${data.packageprice} /-`: 0 }</p>                                          
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
                                            <button onClick={() => setShow(!show)} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Proceed to Checkout
                                            </button>
                                        </div>
                                    </div>
     
     {show === true ? <div className="w-full">
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
       <input onClick={(e)=>checkout(e)} className="text-base leading-none w-full py-3 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white" type="submit" value="Checkout"/>
     
       </div>
     </form>
     </div> : ""}

                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default Cartc;