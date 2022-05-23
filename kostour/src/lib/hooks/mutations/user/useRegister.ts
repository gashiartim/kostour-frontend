import { useMutation, UseMutationOptions } from "react-query";
import { toast } from "react-toastify";
import {
  LoginRegisterResponse,
  registerUser,
  UserSignupInput,
} from "../../../../api/User";
import { useRouter } from "next/router";

export const useRegister = (
  options?: UseMutationOptions<
    LoginRegisterResponse,
    any,
    UserSignupInput,
    unknown
  >
) => {
  const router = useRouter();

  return useMutation(registerUser, {
    onSuccess: () => {
      toast.success("user-registered-successfully-please-check-your-email");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onError: (e) => {
      toast.error(e.response?.data?.error);
    },
    ...options,
  });
};
