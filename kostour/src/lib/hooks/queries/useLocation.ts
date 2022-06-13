import { getLocation } from './../../../api/Locations';

import { useQuery, UseQueryOptions } from "react-query";
import { toast } from "react-toastify";
import { allLocations } from "../../../api/Locations";


export const useLocation = (
  id:string,
  options?: UseQueryOptions<any, any>
) => {
  return useQuery<any, any>(["location"], () => getLocation(id), {
    onError: (e) => {
      if (e.response) toast.error(e.response.data.error);
    },
    ...options,
  });
};