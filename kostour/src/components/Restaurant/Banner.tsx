const Banner = () => {
 return(
    <div className="text-white bottom-0 left-0 z-10 px-5 py-5 lg:px-[40px] lg:py-[26px]">
      <h2 className="font-medium text-5xl leading-[60px] mt-[13px]">
         Name
      </h2>

      <ul className="md:flex">
         <li className="mr-[80px] text-sm">
            <span className="font-light mr-2">Location:</span>
            <span className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia error, nihil in beatae itaque iure illo unde et sint, explicabo deleniti officiis tempora nobis sunt distinctio ab voluptate vel.</span>
         </li>
         <li className="mr-[80px] text-sm">
            <span className="font-light mr-2">Open Hours:</span>
            <span className="font-medium"> 08:00 - 20:00</span>
         </li>
      </ul>
   </div>
 );
};


export default Banner;