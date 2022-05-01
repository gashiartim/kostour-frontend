import cs from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Spinner } from "../Spinner/Spinner";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className, children, loading, ...rest } = props;
  return (
    <button
      className={cs(
        "w-full text-sm flex items-center justify-center py-3.5 px-4 font-medium rounded text-white bg-[#10356D] hover:bg-darkPrimary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-300 disabled:cursor-not-allowed",
        className
      )}
      {...rest}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
