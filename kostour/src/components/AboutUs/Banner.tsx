
import aboutimg from '../../assets/images/about-banner.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="text-gray-800 ">
        <div className="w-full h-full mt-[-150px] sm:mt-[-150px] md:mt-[-150px] lg:mt-[-200px] left-0">
        <Image
            src={aboutimg}
            width=""
            height=""
            objectFit="cover"
            alt="card"
            loading="lazy"
            className=""
            />         
        </div>    
        <div className="
        h-40 bg-gradient-to-t from-black from-background-dark relative bottom-40 text-center pt-12">                            
            <h2 className="text-5xl leading-[60px] mt-[80px] md:mt-[40px] pb-[25px] font-bold text-white">
                     ABOUT US
            </h2>
            <p className="text-white">We are 5 young people from Kosovo who are fascinated by the idea </p>
            <p className="text-white sm:invisible md:visible">of discovering the beauties of our country through the eyes of others. </p>
        </div>
     </div>
    );
  };
  export default Banner;
  