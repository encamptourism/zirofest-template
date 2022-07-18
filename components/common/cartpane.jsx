import {useState,useEffect} from "react";
import Link from "next/link";
const Cartpane=(props)=>{
const {addtocartdata,setAddtocartdata} = props;
const [cartNumber,setCartnumber] = useState(0);
const [total,setTotal] = useState(0);
useEffect(()=>{
let totcart = 0;
if(addtocartdata){
if(addtocartdata.length > 0){
 setCartnumber(addtocartdata.length);

addtocartdata.map((data)=>{
 totcart = +totcart + (data.packageprice * data.packageqts);   
});
setTotal(totcart);
}

}

},["",addtocartdata])



return (
 <>
{cartNumber && cartNumber > 0 ? 
<div  className="flexcontainer">
<div className="aadga">
<div style={{fontSize:"0.9rem"}}>{cartNumber} item.</div>
<div style={{fontSize:"0.9rem"}}>Rs.{total} / + Taxes</div>
</div>
<div className="aadga" style={{marginTop:"0.5rem"}}><Link href="/cart"><a className="bg-gradient-to-r from-green-600 to-green-500 rounded-full  px-6 text-gray-50 text-sm md:self-start">Cart</a></Link></div>
</div>:""}
</>
)


}
export default Cartpane;