import {useState,useEffect} from 'react';
import TagManager from 'react-gtm-module';
const Tagmanageri=(data , tag)=>{
let init;
if(!init){
init = TagManager.initialize({ gtmId: 'GTM-PB3PWCK' });	
}

if(tag && tag !==""){
if(tag === "generate_lead"){
	let currency = "INR";
	let value = data[0].grand;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({event:'generate_lead' , items:{currency , value}});

if(typeof fbq !== 'undefined'){
	fbq('track', 'Lead');

}


}
if(tag === "begin_checkout"){
	if(data && data.length > 0){
let total = 0;
let currency ='INR';
let items = [];
data.map((tdata)=>{
total = +total + (+tdata.packageprice || 0);
items = [...items,{item_id : tdata.packageid || '',item_name: tdata.packagename|| '',price:tdata.packageprice || 0,item_variant:tdata.packagetype || '',quantity : tdata.packageqts || 1}];

})

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({event:'begin_checkout' , items : {total , currency , items}});

if(typeof fbq !== 'undefined'){
	fbq('track', 'InitiateCheckout');
	
}
}
}
if(tag === "new_enquiry"){
	if(data && data.length > 0){
let id = "";
let items = [];
data.map((tdata)=>{
items = [...items,{item_name: tdata.name|| '',email:tdata.email || 0,item_phone:tdata.phone || ''}];
id = tdata.phone || '';
})

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({event:'new_enquiry' , items : {id ,items}});

if(typeof fbq !== 'undefined'){
	fbq('track', 'NewEnquiry');
	
}
}
}


}else{

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

if(typeof fbq !== 'undefined'){
	fbq('track', 'AddToCart');
	
}
}

}


}
export {Tagmanageri}