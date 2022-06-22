import { useState } from "react";
import cs from "classnames";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  id: number;
  title: string;
  answer: string;
  showBorder: boolean;
}

const Questions = (props: Props) => {
  const { id, title, answer, showBorder = true } = props;
  const [show, setShow] = useState(false);

  function toggle() {
    setShow((old) => !old);
  }

  return (
    <>
      <div
        className={cs({
          "relative light:bg-white mb-1 mx-auto py-[52px] px-[60px] ": true,
          "border-b-[3px] dark:border-[#3A3C3F]": showBorder,
        })}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="text-3xl font-bold lg:md:text-5xl dark:text-[#3C3C43] !text-opacity-50">
              {id}
            </div>
            <h4 className=" text-text-primary dark:text-white font-bold text-sm lg:md:text-xl lg:md:ml-[52px] ml-5 lg:md:-translate-y-1">
              {title}
            </h4>
          </div>
          <button
            className="bg-black dark:bg-white  lg:md:w-[48px] lg:md:h-[48px] px-3 py-2 lg:md:p-0 text-white !dark:text-black rounded-full font-medium lg:md:text-3xl transition duration-150 ease-in"
            onClick={toggle}
          >
            <i className="fa fa-plus" />
          </button>
        </div>
        {show && (
          <p className="mt-2 text-text-secondary lg:md:text-xl text-sm mx-2 dark:text-[#edf1f8d7] lg:md:ml-[107px]">
            {answer}
          </p>
        )}
      </div>
    </>
  );
};
export default Questions;
