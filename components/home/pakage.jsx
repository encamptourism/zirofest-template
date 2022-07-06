import { v4 as uuidv4 } from 'uuid';
import {useState,useEffect} from "react";
const Pakage=(props)=>{
const {packages , addtocartdata , setAddtocartdata} = props;
const [selectedpack , setSelectedpack] = useState({});
const [allselected,setAllselected] = useState("");



const Selectpack=(ds ,pid)=>{
let price;
packages.map((katcha)=>{
if(pid === katcha.packageid){
  katcha.packageprice.map((sd)=> {
    if(sd[ds]){
     price = sd[ds];   
    }
    
});
}
})
let datax = packages.filter((dssd)=>{
    return dssd.packageid === pid;
})
let hdfata = {...datax[0],packageprice:price,packagetype:ds};
//get selected image
let selectdataimage = "";
hdfata.packageimagelink.map((data)=>{
    if(data[hdfata.packagetype]){
   selectdataimage =  data[hdfata.packagetype];
    }
})


setAllselected({...hdfata,id:pid + ds,packageimage:selectdataimage});
setSelectedpack({[pid]:ds});

}

const addtoCart=(id)=>{
let uniqueid,updatedcartdata;
if(allselected !== "" && id === allselected.packageid){
uniqueid = (localStorage.getItem('cartid') && localStorage.getItem('cartid') !=="") ? localStorage.getItem('cartid') : uuidv4();
if(uniqueid !== localStorage.getItem('cartid')){
    localStorage.setItem('cartid' , uniqueid);
}
let predata = localStorage.getItem(uniqueid);
if(predata && predata.length > 0 && typeof predata !== undefined ){

let preparsedata = JSON.parse(predata);
//new change
if(preparsedata.filter(x => x.id === allselected.id)){
updatedcartdata = [allselected];

}else{
 updatedcartdata = [...preparsedata,allselected];   
}
//end change
// updatedcartdata = [...preparsedata,allselected]; 



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
setAllselected("");   
}else{
updatedcartdata = [{...allselected}];
setAddtocartdata(updatedcartdata);
setAllselected(""); 
}

}else{
    alert("Select stay type");
}

}

useEffect(()=>{
if(addtocartdata.length > 0){

let uniqueid = localStorage.getItem('cartid');
localStorage.setItem(uniqueid,JSON.stringify(addtocartdata));
}
},[addtocartdata])

return (
        <>
          <div id="pakage" className="my-10">
          <div className="flex flex-row justify-between">
                <h2  className="text-2xl">Our Camping Packages</h2>
            </div>
          <hr className="mt-2 mb-5"/>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-10 ">
           { packages ? packages.map((data , key)=>{
                   return (
                <div key ={"assw" + key} className="shadow-md rounded-lg border-2 border-gray-200">
                    
                         {data.packageimagelink ? data.packageimagelink.map((dd,kk)=>{     
                            return (
                 (dd[selectedpack[data.packageid] || 'Alpine'])  ? <img key={kk} src = {dd[selectedpack[data.packageid] || 'Alpine']} className="w-full rounded-tl-lg rounded-tr-lg"/>:""                       
                          )

                        }):""
                       
                         }
        
                    
                    <div className="p-5">
                     <div className="flex flex-row justify-between">
                        <h3>{data.packagename}</h3>

                    <div  className="text-md" >
                        {data.packageprice ? data.packageprice.map((dd,kk)=>{     
                            return (
                  dd[selectedpack[data.packageid] || 'Alpine']  ? dd[selectedpack[data.packageid] || 'Alpine']:""
                       
                          )

                        }):""
                       
                         }
                          /- </div>                     
                     </div>
                    <div className="flex flex-row my-3">
                    {data.packagetype ? data.packagetype.map((ds,k)=>{
                         return (
                        <div key={"ewe" + k} style={{cursor:"pointer"}} className={(ds === "Alpine" && allselected.packageid !== data.packageid) ? "border-2 border-gray-300 rounded-md text-xs px-2 py-1 mr-2 text-gray-200  bg-gray-500":(data.packageid === allselected.packageid && ds === allselected.packagetype) ? "border-2 border-gray-300 rounded-md text-xs px-2 py-1 mr-2 text-gray-200  bg-gray-500":"border-2 border-gray-300 rounded-md text-xs px-2 py-1 mr-2"} onClick={()=>Selectpack(ds,data.packageid)}>{ds}</div>       
                          
                    )}):""}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between">
                        <div>
                        <a href="" className="bg-white border-2 border-gray-100 rounded-full py-2 px-4 text-gray-500 hover:text-gray-200 text-sm flex flex-row hover:bg-gray-700 my-2 justify-center">
                            View Details
                        </a>

                        </div>
                        <div>

                        <div onClick={()=>addtoCart(data.packageid)} style={{cursor:"pointer"}}
                         className="bg-green-500 border-2 border-gray-100 rounded-full py-2 px-4 text-gray-200 hover:text-gray-200 hover:bg-purple-500 text-sm flex flex-row my-2 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              Add to cart
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
              
            )}):""
            }
          </div>

        </div>
        </>

	)

}
export default Pakage;
