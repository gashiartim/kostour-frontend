
import Header from "../../src/components/Header/Header";
import Banner from "../../src/components/AboutUs/Banner";
import Content from "../../src/components/AboutUs/Content";
import Footer from "../../src/components/Footer/Footer";
//import forest from '../../src/assets/icons/forest.png' 


const AboutUs = () => {
  return (
    <div className="bg-black">
      <Header />
      <Banner />
      <Content />
      <Footer />
      <div>
      {/* <Image
          src={forest}
          
          objectFit="fill"
          layout="responsive"
          className=" md:blur-0 blur-[5px] object-cover md:max-h-full h-screen w-full"
          alt="login"
        /> */}
        {/* <Image
          src={forest}
          alt="okkk"
          width={500}
          height={500}
        /> */}
        </div>
    </div>
  );
};

export default AboutUs;
