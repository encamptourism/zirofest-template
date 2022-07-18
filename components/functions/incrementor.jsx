import {useState,useEffect} from "react";
const Incrementor=(props)=>{
const {id ,addpersona,setAddpersona} = props;


const increment =(packageid)=>{
let plus = addpersona && addpersona[packageid] ? addpersona[packageid] : 1;
setAddpersona({[packageid] : plus + 1}) 


}

const decrement =(packageid)=>{
let minus = addpersona && addpersona[packageid] && addpersona[packageid] > 1 ? addpersona[packageid] : 2;
setAddpersona({[packageid] : minus - 1}) 

}

return(
<>
 <div className="flex flex-row justify-between">
                    <button name ={id} onClick={(e)=>decrement(id,e)} className="bg-gray-500 text-basic text-white font-bold px-2" style={{height:"30px",borderRadius: "3px"}}>-</button>
                    <div className="text-basic text-black font-bold px-2">{addpersona && addpersona[id] ? addpersona[id]:1}</div>
                    <button name ={id} onClick={(e)=>increment(id,e)} className="bg-gray-500 text-basic text-white font-bold px-2" style={{height:"30px",borderRadius: "3px"}}>+</button>
                    </div>
</>
	)

}
export default Incrementor;