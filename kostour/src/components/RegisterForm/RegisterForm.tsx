import Link from "next/link";
import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";

const RegisterForm = () => {
  return (
    <div className="md:mt-[37px] mt-6 md:w-max">
      <h1 className="text-4xl leading-10">Register</h1>
      <h1 className="text-sm text-[#676767] ">
        Please enter your details or
        <Link href="/login" passHref>
          <a className="underline"> login now </a>
        </Link>
      </h1>
      <form className="mt-8 w-[341px]">
        <Input
          className="mt-2 "
          label="Name"
          name="name"
          placeholder="Enter your name"
          hiddenLabel={false}
        />
        <Input
          className="mt-2"
          label="Phone"
          name="phone"
          placeholder="Please enter your name"
          hiddenLabel={false}
        />

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

        <Button className="mt-5">Register</Button>
      </form>
    </div>
  );
};
export default RegisterForm;
