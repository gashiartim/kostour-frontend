import cs from "classnames";

interface Props {
  className?: string;
}

export const Spinner = (props: Props) => {
  return (
    <svg
      className={cs("w-5 h-5 text-white animate-spin !m-auto", props.className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="m-auto opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

// className={cs(
//   "bg-white leading-4 relative block w-full px-5 py-2.5 border-lightGray border-2 placeholder-gray text-xs  text-black rounded-xl focus:outline-none focus:border-orange  focus:z-10 ",
//   inputClassName
// )}
