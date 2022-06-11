import Image from 'next/image'
import restaurantimg from '../../assets/images/restaurant-banner.png'

const Banner = () => {
 return(
<div className="container">
   <div className="container z-0 mt-[50px] ml-[100px] center">
   <Image
            src={restaurantimg}
            width="1230px"
            height="500px"
           
            alt="card"
            loading="lazy"
            className="rounded-lg"
            />
   </div> 
   <div
      className="text-white z-2 absolute md:max-w-[610] lg:max-w-[920px] xl:max-w-[1230px] mt-[-50px] mx-[150px] sm:px-0"
   >
      <ul className="md:flex font-bold mt-[-80px] mb-[10px] font-large w-[500px]">Name of Restaurant</ul>
      <ul className="md:flex font-bold">
         <li className="mr-[80px] text-lg">
            <span className="font-light mr-2">Location:</span>
            <span className="font-medium"> Name</span>
         </li>
         <li className="mr-[80px] text-lg">
            <span className="font-light mr-2">Open Hours:</span>
            <span className="font-medium"> 08:00 - 20:00</span>
         </li>
      </ul>
   </div>
</div>
 );
};


export default Banner;