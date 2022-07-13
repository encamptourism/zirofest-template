import {useState,useEffect} from "react";
import Image from 'next/image';
import Heads from "../components/common/Heads";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Cartpane from "../components/common/cartpane";
import Topsection from "../components/home/topsection";
import Pakage from "../components/home/pakage";
import Addonservices from "../components/home/addonservices";
import {PackageData} from "../components/home/packagedata/packagedata";
import {AditionalData} from "../components/home/addondata/additional";
import LoginSpinner from "../components/common/LoginSpinner";
import Faq from "../components/faq/Faq";
import {Datafaq} from "../components/faq/Datafaq";
import Campsitefacilities from "../components/home/campsitefacilites"
import OtherDetails from "../components/home/otherdetails"

export default function Home({PackageData,faqdata}) {
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
    <Topsection/>
    <div className="container mx-auto p-1">
    <LoginSpinner isloading={isloading}/>
      <Pakage packages = {PackageData}
       addtocartdata={addtocartdata}
        setAddtocartdata ={setAddtocartdata}/>
      <Campsitefacilities/>
      <Addonservices
       packages = {AditionalData}
       addtocartdata={addtocartdata}
       setAddtocartdata ={setAddtocartdata}
      />
      <OtherDetails/>
      <Faq faqdata={faqdata}/>
      <Footer/>
     </div>
     <Cartpane addtocartdata = {addtocartdata} setAddtocartdata ={setAddtocartdata}/>
    </>
  )
}



export async function getServerSideProps() {
 const data = PackageData;
 let ds = [];
let ss = await Datafaq();
 if(ss.length > 0){
ds = ss.filter(
(item) => item.category.toLowerCase().indexOf("zero".toLowerCase()) > -1
)
 
}

 return { props: { faqdata:ds,PackageData:data, } }
}
