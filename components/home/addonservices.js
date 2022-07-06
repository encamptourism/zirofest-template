import { v4 as uuidv4 } from 'uuid';
import {useState,useEffect} from "react";
const Addonservices=(props)=>{
const {packages , addtocartdata , setAddtocartdata} = props;

const addtoCart=(id)=>{
let uniqueid,updatedcartdata;
let allselected = packages.find(x=>x.packageid === id);
allselected.id = allselected.packageid;

uniqueid = (localStorage.getItem('cartid') && localStorage.getItem('cartid') !=="") ? localStorage.getItem('cartid') : uuidv4();
if(uniqueid !== localStorage.getItem('cartid')){
    localStorage.setItem('cartid' , uniqueid);
}
let predata = localStorage.getItem(uniqueid);
if(predata && predata.length > 0){

let preparsedata = JSON.parse(predata);
updatedcartdata = [...preparsedata,allselected];

}else{
updatedcartdata = [{...allselected}];

}
let combine = [...updatedcartdata];
const combined = {};
for (let std of combine) {
  if (std.id in combined) {
     combined[std.id].packageqts = combined[std.id].packageprice / std.packageprice;
     
  } else {
    combined[std.id] = { ...std };
  }
}
setAddtocartdata(Object.values(combined));

}

return (
          <>
          <div className="my-10">
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl">Add-On Services</h2>
            </div>
            <hr className="mt-2 mb-5"/>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-10 ">
                { packages ? packages.map((data , key)=>{
                   return (
                <div key ={"assw" + key} className="shadow-md rounded-lg border-2 border-gray-200 flex flex-col md:flex-col justify-between">
                    <div className="p-5">
                      
                        <h3 className="text-xl p-2">{data.packagename}</h3>
                        <p className="text-sm text-gray-500 p-2">{data.packagedescription}</p>
                    </div>
                    <div className="flex flex-row p-4 justify-between">
                        <div className="p-3 text-xl">Rs {data.packageprice} /-</div>
                        <div onClick={()=>addtoCart(data.packageid)} style={{cursor:"pointer"}}  className="bg-green-500 border-2 border-gray-100 rounded-full py-2 px-4 text-gray-200 hover:text-gray-200 hover:bg-purple-500 text-sm flex flex-row my-2 justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              Add to cart
                        </div>
                    </div>
                </div>
                )}):""}
            
                
            </div>
        </div>
          </>
	)

}
export default Addonservices;