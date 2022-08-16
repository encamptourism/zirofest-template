import {useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
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
import OtherDetails from "../components/home/otherdetails";
import {useRouter} from 'next/router';
import {Tagmanageri} from "../components/common/tagmanageri";



export default function Home({PackageData,faqdata}) {
const [addtocartdata,setAddtocartdata] = useState([]);
const [addpersona , setAddpersona] = useState({});
const [isloading,setIsloading] = useState(true);
const [removalid , setRemovalid] = useState({});
const {pathname} = useRouter();

useEffect(()=>{ 
let uniqueid = (localStorage.getItem('cartid') && localStorage.getItem('cartid') !=="") ? localStorage.getItem('cartid') : uuidv4();

if(uniqueid !== localStorage.getItem('cartid')){
    localStorage.setItem('cartid' , uniqueid);
}


let personas,predata,parsedata;
if(uniqueid){
predata = localStorage.getItem(uniqueid);
 if(predata){
let maindata = JSON.parse(predata);
  maindata.length > 0 ? maindata.map((data)=>{
   if(data.packageqts){
    personas = {...addpersona,[data.id] : data.packageqts}
   }
    
  }):""
parsedata = JSON.parse(predata);
   setAddtocartdata(JSON.parse(predata));
   setAddpersona(personas);
 }   
}
setIsloading(false);
let removal = {};
parsedata ? parsedata.map((data)=>{
removal = {...removal,[data.packageid] : 1}

}):""
setRemovalid(removal);
Tagmanageri();
},[])

useEffect(()=>{
if(addtocartdata && addtocartdata.length > 0){
let uniqueid = localStorage.getItem('cartid');
localStorage.setItem(uniqueid,JSON.stringify(addtocartdata));
}

},[addtocartdata]);

  return (
       <>
    <Heads pathname={pathname}/> 
    <Header addtocartdata = {addtocartdata} />
    <Topsection/>
    <div className="container mx-auto p-1">
    <LoginSpinner isloading={isloading}/>
    <Pakage packages = {PackageData}
       addtocartdata={addtocartdata}
       setAddtocartdata ={setAddtocartdata}
       addpersona ={addpersona}
       setAddpersona={setAddpersona}
       Tagmanageri={Tagmanageri}

       />
       
      <Addonservices
       packages = {AditionalData}
       addtocartdata={addtocartdata}
       setAddtocartdata ={setAddtocartdata}
       removalid={removalid}
       setRemovalid={setRemovalid}
       Tagmanageri={Tagmanageri}
      />
      <Campsitefacilities/>
      <OtherDetails/>
      <Faq faqdata={faqdata}/>
      <Footer Tagmanageri={Tagmanageri}/>
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
