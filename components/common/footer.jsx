import { SocialIcon } from 'react-social-icons';
const Footer=()=>{
return (
	    <>
	     <div id="footer" className="my-14">
                <h2  className="text-xl text-center">Contact us</h2>
                <hr className="mt-2 mb-5"/>
                <div className="container" style={{margin:"0 auto"}}>
                <div className="text-center font-semibold text-sm">support@encampadventures.com</div>
                 <div className="text-center font-semibold text-sm">+91-8876698046</div>
                <div></div>
                </div>
        <div className="flex flex-col-4 gap-4 justify-center">
        <SocialIcon style={{width:'30px',height:"30px"}} url="https://www.facebook.com/encampadventures/"/>
        <SocialIcon style={{width:'30px',height:"30px"}} url="https://www.instagram.com/encampadventures/"/>
        <SocialIcon style={{width:'30px',height:"30px"}} url="https://www.youtube.com/channel/UCKT1ZC-dMCQr3fBTr57rKAQ"/>
        <SocialIcon style={{width:'30px',height:"30px"}} label="google" url="https://tinyurl.com/yx8nblk6"/>
        </div>
	     </div>	
	    </>
	    )
}
export default Footer