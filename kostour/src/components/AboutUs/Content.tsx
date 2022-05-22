import forest from '../../assets/icons/forest.png' 
import AboutUs from '../../../pages/About';
//import forest from 'forest.png'
const Content = () => {
  return (
    <div className="container mt-[112px] text-gray-500">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-around gap-9 ">
        <div>
            <h1 className="text-3xl text-white pb-[20px] font-bold text-center md:text-left">What we do</h1>
            <p>So, we took the initiative to bring KosTour, a website that brings you some of Kosovo's many beautiful places. </p>
        </div>
        <div>
            <h1 className="text-3xl text-white pb-[20px] font-bold text-center md:text-left">How it works</h1>
            <p>With this, we invite you to come and visit and experience the beauty and magic of mountain places through hiking and skiing adventures.</p>
        </div>
        <div>
            <h1 className="text-3xl text-white pb-[20px] font-bold text-center md:text-left">Our message</h1>
            <p>Do not leave without exploring the art, culture and nightlife of Kosovo.
            KosTour is here for gyou, to make your next travel destination easier.
            </p>
        </div>    
        </div>
        <h1 className="text-center text-5xl mt-[200px] mb-[75px] font-bold text-white">Why should I visit Kosovo ?</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-around gap-9 mt-[80px] mb-[180px]">
        <div>
            <img src="../../src/assets/icons/forest.png" className="inline pb-[31px] mx-[180px] sm:mx-[300px] md:mx-0"/>
            <h1 className="text-3xl text-white pb-[10px] font-bold text-center md:text-left">Full of forest</h1>
            <p>More than 40% of the land in Kosovo is forestry and woodland.</p>
        </div>
        <div>
            <img src="../../assets/images/City.png" className="inline pb-[31px] mx-[180px] sm:mx-[300px] md:mx-0"/>
            <h1 className="text-3xl text-white pb-[10px] font-bold text-center md:text-left">Visa Free</h1>
            <p>Most of the countries don’t need to have a Visa to visit Kosovo.</p>
        </div>
        <div>
            <img src="../../assets/icons/climate.png" className="inline pb-[31px] mx-[180px] sm:mx-[300px] md:mx-0"/>
            <h1 className="text-3xl text-white pb-[10px] font-bold text-center md:text-left">Perfect Climate</h1>
            <p>Summers in Kosovo are really warm, perfect conditions.
            </p>
        </div>
        <div>
            <img src="../../assets/icons/people.png" className="inline pb-[31px] mx-[180px] sm:mx-[300px] md:mx-0"/>
            <h1 className="text-3xl text-white pb-[10px] font-bold text-center md:text-left">Young People</h1>
            <p>More than 50% of the population is under 25, full of love and energy.
            </p>
        </div>  
           
        </div>

        {/* <div>
        <Image
          src={"forest"}
          alt="okkk"
          width={500}
          height={500}
        />
        </div> */}

        

        {/* <Image
          src={forest}
          objectFit="fill"
          layout="responsive"
          className=" md:blur-0 blur-[5px] object-cover md:max-h-full h-screen w-full"
          alt="sdi"
        /> */}

        <div>
            <img src="forest.png" />
            <img src="../../../src/assets/images/City.png" />
        </div>
        


    </div>
  );
};
export default Content;
