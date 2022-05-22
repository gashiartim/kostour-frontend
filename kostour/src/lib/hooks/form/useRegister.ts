import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSignupInput } from "../../../api/User";

export interface UserSignupFields extends UserSignupInput {
  location: string;
  full_name: string;
}
export const UserSignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email!")
    .required("Email is required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  password: Yup.string()
    .min(6, "Password should be more than 6 letters")
    .required("Password is required"),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .min(6, "Confirm password should be more than 6 letters")
    .required("Confirm password is required"),
});

export const useUserSignupForm = () => {
  return useForm<UserSignupFields>({
    mode: "all",
    resolver: yupResolver(UserSignupSchema),
  });
};

export type UserSignupForm = ReturnType<typeof useUserSignupForm>;