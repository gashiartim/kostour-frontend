
const Banner = () => {
    return (
        <div className="text-gray-800 ">
        <div className="w-full h-full mt-[-150px] sm:mt-[-150px] md:mt-[-150px] lg:mt-[-200px] left-0">
          <img
             src="../../assets/images/about-banner.png"
             alt=""
             className="w-full h-full "
          />         
        </div>    
         <div className="
         h-40 bg-gradient-to-t from-white dark:from-background-dark relative bottom-40 text-center pt-12">                            
             <h2 className="text-5xl leading-[60px] mt-[80px] md:mt-[40px] pb-[25px] font-bold dark:text-white">
                ABOUT US
             </h2>
             <p className="dark:text-white">We are 5 young people from Kosovo who are fascinated by the idea
                 
                  of discovering the beauties of our country through the eyes of others. </p>
         </div>
     </div>
    );
  };
  export default Banner;
  