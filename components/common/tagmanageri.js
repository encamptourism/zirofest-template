import {useState,useEffect} from 'react';
import TagManager from 'react-gtm-module';
const Tagmanageri=(data = null)=>{
TagManager.initialize({ gtmId: 'GTM-PB3PWCK' });

if(data){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({event:'addtocart' , addtocart : data})
}



}
export {Tagmanageri}