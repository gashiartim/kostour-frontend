import { UseFormReset } from "react-hook-form";
import { useMutation, UseMutationOptions, useQueryClient } from "react-query";

import { toast } from "react-toastify";
import {
  createLocation,
  ICreateLocationRequest,
  ILocation,
} from "../../../../api/Locations";
import { CreateLocationFormValues } from "../../../forms/Location/useCreateLocationForm";

import locationKeys from "../../keys/locationKeys";

export default function useCreateLocation(
  reset: UseFormReset<CreateLocationFormValues>,
  options?: UseMutationOptions<ILocation, any, ICreateLocationRequest, any>
) {
  const clientQuery = useQueryClient();

  return useMutation(createLocation, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(locationKeys.locations());
      toast.success("Location created successfully");
      if (reset) {
        reset?.();
      }
    },
    onError: (err: any) => {
      toast.error(
        err.response?.data?.error ||
          "Couldn't create location, something wrong happened"
      );
    },
    ...options,
  });
}
