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
 totcart = +totcart + (data.packageqts ? data.packageprice * data.packageqts : data.packageprice);   
});
setTotal(totcart);
}else{
   setCartnumber(0); 
   setTotal(0) 
}

}

},["",addtocartdata])



return (
 <>
{cartNumber && cartNumber > 0 ? 
<div  className="flexcontainer">
<div className="aadga">
<div style={{fontSize:"0.8rem"}}>{cartNumber} item</div>
<div style={{fontSize:"0.9rem"}}>Rs.{total}/ + Taxes</div>
</div>
<div className="aadga"><Link href="/cart"><a className="bg-gradient-to-r from-green-600 to-green-500 rounded-md mt-5  py-2 px-5 text-gray-50 text-sm md:self-start">View Cart</a></Link></div>
</div>:""}
</>
)


}
export default Cartpane;