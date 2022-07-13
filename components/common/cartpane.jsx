import {useState,useEffect} from "react";
import Link from "next/link";
const Cartpane=(props)=>{
const {addtocartdata,setAddtocartdata} = props;
const [cartNumber,setCartnumber] = useState(0);

useEffect(()=>{
if(addtocartdata){
if(addtocartdata.length > 0){
 setCartnumber(addtocartdata.length);   
}

}

},["",addtocartdata])



return (
 <>
{cartNumber && cartNumber > 0 ? 
<div  className="flexcontainer">
<div className="aadga" style={{width:"100%"}}>{cartNumber} items selected.<Link href="/cart"><a className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-1 px-3 text-gray-50 text-sm md:self-start">click here</a></Link></div>
</div>:""}
</>
)


}
export default Cartpane;