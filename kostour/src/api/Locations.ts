import { Id } from "react-toastify";
import { apiRequest } from "./Api";

export interface LocationsResponse{
    name :string,
    description :string,
    whatCanYouDo :string,
    categories :[],
    thumbnail:{},
}

export const allLocations = async () => {
    return await apiRequest<null, LocationsResponse>(
      "get",
      `locations`
    );
  };

  export const getLocation=async (id:string) =>
  apiRequest<any,LocationsResponse>(
    "get",
    `locations/${id}`
  )