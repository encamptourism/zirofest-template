import { SocialIcon } from 'react-social-icons';
import Contactform from "./contactform";
const Footer=()=>{
return (
	    <>
        <Contactform/>
	     <div id="footer" className="flex flex-col justify-center my-14">
                <h2 className="text-xl text-center">Contact us</h2>
                <div className="text-center font-semibold text-sm"><a href="mailto:support@encampadventures.com">support@encampadventures.com</a></div>
                <div>
                </div>
                <div className="flex flex-col-4 gap-4 mt-4 mb-10 justify-center">
                <SocialIcon style={{width:'30px',height:"30px"}} url="https://www.facebook.com/encampadventures/"/>
                <SocialIcon style={{width:'30px',height:"30px"}} url="https://www.instagram.com/encampadventures/"/>
                <SocialIcon style={{width:'30px',height:"30px"}} url="https://www.youtube.com/channel/UCKT1ZC-dMCQr3fBTr57rKAQ"/>
                </div>
	     </div>	
	    </>
	    )
}
export default Footer