import { useQuery, UseQueryOptions } from "react-query";
import { toast } from "react-toastify";
import { allRestaurants } from "../../../api/Restaurants";


export const useRestaurants = (
  params:{locationId?:string,categoryId?:string},
  options?: UseQueryOptions<any, any>
) => {
  return useQuery<any, any>(["restaurants",params], () => allRestaurants(params), {
    onError: (e) => {
      if (e.response) toast.error(e.response.data.error);
    },
    ...options,
  });
};