import { v4 as uuidv4 } from 'uuid';
import {useState,useEffect} from "react";
const Addonservices=(props)=>{
const {packages , addtocartdata , setAddtocartdata,removalid,setRemovalid ,Tagmanageri} = props;
const [istoggle,setIstoggle] = useState("");
const addtoCart=(id)=>{
setRemovalid({...removalid,[id]:1});

let uniqueid,updatedcartdata;
let allselected = packages.find(x=>x.packageid === id);
allselected.id = allselected.packageid;
Tagmanageri([allselected]);


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
let finalcheck = Object.values(combined);
let disha = false;
let disaqts = 1;
let disperson = 1;
finalcheck.map((data)=>{
if(data.packageid === '1n2d2999' || data.packageid === '2n3d4999'|| data.packageid === '4n5d6999'){
disha = true;
disaqts = data.defaultqts;
disperson = data.packageqts;
}
})

if(disha === true){
finalcheck.map((data,key)=>{
if(data.packageid == 'lunch449' || data.packageid == 'dinner449'){
data.packageqts = disaqts * disperson;
data.packagepricetotal = data.packageqts * data.packageprice; 
}
if(data.packageid !== 'lunch449' && data.packageid !== 'dinner449'){
data.packageqts = disperson;
data.packagepricetotal = data.packageqts * data.packageprice; 
}
})

}
setAddtocartdata(finalcheck);

}
const RemoveItem=(id,pkid)=>{
let removal = {...removalid};
delete (removal[id]);
setRemovalid(removal);
let removabledata = [...addtocartdata];
let updated =[];
let incre = 0;
removabledata.map((data,key)=>{
if(data.packageid !== id){
   updated[incre] = data;
   incre++; 
}
})
setAddtocartdata(updated);
}

const toggleDatainfo=(id)=>{
let newid = id + 'openclose';
if(istoggle === ""){
    setIstoggle(newid);
}else{
  setIstoggle('');  
}


}

return (
          <>
          <div id="addons" className="mt-8 px-3">
                <h1 className="text-center md:text-left text-2xl uppercase">Add-On Services</h1>
            <hr className="mt-2 mb-5 border-slate-400"/>
               <div className='text-center md:text-left px-5 pb-5 text-gray-600'>If you thought ZIRO was all about music, good vibes, culture, and socialising, well you were bang on! But, with us, there’s more to ZIRO. It’s a multitude of experiences waiting to mesmerise you. While you will explore much of it with our packages, there are a few that are add-ons.</div>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-8">
                { packages ? packages.map((data , key)=>{
                   return (
                <div key ={"assw" + key} className="bg-slate-100 shadow-md rounded-lg border-2 border-gray-200 flex flex-col md:flex-col justify-between px-1">
                    <div className="p-1">
                        <h3 className="text-xl p-2 text-gray-900 font-semibold">{data.packagename}</h3>
                        <p className="text-sm text-gray-500 p-1">{data.packagedescription}</p>
                    </div>
                    <div className="flex flex-row p-2 justify-between">
                       <div>
                           <div className="text-xs font-semibold">Carbon Footprint<span style={{float:'right', marginLeft: '15px',cursor:'pointer'}} onClick={()=>toggleDatainfo(data.packageid)}><img  width="15px" height="15px" src="https://img.icons8.com/flat-round/64/000000/info.png"/></span></div>
                            {istoggle && istoggle ===(data.packageid + 'openclose')  ? <div style={{position:"absolute"}} className="text-xs jingala">*Carbon Emission values are calculated based on Encamp CF tool and cover your end-to-end environmental footprint on this travel itinerary to Ziro and back. These are approximate values and are dependent upon the source location of your travel.</div>:""}
                           <div className=" text-xl font-semibold">{data.carbonemiison && data.carbonemiison > 0 ? data.carbonemiison.toFixed(2) : 0.00}</div>
                           <div className="font-thin text-sm">KgCO2/person</div>

                        </div>
                        <div>
                        <div className="px-3 font-thin text-xs">Price</div>
                        <div className="px-3 text-basic font-semibold">Rs. {data.packageprice}/-</div>
                        <div className="px-3 font-thin text-xs">{(data.packagename === 'Lunch' || data.packagename === 'Dinner') ? 'per Meal' : 'per Person'}</div>
                        </div>
                    </div>
                {removalid[data.packageid] ?  <div onClick={()=>RemoveItem(data.packageid , "dsd")} style={{cursor:"pointer"}}  className="bg-red-600 border-2 border-red-100 rounded-full py-2 px-4 text-white text-sm flex flex-row my-2 justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              Remove
                        </div> :<div  onClick={()=>addtoCart(data.packageid)} style={{cursor:"pointer"}}
                         className="bg-green-500 border-2 border-gray-100 rounded-full py-2 px-4 text-white text-sm flex flex-row my-2 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              Add to cart
                        </div>}
                

                </div>
                )}):""}
            
                
            </div>
        </div>
          </>
	)

}
export default Addonservices;