import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { IDefaultResponse, IThumbnail } from "../lib/interfaces";
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
  categoryId?: string;
  created_by?: string;
  name?: string;
}

export interface ILocation {
  id: string;
  name: string;
  description: string;
  whatCanYouDo: string;
  numberOfVisits: number;
  created_at: string;
  updated_at: string;
  thumbnail: IThumbnail;
}

export const allLocations = async (params?: LocationParams) => {
  return await apiRequest<any, IDefaultResponse<ILocation[]>>(
    "get",
    `locations`,
    undefined,
    undefined,
    { ...params, category_id: params?.categoryId }
  );
};

export const getLocation = async (id: string) =>
  apiRequest<any, LocationsResponse>("get", `locations/${id}`);
