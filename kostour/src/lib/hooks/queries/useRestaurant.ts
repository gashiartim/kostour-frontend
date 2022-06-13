import { useQuery, UseQueryOptions } from "react-query";
import { toast } from "react-toastify";
import { getResturant } from "../../../api/Restaurants";


export const useRestaurant = (
  id:string,
  options?: UseQueryOptions<any, any>
) => {
  return useQuery<any, any>(["restaurant"], () => getResturant(id), {
    onError: (e) => {
      if (e.response) toast.error(e.response.data.error);
    },
    ...options,
  });
};