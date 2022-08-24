import adminapi from "../../api/adminapi";
import {useState,useEffect} from "react";

const Login=()=>{
useEffect(()=>{
const logincheck=async()=>{
try{
const response = await adminapi.post("/login",JSON.stringify({email:'website@encamp.com',password:'Website@#123'}));

if(response.data.sucess){
	let tokenset =await localStorage.setItem("userwebsite",response.data.token)
	let nameset = await localStorage.setItem("name",response.data.user.name)
	let roleset = await localStorage.setItem("role",response.data.user.role)
	let emailset = await localStorage.setItem("email",response.data.user.email)
}
}catch(e){
	alert(e);
}


}
logincheck();

},[])

return (<></>)

}
export default Login;