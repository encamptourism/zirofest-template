import {useState,useEffect} from "react";
import Link from 'next/link'
const Header=(props)=>{
const {addtocartdata} = props;
const[cartnumber,setCartnumber] = useState(0);
useEffect(()=>{
if(addtocartdata){
if(addtocartdata.length > 0){
 setCartnumber(addtocartdata.length);   
}

}

},["",addtocartdata])

	return (
             <>
             <div className="grid content-around" style={{position:'fixed',backgroundColor:"white",width:"100%",top:"0",minHeight: '80px',margin: '0 auto',padding:"10px 20px",boxShadow:"0.5px 2px 3px rgba(0,0,0,0.2)",zIndex:"999"}}>
            <div  className="md:flex md:flex-row md:justify-between text-center">
            <div className="flex flex-row justify-center">
                <div className="bg-gradient-to-r from-purple-600 to-red-600 w-10 h-10 rounded-lg"></div>
                <Link href="/"><h1 className="text-3xl text-gray-500 ml-2">#GoZeroAtZiro</h1></Link>
            </div>
            <div className="mt-2 leading-9">
                <Link href="/">
                <a  className="text-gray-700 hover:text-purple-600 p-4">Home</a>
                </Link>
                <a href="" className="text-gray-700 hover:text-purple-600 p-4">Our Sustainability Pledge</a>
                <a href="https://encampadventures.com/about" target="_new" className="text-gray-700 hover:text-purple-600 p-4">About Encamp</a>
                <Link href="/cart">
                <a  className="bg-purple-600 text-gray-50 hover:bg-purple-700 py-1 px-5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Cart({cartnumber})
                </a>
                      </Link>
            </div>
        </div>
        </div>
        <div className="my-40 md:my-20 sm:my-20"></div>
             </>
		);
}

export default Header;