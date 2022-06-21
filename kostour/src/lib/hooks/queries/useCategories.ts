import { useQuery, UseQueryOptions } from "react-query";
import { toast } from "react-toastify";
import { categories } from "../../../api/Categories";
import { allLocations } from "../../../api/Locations";

export const useCategories = (options?: UseQueryOptions<any, any>) => {
  return useQuery<any, any>(["categories"], () => categories(), {
    onError: (e) => {
      if (e.response)
        toast.error(e.response?.data?.error || "Something wrong happened!");
    },
    ...options,
  });
};
