import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { apiRequest } from "./Api";

export interface LocationsResponse {
  id: string;
  name: string;
  description: string;
  whatCanYouDo: string;
  categories: [];
  thumbnail: {};
  numberOfVisits: number;
}

export interface LocationParams {
  categoryId: string;
}

export const allLocations = async (params?: LocationParams) => {
  return await apiRequest<any, LocationsResponse>(
    "get",
    `locations`,
    undefined,
    undefined,
    {
      category_id: params?.categoryId,
    }
  );
};

export const getLocation = async (id: string) =>
  apiRequest<any, LocationsResponse>("get", `locations/${id}`);
