import { login ,LoginInput, LoginRegisterResponse} from "../../../../api/User";
import { useMutation, UseMutationOptions } from "react-query";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../context/AuthContext/AuthContext";

export const useLogin = (
  options?: UseMutationOptions<LoginRegisterResponse, any, LoginInput, unknown>
) => {
  const authCtx = useAuthContext();
  return useMutation(login, {
    onSuccess: (res) => authCtx.login(res.user),
    onError: (e) => {
      toast.error(e.response?.data?.error);
    },
    ...options,
  });
};