import adminapi from "../../api/adminapi.js";
const Datafaq=async()=>{
let data = [];
const response = await adminapi.get("/faqs");
data = response.data;
return data;
}

export  {Datafaq};