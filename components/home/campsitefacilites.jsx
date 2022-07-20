import Image from 'next/image';
const Campsitefacilities=()=>{
const styles={
	circle:{width:"60px",height:"60px",borderRadius:"50%",margin:"0 auto",cursor:"pointer",cursor:"pointer",boxShadow:"1px 2px 3px grey",padding:"3px"}
}

return (
<>
 <div className="my-10">
  <h2 className="text-xl my-10 px-5">Campsite Facilities</h2>
  <hr className="mt-1 mb-10"/>
  <div className="grid grid-cols-3 md:grid-cols-7 gap-4 justify-evenly">
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/external-lylac-kerismaker/96/000000/external-Welcome-Drink-hotel-lylac-kerismaker.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Welcome Drink</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/emoji/96/000000/guitar-emoji.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Jam Sessions</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/fluency/96/000000/film-reel.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Movies Under The Stars</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/color/96/000000/trekking.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Trekking</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-yoga-fitness-gym-justicon-flat-justicon.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Yoga &amp; Reiki Sessions</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-bonfire-autumn-season-justicon-lineal-color-justicon.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Bonfire</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-dustbin-nature-and-ecology-smashingstocks-circular-smashing-stocks.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Dry &amp; Wet Waste Dustbins</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-ashtray-casino-flaticons-lineal-color-flat-icons.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Bud Collection Centre</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/color/96/000000/drying-clothes.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Clothesline with Clips</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-toiletries-camping-flaticons-lineal-color-flat-icons-5.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Toiletries like soap, shampoo, handwash, toothpaste &amp; detergent</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/external-filled-outline-wichaiwi/64/000000/external-drinking-water-services-business-filled-outline-wichaiwi.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Hot &amp; Cold Drinking Water</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-hygienic-furniture-and-home-decor-vol2-victoruler-linear-colour-victoruler.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Hygienic Washrooms</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/000000/external-plastic-plastic-pollution-photo3ideastudio-flat-photo3ideastudio-1.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">Dry Plastic Collection Unit</h3></div></div>
 <div  id="about" className="text-center"><div style={styles.circle}><Image alt="encamp" src="https://img.icons8.com/bubbles/50/000000/last-24-hours.png" layout='responsive' width={80} height={80}/></div><div><h3 className="my-5">24/7 Campteen For Food All Day</h3></div></div>
</div>
</div>

</>
);

}
export default Campsitefacilities;