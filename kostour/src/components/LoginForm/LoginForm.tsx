import Link from "next/link";
import Button from "../shared/Button/Button";
import { Icon } from "../shared/Icon/Icon";
import Input from "../shared/Input/Input";

const LoginForm = () => {
  return (
    <div className="md:mt-[37px] mt-6 md:w-max">
      <h1 className="text-4xl">Welcome back</h1>
      <h1 className="text-sm text-[#676767] ">
        Please enter your details or
        <Link href="/register" passHref>
          <a className="underline"> Register now </a>
        </Link>
      </h1>
      <form className="mt-8">
        <Input
          className="mt-2"
          label="Email"
          name="email"
          placeholder="Enter your email"
          hiddenLabel={false}
        />
        <Input
          className="mt-2"
          label="Password"
          name="password"
          placeholder="*********"
          hiddenLabel={false}
        />
        <div className="w-[330px] flex justify-between mt-3 mb-6">
          <span className="text-[#292828] text-[11px]">
            <input type="checkbox" className="mr-[9px] relative top-0.5" />
            Remember Me
          </span>
          <a href="#" className="text-[#292828] text-[11px]">
            Forgot Password?
          </a>
        </div>
        <Button>Log in</Button>
        <p className="my-2 text-center">or</p>
        <Button className="!bg-white text-black mb-3">
          <Icon style={{ width: "24px", marginRight: "10px" }} icon="google" />
          Sign in with Google
        </Button>
        <Button className="!bg-white text-black">
          <Icon
            style={{ width: "24px", marginRight: "10px" }}
            icon="facebook"
          />
          Sign in with Facebook
        </Button>
      </form>
    </div>
  );
};
export default LoginForm;
