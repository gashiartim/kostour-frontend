import cs from "classnames";

interface Props {
  name: string;
  description: string;
  id: string;
  whatCanYouDo: string;
  open_hours?: string;
  className?: string;
}
const Details = (props: Props) => {
  const { name, description, whatCanYouDo, open_hours, className } = props;
  return (
    <div
      className={cs("relative lg:mt-[425px] -mt-[30px] p-5 lg:p-0", className)}
    >
      <div className="lg:absolute lg:bottom-[250px] ">
        <p className="text-[26px] md:text-[40px] lg:text-[56px]  leading-9  text-white font-bold">
          {name}
        </p>
        {open_hours && (
          <div className="mr-[80px] mt-[15px] text-lg">
            <span className="mr-2 font-light dark:text-white">Open Hours:</span>
            <span className="font-medium dark:text-white"> {open_hours}</span>
          </div>
        )}
        <p className="text-xl mt-[24px] text-white">{description}</p>
      </div>
      {whatCanYouDo && (
        <div className="dark:text-white">
          <h2 className="text-[26px] font-bold mb-[19px]">
            What can you do in {name}?
          </h2>
          <p className="text-[18px] mb-[75px]">{whatCanYouDo}</p>
          <h2 className="text-[26px] lg:hidden  font-bold mb-[19px]">
            About this place
          </h2>
          <p className="text-[18px] lg:hidden">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
