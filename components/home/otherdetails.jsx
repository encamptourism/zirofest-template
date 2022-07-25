import {useState} from "react";
const OtherDetails=()=>{
const [show,setShow] = useState(false);
const readmore=()=>{
  setShow(!show);
}
return (
	<>


<div className="mt-10 px-3">
    <h1 className="text-center md:text-left text-2xl uppercase">Campground Rules</h1>
    <hr className="mt-2 mb-5 border-slate-400"/>
    <div className="container"> 
    <li style={{maxWidth:"1400px",textAlign: 'left',margin:"0 auto"}}><span className="font-bold">Your decency shall be our pride:</span> We request you to not get involved in any anti-social or unsolicited activities during the trip and at the campsite. The organizers reserve the right to withdraw all of your services in such cases with deep regrets.</li><br/>
    <li style={{maxWidth:"1400px",textAlign: 'left',margin:"0 auto"}}><span className="font-bold">We (Humans) are nothing in front of Nature:</span> The organizers are in no way obligated / responsible for any refund arising out of any natural or man-made calamities which are beyond our control. Rains and muddy fields are a thing at Ziro. Request you to book with the right expectations set.</li><br/>
    
    {show ?
    <> 
    <li style={{maxWidth:"1400px",textAlign: 'left',margin:"0 auto"}}><span className="font-bold">Furnish documents at Check-in:</span> Kindly carry valid ID proof and a payment receipt while on the trip. We appreciate mobile receipts, so does nature.</li><br/>
    <li style={{maxWidth:"1400px",textAlign: 'left',margin:"0 auto"}}><span className="font-bold">Accommodation:</span> Tents are on a sharing basis, equipped with sleeping mats and bags. In case you need anything extra, please be patient with our team members.</li><br/>
    <li style={{maxWidth:"1400px",textAlign: 'left',margin:"0 auto"}}><span className="font-bold">Patience is solicited:</span> Ours is a campsite and not a resort. We request you to please be patient with our team members in case you need them to help out with anything. They are catering to 100+ guests at the campsite and someone else might be needing their immediate attention as well.</li><br/>
    <li style={{maxWidth:"1400px",textAlign: 'left',margin:"0 auto"}}><span className="font-bold">Damages are chargeable:</span> In case of any damages to the camp material, the guest will be liable to pay the price in full along with the cost of Rs 1,000/- as a logistics fee to the organizers. We know only 1 in a 100 turn out to be a nuisance and this condition is explicitly mentioned for them.</li><br/>
    <li style={{maxWidth:"1400px",textAlign: 'left',margin:"0 auto"}}><span className="font-bold">Respect & Love:</span> Please be respectful of the local communities and their traditions. We are their guests and any disrespect shown towards them is unacceptable. People are usually sweet and kind in Ziro, and we are confident you will make good friends with the locals. Always remember, you get what you give.</li><br/>
    <li style={{maxWidth:"1400px",textAlign: 'left',margin:"0 auto"}}><span className="font-bold">Ignore at your own risk:</span> Please read all the information carefully. You can also call / mail us to understand all the Campground Rules (terms and conditions.)</li><br/>
    <li style={{maxWidth:"1400px",textAlign: 'left',margin:"0 auto"}}><span className="font-bold">Tourism infrastructure:</span> The tourism infrastructure in the mentioned destinations is not very developed and one should not expect or compare it with the standards of plains & other developed destinations. The roads to camp could be slightly muddy and we recommend that you carry the right clothing and shoes for this wonderful adventurous experience. If these experiences are not your kind, then you might be coming to the wrong place.</li><br/>
    <li style={{maxWidth:"1400px",textAlign: 'left',margin:"0 auto"}}><span className="font-bold">Transportation:</span> Transfers from Naharlagun Railway Station to Ziro will be in a Tata Sumo on a sharing basis of 9-10 passengers per vehicle. In case you need a more comfortable vehicle for transfer you can connect with our team and they will help you get a private vehicle with a driver to chauffeur you for an added cost.</li><br/>
    <li style={{maxWidth:"1400px",textAlign: 'left',margin:"0 auto"}}><span className="font-bold">Rare occurrences:</span> Management has the right to alter the itinerary, and further holds all rights to cancel trips in case of unavoidable circumstances.</li><br/> 
    </>
    :""}
    <div id ="sustainability" className="text-xl text-green-500" style={{width:"100%",textAlign:"right",fontWeight: '600',cursor:"pointer",paddingRight: '3vw'}} onClick={()=>readmore()}>{show ? 'Read Less' : 'Read More'}</div>
  
      
    </div>
  </div>

<div id="sustainabilitymobile" className="mt-10 px-3">
    <h1 className="text-center md:text-left text-2xl uppercase">A Pledge To Sustain</h1>
    <hr className="mt-2 mb-5 border-slate-400"/>
    <div className="container px-1">
    <p>With a focus on transforming tourism through a responsible travel tech platform, which calculates carbon emission, promotes conscious reduction and provides offset options to make every travel itinerary nature-positive, we at Encamp, stand by an environment-first approach in design and operation. We subscribe to practices that benefit not only our customers but also local communities and the environment.</p>
    <p id="about" className="pt-3">We offer means to offset emissions, by supporting carbon offset programs in order to make travel a low carbon footprint experience. We implement measurement and reduction practices using technology intervention mixed with physical projects involving afforestation projects and other nature-based solutions. As a strong commitment toward greener tourism, we aim to enable each Encamper to leave every place better than they found it.</p> 
    <p className="pt-3 text-sm italic text-gray-600">Encamp Adventures is supported by UNDP, SAP ARIBA, CISCO, and HDFC to enable a behavioural change and drive climate action.</p> 
    </div>
  </div>

  <div id="aboutmobile" className="mt-10 px-3">
    <h1 className="text-center md:text-left text-2xl uppercase">About Encamp</h1>
    <hr className="mt-2 mb-5 border-slate-400"/>
    <div className="container px-1">
    <p>Started in 2018, Encamp Adventures has been providing it’s services at ZIRO since 2018 and has been a pivotal force in driving, promoting and inspiring an environment-first approach in tourism across Northeast India.</p>
    <p className="pt-3">Working closely with local guides, villagers and camp partners, Encamp ensures uncompromised experiences whilst exploring the wilderness of the region. With packages spanning from outdoor recreational activities, adventure sports, leisurely activities to camping services in the most exotic locations, Encamp delivers the best standard of services with unrivalled amenities and experiences.</p> 
    <p className="pt-3 text-sm italic text-gray-600">Encamp Adventures is supported by UNDP, SAP ARIBA, CISCO, and HDFC to enable a behavioural change and drive climate action.</p> 
    </div>
  </div>
 	
	</>)

}
export default OtherDetails;