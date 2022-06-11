interface Props {
  name: string;
  description: string;
  id: string;
  whatCanYouDo: string;
  open_hours?: string;
}
const Details = (props: Props) => {
  const { name, description, whatCanYouDo, open_hours } = props;
  return (
    <>
      <div className="absolute top-[260px] md:top-[363px] lg:top-[563px] mx-[60px] md:mx-[120px] lg-[185px] ">
        <p className="text-[26px] md:text-[40px] lg:text-[56px]  leading-9  text-white font-bold">
          {name}
        </p>
        {open_hours && (
          <div className="mr-[80px] mt-[15px] text-lg">
            <span className="font-light mr-2 text-white">Open Hours:</span>
            <span className="font-medium text-white"> 08:00 - 20:00</span>
          </div>
        )}
        <p className=" text-xl mt-[24px] text-white">{description}</p>
      </div>
      <div className="text-white container mx-[60px] md:mx-[120px] lg-[185px] mt-[200px] md:mt-[100px] w-3/4">
        <h2 className="text-[26px] font-bold mb-[19px]">Why {name}?</h2>
        <p className="text-[18px] mb-[75px]">{whatCanYouDo}</p>

        <h2 className="text-[26px] font-bold mb-[19px]">About this place</h2>
        <p className="text-[18px]">{description}</p>
      </div>
    </>
  );
};

export default Details;
