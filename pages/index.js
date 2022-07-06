import {useState,useEffect} from "react";
import Image from 'next/image';
import Heads from "../components/common/Heads";
import Header from "../components/common/header";
import Cartpane from "../components/common/cartpane";
import Topsection from "../components/home/topsection";
import Pakage from "../components/home/pakage";
import Addonservices from "../components/home/addonservices";
import {PackageData} from "../components/home/packagedata/packagedata";
import {AditionalData} from "../components/home/addondata/additional";
import LoginSpinner from "../components/common/LoginSpinner";

export default function Home({PackageData}) {
const [addtocartdata,setAddtocartdata] = useState([]);
const [isloading,setIsloading] = useState(true);
useEffect(()=>{
let uniqueid = localStorage.getItem('cartid');

if(uniqueid){
 let predata = localStorage.getItem(uniqueid);

 if(predata){
   setAddtocartdata(JSON.parse(predata));
 }   
}
setIsloading(false);
},[])

  return (
    <>
    <Heads/> 
      <Header addtocartdata = {addtocartdata} />
    <div className="container mx-auto p-5">
    <LoginSpinner isloading={isloading}/>
      <Topsection/>
      <Pakage packages = {PackageData}
       addtocartdata={addtocartdata}
        setAddtocartdata ={setAddtocartdata}/>
      <Addonservices
       packages = {AditionalData}
       addtocartdata={addtocartdata}
       setAddtocartdata ={setAddtocartdata}
      />
     </div>
     <Cartpane addtocartdata = {addtocartdata} setAddtocartdata ={setAddtocartdata}/>
    </>
  )
}


export const getStaticProps = async () => {
    const data = PackageData;
return {
  props:{
  PackageData:data,
}
}
  }

