import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInput } from "../../../api/User";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email!")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be more than 6 letters")
    .required("Password is required"),
});
export const useLoginForm = () => {
  return useForm<LoginInput>({
    mode: "all",
    resolver: yupResolver(LoginSchema),
  });
};

export type LoginForm = ReturnType<typeof useLoginForm>;
