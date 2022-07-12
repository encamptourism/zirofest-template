import Link from 'next/link'
const Topsection=()=>{

return (
	<>      
        <div className="md:flex md:flex-row mt-14">
            <div className="md:w-2/5 flex flex-col justify-center items-center">
                <h1 className="font-serif text-3xl text-gray-600 text-center md:self-start md:text-left">Experience Ziro Festival of Music</h1>
                <h2 className="uppercase text-gray-500 mb-2 text-center md:self-start md:text-left">with Encamp Adventures</h2>
                <p className=" text-gray-500 mb-2 text-center md:self-start md:text-left">Tempor culpa Lorem nostrud elit ea non ullamco cillum aliquip.</p>
                <a href="#pakage" className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-8 text-gray-50 text-xl uppercase md:self-start mt-4">Book Now</a>
            </div>
            <div className="md:w-3/5 mt-5">
                <img src="./images/hero_image.png" alt="" className="w-full rounded-xl"/>
            </div>
        </div>
	</>
	)
}
export default Topsection;