import {useState,useEffect} from "react"
import {Datafaq} from "./Datafaq"
export const Faqs=({data , id})=>{
 const [sign , setSign] = useState({plus:'&#10009;',cross:'&#10006;'})
 const [tooglew , setTogglew] = useState(false);
	const styles = {
		question:{fontSize:"1.1rem",fontWeight:"500",paddingBottom: '15px'},
		answer:{fontSize:"1rem",fontWeight:"300",paddingLeft:"10px",paddingBottom: '20px'},
		plus:{color:"green",marginLeft: '5px',fontSize:"1.2rem",float:"right",cursor:"pointer"}
	}
const toggle=(e)=>{
	setTogglew((prev)=>!prev);

}

return(
	<> 
         <div id={"as" + id} key={"as" + id} style={{borderRadius:"10px",borderBottom:"0.2px solid grey",marginBottom:"15px"}} >
               <div id={"asd" + id} key={"asd" + id} className="question" style={styles.question} >
                    <span key={"asds" +id} style={{color:"green",marginRight: '10px'}}>Q. 
                    </span> 
                      {data.question} 
                       <span id={"asfd" + id} key={"asfd" + id} style={styles.plus}
                          dangerouslySetInnerHTML={{__html: !tooglew ? sign.plus : sign.cross}} onClick={(e)=>toggle(e)}>
                       </span>
               </div>

               { tooglew && <div id={id} key={"asdss" +id} className="answer" style={styles.answer}>{data.answer}</div>}             
         </div>	
	</>
	)
}


const Faq=(props)=>{
const {faqdata} = props;
const [faqss,setFaqss] = useState([]);
useEffect(()=>{
setFaqss(faqdata);
},[])  

return(
<div className="px-3">
<h2 className="text-xl  px-2">FAQs</h2>
<hr className="mt-2 mb-10"/>
<div className="container my-10" style={{maxWidth:"1400px",margin:"0 auto"}}>
 <div className="flex flex-row justify-between">

</div>
{(faqss || faqss.length > 0) ? faqss.map((d,id)=>{
	return <Faqs key={"sdsd" + id} data={d} id={id}/>		
}):""}
</div>
</div>
)

}

export default Faq;