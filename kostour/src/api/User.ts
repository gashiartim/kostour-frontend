import { apiRequest } from "./Api";


export interface IProfile {
  email: string
first_name: string
id:string
last_name: string
role: string
}

export interface User {
  user: IProfile;
  // access_token?: string;
}
export interface LoginRegisterResponse {
  user: User;
  access_token:string
}

export interface RegisterInput {
  first_name: string;
  last_name: string;
  password_confirm:string
  email: string;
  password: string;
  phone:string
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface FacebookLoginInput {
  email: string;
  password: string;
}

export interface ForgotPasswordInput {
  email: string;
}

export interface SuccessResponse {
  message: string;
}

export interface IAppReviewInput {
  score: number;
  description: string;
}

export const register = async (data: RegisterInput) =>
  apiRequest<RegisterInput, LoginRegisterResponse>(
    "post",
    "api/register",
    data
  );

export const login = async (data: LoginInput) =>
  apiRequest<LoginInput, any>("post", "auth/login", data);

export const loginWithFacebook = async (access_token: string) =>
  await apiRequest<FacebookLoginInput, LoginRegisterResponse>(
    "get",
    "social/facebook-login",
    undefined,
    undefined,
    {
      access_token,
    }
  );



export interface UserSignupInput {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  password: string;
  password_confirm: string;

}

export interface ReviewResponse {
  score: number;
  description: string;
  user_id: string;
  event_id: string;
  deal_id: string;
  id: string;
  use: boolean;
  created_at: string;
}

export interface UserDetailsResponse {
  profile: IProfile;
}

export const getUserDetails = async () =>
  apiRequest<null, UserDetailsResponse>("get", "users/me");

export const forgotPassword = async (data: ForgotPasswordInput) =>
  apiRequest<ForgotPasswordInput, SuccessResponse>(
    "post",
    "auth/forgot-password",
    data
  );



export interface UserUpdateResponse {
  success: string;
  user: IProfile;
}
export interface IUpdateUser {
  id: string;
  file?: FormData;
  description?: string;
}

export const updateUserProfilePic = async (data: IUpdateUser) => {
  return await apiRequest<FormData, UserUpdateResponse>(
    "put",
    `users/${data.id}`,
    data.file
  );
};

export const updateUser = async (data: IUpdateUser) => {
  return await apiRequest<IUpdateUser, UserUpdateResponse>(
    "put",
    `users/${data.id}`,
    data
  );
};

export interface IChangePassword {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

export interface SetPasswordInput {
  new_password: string;
  confirm_password: string;
}

export interface SetPasswordResponse {
  message: string;
  user: IProfile;
}
export interface SetPassword extends SetPasswordInput {
  token?: string;
}
export interface ChangePasswordInput {
  confirm_password: string;
  new_password: string;
  old_password: string;
}
export const changePassword = async (data: IChangePassword) => {
  return await apiRequest<ChangePasswordInput, SetPasswordResponse>(
    "put",
    `auth/change-password`,
    data
  );
};


export const registerUser = async (data: UserSignupInput) =>
  apiRequest<UserSignupInput, LoginRegisterResponse>(
    "post",
    "auth/register",
    data
  );

export const setPassword = async (data: SetPassword) =>
  apiRequest<SetPasswordInput, SetPasswordResponse>(
    "post",
    `auth/set-password/${data.token}`,
    data
  );
