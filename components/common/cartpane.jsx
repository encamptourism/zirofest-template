import {useState,useEffect} from "react";
const Cartpane=(props)=>{
const {addtocartdata,setAddtocartdata} = props;
const [add , setAdd] = useState("");
const addQ=(id,e)=>{

		setAdd({...add,[id] : e.target.value})


}

const addPerson=(id)=>{
if(id === "" || !id){
	return;
}
if(add[id] < 1 || !add){
	alert("Add Number of Person");
	return;
}

let dis = [...addtocartdata];
let qts = "";
let pasa = dis.map((data)=>{
if(data.id === id){
data['packageqts'] = add[id];
if(!data['packagepricetotal']){
data['packagepricetotal'] = data['packageprice'];
}else{
	data['packagepricetotal'] = parseInt(add[id]) * data['packageprice'];
}

qts = add[id];


}
return data;

})
setAddtocartdata(pasa);
}
useEffect(()=>{
let adddata={};
addtocartdata.map((data)=>{
let qts = data.packageqts ? data.packageqts:1;
adddata = {...adddata,[data.id]:qts}
})

setAdd(adddata);
},[addtocartdata])


return (
 <>
 <div><h2>Cart Package Details</h2></div>
{addtocartdata && addtocartdata.length > 0 ? <div  className="flexcontainer">
{addtocartdata.map((data,key)=>{

return (
<>
<div key={"disco" + key}  className="flexchild" style={{backgroundColor:"white"}}>
  <div className="pardesi">
  <div  className="desi">Package Name: {data.packagename} , Package Type: {data.packagetype} , Package Price : {data.packagepricetotal ? data.packagepricetotal:data.packageprice}/-</div>
  </div>
  <div className="pardesis">
  {data.packageimage ? <img src ={data.packageimage} width="50%"/>:""}
  </div>
 </div>
 <div key={"discodiwane" + key} className="flexchilds" style={{justifyContent: 'flex-end'}}>
  <div className="desi">
  Select Per Person Package <input key ={"dssqwpo" + key} className="disco" type ="number" name={data.id} id ="perperson" min="1" onChange={(e)=>addQ(data.id,e)} value={add[data.id]? add[data.id] :""}/>
  </div>

  <div className="button" onClick={()=>addPerson(data.id)}>Add Person</div>
 </div>
</>
 )
})
}
</div>:""}
</>
)


}
export default Cartpane;