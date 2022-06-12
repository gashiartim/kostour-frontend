
import { useQuery, UseQueryOptions } from "react-query";
import { toast } from "react-toastify";
import { allLocations } from "../../../api/Locations";


export const useLocations = (
  params?:{categoryId:string},
  options?: UseQueryOptions<any, any>
) => {
  return useQuery<any, any>(["locations",params], () => allLocations(params), {
    onError: (e) => {
      if (e.response) toast.error(e.response.data.error);
    },
    ...options,
  });
};