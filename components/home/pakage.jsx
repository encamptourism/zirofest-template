import { v4 as uuidv4 } from 'uuid';
import {useState,useEffect} from "react";
import Image from "next/image";
import Incrementor from "../functions/incrementor";
const Pakage=(props)=>{
const {packages , addtocartdata , setAddtocartdata , addpersona , setAddpersona} = props;
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
setAddpersona({});
}

const addtoCart=(id)=>{
let updatedcartdata;
if(allselected !== "" && id === allselected.packageid){
let uniqueid = localStorage.getItem('cartid');
let predata = localStorage.getItem(uniqueid);
if(predata && predata.length > 0 && typeof predata !== undefined ){

let preparsedata = JSON.parse(predata);
//new change
if(preparsedata && preparsedata.filter(x => x.id === allselected.id)){
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

let price;
let defaulttype;
let packagedescription,essentials,carbonemiison,bestfor,size;
packages.map((katcha)=>{
if(id === katcha.packageid){
defaulttype = katcha.defaulttype;
  katcha.packageprice.map((sd)=> {
    if(sd[defaulttype]){
     price = sd[defaulttype];   
    }
    
});

    katcha.packagedescription.map((sd)=> {
    if(sd[defaulttype]){
     packagedescription = sd[defaulttype];   
    }
    
});
    katcha.essentials.map((sd)=> {
    if(sd[defaulttype]){
     essentials = sd[defaulttype];   
    }
    
});
   katcha.carbonemiison.map((sd)=> {
    if(sd[defaulttype]){
     carbonemiison = sd[defaulttype];   
    }
    
});
    katcha.bestfor.map((sd)=> {
    if(sd[defaulttype]){
     bestfor = sd[defaulttype];   
    }
    
});
  
    katcha.size.map((sd)=> {
    if(sd[defaulttype]){
     size = sd[defaulttype];   
    }
    
});
}
})

let datax = packages.filter((dssd)=>{
    return dssd.packageid === id;
})
let hdfata = {...datax[0],packageprice:price,packagetype:defaulttype,size:size,packagedescription:packagedescription,essentials:essentials,carbonemiison:carbonemiison,bestfor:bestfor};
//get selected image
let selectdataimage = "";
hdfata.packageimagelink.map((data)=>{
    if(data[hdfata.packagetype]){
   selectdataimage =  data[hdfata.packagetype];
    }
})
updatedcartdata = [{...hdfata,id:id + defaulttype,packageimage:selectdataimage}];
setAddtocartdata(updatedcartdata);


}
}

const RemoveItem=(id,pkid)=>{

let removabledata = [...addtocartdata];
removabledata.splice(id, 1);
setAddtocartdata(removabledata);
setAddpersona({})
}


useEffect(()=>{

let addqtsdata =[...addtocartdata];
 addqtsdata && addpersona && addqtsdata.map((data)=>{
if(data.id === Object.keys(addpersona)[0]){
    data.packageqts = addpersona[data.id];
data['packagepricetotal'] = parseInt(addpersona[data.id]) * data['packageprice'];
}

 }) 
 
setAddtocartdata(addqtsdata);

},[addpersona])



const styles={
              overlap:{textAlign:"center",marginTop: '-5rem',position:"relative",zIndex:"600",color:"white",fontWeight: '600',fontSize:"1.4rem",backgroundColor:"rgba(0,0,0,0.4)",padding:"0.5rem",width:"auto"},
              chaos:{backgroundColor:"#bfbfbf",position:"absolute"},
             }
return (
        <>
          <div id="pakage" className="my-5 px-3">
                <h1 className="text-center md:text-left text-2xl uppercase">Our Camping Packages</h1>
          
          <hr className="mt-2 mb-5"/>
          <div className='text-center md:text-left px-5 pb-5 text-gray-600'>
            While the music keeps you alive, your abode should certainly be a place of utmost comfort. Sit back and catch up with your friends or tent mates, or simply snooze off after a heavy day of blissful experiences. Choose from an array of package designed to delight you.
          </div>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-5">
           { packages ? packages.map((data , key)=>{
                   return (

                <div key ={"assw" + key} className="bg-slate-100 shadow-md rounded-lg border-2 border-gray-200">
                  
                  { viewDetails && viewDetails.id === data.packageid + key ? 
                    <div className="rounded-lg p-3">
                    <div onClick={()=>Cross(data.packageid + key)} style={{float:"right",fontSize:"1.8rem",cursor:"pointer"}} className="font-bold">x</div>
                      <div style={{marginTop:"15%"}}>
                      {data.packagedescription ? data.packagedescription.map((dd,kk)=>{     
                            return (
                 (dd[selectedpack[data.packageid] || data.defaulttype])  ? dd[selectedpack[data.packageid] || data.defaulttype]:""                       
                          )

                        }):""
                       
                         }
                         </div>
                    <div className="py-1">
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
                 (dd[selectedpack[data.packageid] || data.defaulttype])  ? <Image alt="encamp" key={kk} width={60} height={40} layout='responsive'  src = {dd[selectedpack[data.packageid] || data.defaulttype]} className="w-full rounded-tl-lg rounded-tr-lg"/>:""                       
                          )

                        }):""
                       
                         }
    
                    <div className="p-3">
                     <div style={styles.overlap} className="flex flex-row justify-between">
                        <h3 className="text-center">{data.packagename}</h3>

                                 
                     </div>
                     <div className="flex flex-row md:flex-row justify-between" style={{marginTop:"2rem"}}>
                    <div className="flex flex-row my-1" >
                    {data.packagetype ? data.packagetype.map((ds,k)=>{
                         return (
                        <div key={"ewe" + k} style={{cursor:"pointer"}} className={(ds === data.defaulttype && allselected.packageid !== data.packageid) ? "border-2 border-gray-300 rounded-md text-xs px-2 py-1 mr-2 text-gray-200  bg-gray-500":(data.packageid === allselected.packageid && ds === allselected.packagetype) ? "border-2 border-gray-300 rounded-md text-xs px-2 py-1 mr-2 text-gray-200  bg-gray-500":"border-2 border-gray-300 rounded-md text-xs px-2 py-1 mr-2"} onClick={()=>Selectpack(ds,data.packageid)}>{ds}</div>       
                          
                    )}):""}
                    </div>
                       {
                        addtocartdata ? addtocartdata.map((datas,key)=>(datas.id === (data.packageid + datas.packagetype)) ? 
                        <Incrementor key={"ramanauj" + key}  id={data.packageid + datas.packagetype} addpersona={addpersona} setAddpersona={setAddpersona}/>:""    

                       ):""

                        }
                    
                    </div>

                    <div className="mt-3 mb-2 flex flex-row md:flex-row justify-between">
                         <div>
                           <div className="font-thin text-xs">Carbon Footprint</div>
                           <div className=" text-basic font-semibold">
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
                           
                           <div className=" text-basic font-semibold"><span className="text-xs font-semibold">Rs.</span>{data.packageprice ? data.packageprice.map((dd,kk)=>{     
                            return (
                  dd[selectedpack[data.packageid] || data.defaulttype]  ? dd[selectedpack[data.packageid] || data.defaulttype]:""
                       
                          )

                        }):""
                       
                         }/-</div>
                           <div className="font-thin text-sm">per person</div>
                        </div>
                    </div>
                    <div className="flex flex-row my-1 justify-between">
                       <div onClick={()=>showDescription(data.packageid + key)} className="bg-gray-400 border-2 border-gray-100 rounded-full py-2 px-4 text-white hover:text-gray-200 text-sm flex flex-row hover:bg-gray-700 my-2 justify-center">
                            View Details
                        </div>
                        {(addtocartdata && addtocartdata.length > 0)  ? addtocartdata.map((datas,key)=>{
                         
                         return (
                               ((data.packageid + datas.packagetype) === datas.id) ? 
                                <div key={key} onClick={()=>RemoveItem(data.packageid + datas.packagetype , "jkjkjk")} style={{cursor:"pointer"}}
                         className="bg-red-600 border-2 border-red-100 rounded-full py-2 px-4 text-white hover:text-gray-200 hover:bg-gray-400 text-sm flex flex-row my-2 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              Remove
                        </div> : (key === 0) ?
                        <div key={key} onClick={()=>addtoCart(data.packageid)} style={{cursor:"pointer"}}
                         className="bg-gray-600 border-2 border-gray-100 rounded-full py-2 px-4 text-white hover:text-gray-200 hover:bg-gray-400 text-sm flex flex-row my-2 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              Add to cart
                        </div>:""
                                )
                        }):<div key={key} onClick={()=>addtoCart(data.packageid)} style={{cursor:"pointer"}}
                         className="bg-gray-600 border-2 border-gray-100 rounded-full py-2 px-4 text-white hover:text-gray-200 hover:bg-gray-400 text-sm flex flex-row my-2 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              Add to cart
                        </div>
                      }
                       
                    
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
