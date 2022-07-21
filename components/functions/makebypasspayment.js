import adminapi from "../../api/adminapi";
import { v4 as uuidv4 } from 'uuid';
const makeBypassPayment = async (cartdata)=>{
if(Object.keys(cartdata).length > 0){
let amount,isadvance;
    if(cartdata.advance){
    isadvance = "yes";
    }else{
     isadvance = "no";
    }
let uuid = uuidv4();

let datatosave = {
        payment_id:"",
        order_id: uuid,
        signature:"",
        name:cartdata.name,
        contact:cartdata.mobile,
        email:cartdata.email,
        currency: 'INR',
        amount:cartdata.total[0].grand,
        prductdetails:cartdata.packagedetail,
        ordertotal:cartdata.total,
        status:"pending",
        checkindate:cartdata.checkindate,
        isadvance:isadvance
      };
   try{
     const localresponse = await adminapi.post("/addpayment",JSON.stringify(datatosave));
       if(localresponse.data._id !== ""){
        return localresponse.data;
       
       }else{
        alert("Data not save Please try again after a while");
        return
       }

   }catch(e){
    console.log(e);
    alert("Data not save Please try again after a while");
    return
   }  

}else{

alert("Data not found");
return
}

}
export {makeBypassPayment};