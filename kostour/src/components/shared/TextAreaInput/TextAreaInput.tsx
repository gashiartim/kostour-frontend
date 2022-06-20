import cs from "classnames";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { UseFormRegister } from "react-hook-form";
import { IconDefinition } from "../Icon/Icon.generated";

export interface InputProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  name: string;
  register?: UseFormRegister<any>;
  error?: string;
  touched?: boolean;
  inputClassName?: string;
  icon?: IconDefinition;
  errorClassName?: string;
  hiddenLabel?: boolean;
  labelClassName?: string;
}

const TextAreaInput = (props: InputProps) => {
  const {
    className,
    register,
    label,
    name,
    error,
    touched,
    id,
    inputClassName,
    errorClassName,
    labelClassName,
    hiddenLabel = true,
    ...rest
  } = props;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={
          hiddenLabel ? "sr-only" : `text-sm font-medium mb-2 ${labelClassName}`
        }
      >
        {label}
      </label>
      <textarea
        id={id}
        className={cs(
          "bg-white leading-4 relative block w-full px-4 py-3.5 border-[#10356D] border-1 placeholder-gray text-xs  text-black rounded focus:outline-none focus:border-[#10356D] ",
          inputClassName,
          { "border-red-400": !!error }
        )}
        {...register?.(name)}
        {...rest}
      />
      {error && (
        <pre
          className={cs(
            "h-2 m-0 ml-2 mt-0.5 text-xs font-sans text-red-500",
            errorClassName
          )}
        >
          {error}
        </pre>
      )}
    </div>
  );
};

export default TextAreaInput;
