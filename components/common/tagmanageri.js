import {useState,useEffect} from 'react';
import TagManager from 'react-gtm-module';
const Tagmanageri=(data)=>{
TagManager.initialize({ gtmId: 'GTM-PB3PWCK' });

if(data && data.length > 0){
let total = 0;
let currency ='INR';
let items = [];
data.map((tdata)=>{
total = +total + (+tdata.packageprice || 0);
items = [...items,{item_id : tdata.packageid || '',item_name: tdata.packagename|| '',price:tdata.packageprice || 0,item_variant:tdata.packagetype || '',quantity : tdata.packageqts || 1}];

})

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({event:'add_to_cart' , items : {total , currency , items}});
}



}
export {Tagmanageri}