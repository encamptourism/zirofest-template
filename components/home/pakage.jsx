import { v4 as uuidv4 } from 'uuid';
import {useState,useEffect} from "react";
import Image from "next/image";
const Pakage=(props)=>{
const {packages , addtocartdata , setAddtocartdata} = props;
const [selectedpack , setSelectedpack] = useState({});
const [allselected,setAllselected] = useState("");
const [viewDetails,setViewDetails] = useState({});

const showDescription=(id)=>{
setViewDetails({id:id});
}
const Cross=(id)=>{
setViewDetails({...viewDetails,id:""});
}



const Selectpack=(ds ,pid)=>{
let price;
let packagedescription,essentials,carbonemiison,bestfor,size;
packages.map((katcha)=>{
if(pid === katcha.packageid){
  katcha.packageprice.map((sd)=> {
    if(sd[ds]){
     price = sd[ds];   
    }
    
});
    katcha.packagedescription.map((sd)=> {
    if(sd[ds]){
     packagedescription = sd[ds];   
    }
    
});
    katcha.essentials.map((sd)=> {
    if(sd[ds]){
     essentials = sd[ds];   
    }
    
});
   katcha.carbonemiison.map((sd)=> {
    if(sd[ds]){
     carbonemiison = sd[ds];   
    }
    
});
    katcha.bestfor.map((sd)=> {
    if(sd[ds]){
     bestfor = sd[ds];   
    }
    
});
    katcha.size.map((sd)=> {
    if(sd[ds]){
     size = sd[ds];   
    }
    
});
}
})
let datax = packages.filter((dssd)=>{
    return dssd.packageid === pid;
})
let hdfata = {...datax[0],packageprice:price,packagetype:ds,size:size,packagedescription:packagedescription,essentials:essentials,carbonemiison:carbonemiison,bestfor:bestfor};
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


const styles={
              overlap:{textAlign:"center",marginTop: '-5rem',position:"relative",zIndex:"600",color:"white",fontWeight: '600',fontSize:"1.4rem",backgroundColor:"rgba(0,0,0,0.4)",padding:"0.5rem",width:"auto"},
              chaos:{backgroundColor:"#bfbfbf",position:"absolute"},
             }
return (
        <>
          <div id="pakage" className="my-10 px-3">
          <div className="flex flex-row justify-between">
                <h2  className="text-xl">Our Camping Packages</h2>
            </div>
          <hr className="mt-2 mb-5"/>
          <div style={{margin:"0 auto",letterSpacing: "1.5px",padding:"0.5rem"}}>While the music keeps you alive, your abode should certainly be a place of utmost
comfort. Sit back and catch up with your friends or tent mates, or simply snooze off
after a heavy day of blissful experiences. Choose from an array of package designed
to delight you.</div>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-10 ">
           { packages ? packages.map((data , key)=>{
                   return (

                <div key ={"assw" + key} className="shadow-md rounded-lg border-2 border-gray-200">
                  
                  { viewDetails && viewDetails.id === data.packageid + key ? 
                    <div className="rounded-lg p-3">
                    <div onClick={()=>Cross(data.packageid + key)} style={{float:"right",fontSize:"1.8rem",cursor:"pointer"}} className="font-bold">x</div>
                      <div style={{marginTop:"30%"}}>
                      {data.packagedescription ? data.packagedescription.map((dd,kk)=>{     
                            return (
                 (dd[selectedpack[data.packageid] || data.defaulttype])  ? dd[selectedpack[data.packageid] || data.defaulttype]:""                       
                          )

                        }):""
                       
                         }
                         </div>
                    <div className="py-2">
                    <span style={{fontWeight:"600"}}>Carbon FootPrint</span>          {data.carbonemiison ? data.carbonemiison.map((dd,kk)=>{     
                            return (
                  dd[selectedpack[data.packageid] || data.defaulttype]  ? dd[selectedpack[data.packageid] || data.defaulttype]:""
                       
                          )

                        }):""
                       
                         } KgCO2/person
                    </div>
                     <div className="py-2">
                    <span style={{fontWeight:"600"}}>Size of Tent: </span>
                    {data.size ? data.size.map((dd,kk)=>{     
                            return (
                  dd[selectedpack[data.packageid] || data.defaulttype]  ? dd[selectedpack[data.packageid] || data.defaulttype]:""
                       
                          )

                        }):""
                       
                         }
                    </div>
                     <div className="py-2">
                    <span style={{fontWeight:"600"}}>Essentials: </span>
                    {data.essentials ? data.essentials.map((dd,kk)=>{     
                            return (
                  dd[selectedpack[data.packageid] || data.defaulttype]  ? dd[selectedpack[data.packageid] || data.defaulttype]:""
                       
                          )

                        }):""
                       
                         }
                    </div>
                    <div className="py-2">
                    <span style={{fontWeight:"600"}}>Best For: </span>
                    {data.bestfor ? data.bestfor.map((dd,kk)=>{     
                            return (
                  dd[selectedpack[data.packageid] || data.defaulttype]  ? dd[selectedpack[data.packageid] || data.defaulttype]:""
                       
                          )

                        }):""
                       
                         }
                    </div>
                  </div> : 

<div>
{data.packageimagelink ? data.packageimagelink.map((dd,kk)=>{     
                            return (
                 (dd[selectedpack[data.packageid] || data.defaulttype])  ? <Image alt="encamp" key={kk} width={180} height={200} layout='responsive'  src = {dd[selectedpack[data.packageid] || data.defaulttype]} className="w-full rounded-tl-lg rounded-tr-lg"/>:""                       
                          )

                        }):""
                       
                         }
    
                    <div className="p-5">
                     <div style={styles.overlap} className="flex flex-row justify-between">
                        <h3 className="text-center">{data.packagename}</h3>

                                 
                     </div>
                    <div className="flex flex-row my-3" style={{marginTop:"2rem"}}>
                    {data.packagetype ? data.packagetype.map((ds,k)=>{
                         return (
                        <div key={"ewe" + k} style={{cursor:"pointer"}} className={(ds === data.defaulttype && allselected.packageid !== data.packageid) ? "border-2 border-gray-300 rounded-md text-xs px-2 py-1 mr-2 text-gray-200  bg-gray-500":(data.packageid === allselected.packageid && ds === allselected.packagetype) ? "border-2 border-gray-300 rounded-md text-xs px-2 py-1 mr-2 text-gray-200  bg-gray-500":"border-2 border-gray-300 rounded-md text-xs px-2 py-1 mr-2"} onClick={()=>Selectpack(ds,data.packageid)}>{ds}</div>       
                          
                    )}):""}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between">
                         <div>
                           <div className="font-thin text-xs font-semibold">Carbon Footprint</div>
                           <div className=" text-xl font-semibold">
                                {data.carbonemiison ? data.carbonemiison.map((dd,kk)=>{     
                            return (
                  dd[selectedpack[data.packageid] || data.defaulttype]  ? dd[selectedpack[data.packageid] || data.defaulttype]:""
                       
                          )

                        }):""
                       
                         }
                           </div>
                           <div className="font-thin text-sm">KgCO2/person</div>
                        </div>
                        <div>
                           
                           <div className=" text-xl font-semibold"><span className="font-thin text-xs font-semibold">Rs.</span>  {data.packageprice ? data.packageprice.map((dd,kk)=>{     
                            return (
                  dd[selectedpack[data.packageid] || data.defaulttype]  ? dd[selectedpack[data.packageid] || data.defaulttype]:""
                       
                          )

                        }):""
                       
                         }/-</div>
                           <div className="font-thin text-sm">per person</div>
                        </div>
                    </div>
                       <div onClick={()=>showDescription(data.packageid + key)} className="bg-white border-2 border-gray-100 rounded-full py-2 px-4 text-gray-500 hover:text-gray-200 text-sm flex flex-row hover:bg-gray-700 my-2 justify-center">
                            View Details
                        </div>
                        <div onClick={()=>addtoCart(data.packageid)} style={{cursor:"pointer"}}
                         className="bg-gray-600 border-2 border-gray-100 rounded-full py-2 px-4 text-white hover:text-gray-200 hover:bg-gray-400 text-sm flex flex-row my-2 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              Add to cart
                        </div>

                    </div>
                   
                </div>
            }
               </div>
              
            )}):""
            }
          </div>


        </div>
        </>

	)

}
export default Pakage;
