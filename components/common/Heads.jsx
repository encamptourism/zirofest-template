import Head from 'next/head';
const Heads =(props)=>{
  const {pathname ,paymentdetails} = props;
	return(
      <Head>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Ziro Festival of Music : {pathname && pathname === "/" ? "Encamp Adventures Pvt. Ltd.": (paymentdetails && paymentdetails !=="") ? 'Booking Details' : pathname.replace(/\//g, "")} </title>
    <meta name="description" content="If you want to travel in Northeast India, talk to Encamp Adventures - the leading camping service providers in Assam, Meghalaya, Arunachal Pradesh, Nagaland; we offer customized trips in the region."/>
    <meta name="keywords" content="Encamp Adventures, camping, camping provider, luxury camping, camping places, camping trip, adventure, adventure tourism, trekking, trekking in india, north east india tourism, kayaking, cliff jumping, recreational activities"/>
    <meta property="og:title" content="Ziro Festival of Music : Encamp Adventures" />
    <meta property="og:description" content="Experience the multiverse of music, culture, joy, and eco-friendly living at Ziro only with Encamp." />
    <meta property="og:image" content="/images/mobile.jpg" />
    <link rel="icon" type="image/png" href="/images/icons/favicon-32x32.png" sizes="32x32"/>
    </Head>
          )
}
export default Heads