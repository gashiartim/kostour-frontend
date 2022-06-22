import React from "react";
import {
  CreateLocationFormValues,
  useCreateLocationForm,
} from "../../lib/forms/Location/useCreateLocationForm";
import { useCategories } from "../../lib/hooks/queries/useCategories";
import { LeafletMouseEvent } from "leaflet";
import ControllerSelectInput from "../shared/ControllerSelectInput/ControllerSelectInput";
import Form from "../shared/Form/Form";
import Input from "../shared/Input/Input";
import TextAreaInput from "../shared/TextAreaInput/TextAreaInput";
import Button from "../shared/Button/Button";
import LatLngInput from "../shared/LatLngInput/LatLngInput";
import useCreateLocation from "../../lib/hooks/mutations/Location/useCreateLocation";
import { useCreateFormData } from "../../lib/helpers/useCreateFormData";
import ControllerFileInput from "../shared/ControllerFileInput/ControllerFileInput";

type Props = {};

const NewLocation = (props: Props) => {
  const { data: categories, isLoading: loadingCategories } = useCategories();
  const { createFormData } = useCreateFormData();
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    setValue,
    watch,
    getValues,
    reset,
  } = useCreateLocationForm();
  console.log({ errors });

  const createLocation = useCreateLocation(reset);

  const lat = watch("lat");
  const lng = watch("lng");

  function handleMarkerLocationChange(data: LeafletMouseEvent | any) {
    if (data.lat && data.lng) {
      setValue("lat", data.lat);
      setValue("lng", data.lng);
      return;
    }

    setValue("lat", data.latlng.lat);
    setValue("lng", data.latlng.lng);
  }

  function onSubmit(createLocationFormValues: CreateLocationFormValues) {
    const formData = createFormData({
      ...createLocationFormValues,
      thumbnail: getValues("thumbnail"),
      categories: getValues("categories")?.map((category: any) => category?.id),
    });
    createLocation.mutate({ formData: formData as any });
  }
  return (
    <div>
      <Form
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        className="!flex flex-col"
      >
        <LatLngInput
          handleMarkerLocationChange={handleMarkerLocationChange}
          lat={lat}
          lng={lng}
          errors={errors}
        />
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
        <div className="grid gap-8 lg:grid-cols-2">
          <TextAreaInput
            label="Description"
            register={register}
            name="description"
            error={errors.description?.message}
            inputClassName="w-full max-w-[912px]"
            rows={12}
            hiddenLabel={false}
            className="w-full"
          />
          <TextAreaInput
            label="What can you do"
            register={register}
            name="whatCanYouDo"
            error={errors.whatCanYouDo?.message}
            inputClassName="w-full max-w-[912px]"
            rows={12}
            hiddenLabel={false}
            className="w-full"
          />
        </div>
        <ControllerFileInput
          className="mt-3"
          name="thumbnail"
          label="Cover Pic"
          control={control}
          isLoading={false}
        />
        <Button type="submit">Create Location</Button>
      </Form>
    </div>
  );
};

export default NewLocation;
