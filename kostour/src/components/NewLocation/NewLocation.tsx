import React from "react";
import {
  CreateLocationFormValues,
  useCreateLocationForm,
} from "../../lib/forms/Location/useCreateLocationForm";
import { useCategories } from "../../lib/hooks/queries/useCategories";
import ControllerSelectInput from "../shared/ControllerSelectInput/ControllerSelectInput";
import Form from "../shared/Form/Form";
import Input from "../shared/Input/Input";
import TextAreaInput from "../shared/TextAreaInput/TextAreaInput";

type Props = {};

const NewLocation = (props: Props) => {
  const { data: categories, isLoading: loadingCategories } = useCategories();
  console.log({ categories });

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useCreateLocationForm();

  function onSubmit(data: CreateLocationFormValues) {}

  return (
    <div>
      <Form
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        className="!flex flex-col"
      >
        <div className="flex justify-between w-full">
          <Input
            label="Name"
            name="name"
            register={register}
            className="w-[285px]"
            error={errors.name?.message}
            hiddenLabel={false}
          />
          <ControllerSelectInput
            control={control}
            name="category"
            label="Select Category"
            isLoading={loadingCategories}
            options={categories || []}
            className="w-[285px]"
          />

          <Input
            className="w-[285px]"
            name="fullAddress"
            register={register}
            label="Full address"
            error={errors.fullAddress?.message}
            hiddenLabel={false}
          />
        </div>
        <div>
          <TextAreaInput
            label="Description"
            register={register}
            name="description"
            error={errors.description?.message}
            inputClassName="w-full max-w-[912px]"
            rows={12}
            hiddenLabel={false}
          />
        </div>
      </Form>
    </div>
  );
};

export default NewLocation;
