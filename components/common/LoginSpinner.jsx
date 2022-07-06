const LoginSpinner=(props)=>{
const {isloading} = props;

return (
	    <>
{isloading && isloading === true ? 
<div style={{position:"fixed",width:"100%",display:'flex',justifyContent:'center',height: '85vh',zIndex:'999',backgroundColor:"rgba(255,255,255,0.5)",marginTop:"-1rem",left:"0"}}>
<div  className="flex justify-center items-center flex-col">
  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span className="visually-hidden text-5xl text-grey-400">Loading...</span>
  </div>
  <div className="text-3xl font-semibold text-grey-800">Please Wait...</div>
</div></div>:""}
	    </>
	   )

}
export default LoginSpinner;