import { useQuery, UseQueryOptions } from "react-query";
import { toast } from "react-toastify";
import { allLocations, ILocation } from "../../../api/Locations";
import { IDefaultResponse } from "../../interfaces";

export const useLocations = (
  params?: { categoryId?: string; name?: string; created_by?: string },
  options?: UseQueryOptions<IDefaultResponse<ILocation[]>, any>
) => {
  return useQuery<
    IDefaultResponse<ILocation[]>,
    any,
    IDefaultResponse<ILocation[]>,
    any
  >(["locations", params], () => allLocations(params), {
    onError: (e: any) => {
      if (e.response) toast.error(e.response?.data?.error);
    },
    ...options,
  });
};
