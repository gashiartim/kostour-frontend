import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { RegisterInput } from "../../api/User";
import { useUserSignupForm } from "../../lib/hooks/form/useRegister";
import { useRegister } from "../../lib/hooks/mutations/user/useRegister";
import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useUserSignupForm();

  const signUp = useRegister();
  const onSubmit: SubmitHandler<RegisterInput> = (data) => signUp.mutate(data);

  return (
    <div className="md:mt-[37px] mt-6 md:w-max">
      <h1 className="text-4xl leading-10">Register</h1>
      <h1 className="text-sm text-[#676767] ">
        Please enter your details or
        <Link href="/login" passHref>
          <a className="underline"> login now </a>
        </Link>
      </h1>
      <form className="mt-8 w-[341px]" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="mt-2 "
          label="First Name"
          name="first_name"
          register={register}
          placeholder="Enter your name"
          hiddenLabel={false}
          error={errors.first_name?.message}
        />
        <Input
          className="mt-2 "
          label="Last Name"
          name="last_name"
          register={register}
          placeholder="Enter your name"
          hiddenLabel={false}
          error={errors.last_name?.message}
        />

        <Input
          className="mt-2"
          label="Email"
          name="email"
          register={register}
          placeholder="Enter your email"
          hiddenLabel={false}
          error={errors.email?.message}
        />
        <Input
          type="password"
          className="mt-2"
          label="Password"
          name="password"
          register={register}
          placeholder="*********"
          hiddenLabel={false}
          error={errors.password?.message}
        />
        <Input
          type="password"
          className="mt-2"
          label="ConfirmPassword"
          name="password_confirm"
          register={register}
          placeholder="*********"
          hiddenLabel={false}
          error={errors.password_confirm?.message}
        />

        <Button type="submit" className="mt-5">
          Register
        </Button>
      </form>
    </div>
  );
};
export default RegisterForm;
