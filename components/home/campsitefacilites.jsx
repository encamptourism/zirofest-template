import Image from 'next/image';
const Campsitefacilities=()=>{
const styles={
	circle:{width:"48px",height:"50px",borderRadius:"50%",margin:"0 auto",cursor:"pointer",cursor:"pointer",boxShadow:"1px 2px 3px grey",padding:"3px"}
}

return (
<>
 <div className="my-10">
  <h2 className="text-xl my-10 px-5">Campsite Facilities</h2>
  <hr className="mt-1 mb-10"/>
  <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-evenly">
 
 <div id="about"  className="text-center"><div style={styles.circle}><Image alt="encamp" src="/images/icons/JamSessions.png" layout='responsive' width={60} height={60}/></div><div><h3 className="my-5">Jam Sessions</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="/images/icons/Hiking.png" layout='responsive' width={60} height={60}/></div><div><h3 className="my-5">Hiking</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="/images/icons/Bonfire.png" layout='responsive' width={60} height={60}/></div><div><h3 className="my-5">Bonfire</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="/images/icons/DryWetWasteDustbins.png" layout='responsive' width={60} height={60}/></div><div><h3 className="my-5">Dry &amp; Wet Waste Dustbins</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="/images/icons/Budcollectioncentre.png" layout='responsive' width={60} height={60}/></div><div><h3 className="my-5">Bud Collection Centre</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="/images/icons/ClotheslinewithClips.png" layout='responsive' width={60} height={60}/></div><div><h3 className="my-5">Clothesline with Clips</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="/images/icons/Toiletries.png" layout='responsive' width={60} height={60}/></div><div><h3 className="my-5">Toiletries</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="/images/icons/CleanDrinkingWater.png" layout='responsive' width={60} height={60}/></div><div><h3 className="my-5">Hot &amp; Cold Drinking Water</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="/images/icons/HygienicandConcreteWashrooms.png" layout='responsive' width={60} height={60}/></div><div><h3 className="my-5">Hygienic Washrooms</h3></div></div>
 <div className="text-center"><div style={styles.circle}><Image alt="encamp" src="/images/icons/SnackBar.png" layout='responsive' width={60} height={60}/></div><div><h3 className="my-5">24/7 Campteen For Food All Day</h3></div></div>
</div>
</div>

</>
);

}
export default Campsitefacilities;