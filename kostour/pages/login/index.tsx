import login from "../../src/assets/images/login-page.png";
import Image from "next/image";
import LoginForm from "../../src/components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="flex justify-center  bg-[#EAF1FB]  md:grid md:grid-cols-2">
      <div className="absolute z-50 mx-2.5 md:relative md:mx-auto mt-[153px]">
        <LoginForm />
      </div>
      <div>
        <Image
          src={login}
          objectFit="fill"
          layout="responsive"
          className=" md:blur-0 blur-[5px] object-cover md:max-h-full h-screen w-full"
          alt="login"
        />
      </div>
    </div>
  );
};
export default Login;
