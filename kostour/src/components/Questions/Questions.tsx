import { Icon } from "../shared/Icon/Icon";

interface Props {
  id: number;
  title: string;
  answer: string;
}

const Questions = (props: Props) => {
  const { id, title, answer } = props;
  return (
    <>
      <div className="relative  w-[80%] bg-white mb-1 mx-auto py-[52px] px-[60px]">
        <div className="flex justify-between items-center">
          <div className="flex items-start">
            <div className="font-bold text-3xl lg:md:text-5xl text-text-FAQnumber">
              {id}
            </div>
            <h4 className=" text-text-primary font-bold text-sm lg:md:text-xl lg:md:ml-[52px] ml-5 lg:md:-translate-y-1">
              {title}
            </h4>
          </div>
          <button className="bg-black  lg:md:w-[48px] lg:md:h-[48px] px-3 py-2 lg:md:p-0 text-white rounded-full font-medium lg:md:text-3xl transition duration-150 ease-in">
            <Icon icon="plus" className="w-[16px] m-auto" />
          </button>
        </div>
        <p
          className="mt-2 text-text-secondary lg:md:text-xl text-sm mx-2 lg:md:ml-[107px]"
          v-if="answerShow"
        >
          {answer}
        </p>
      </div>
    </>
  );
};
export default Questions;
