import { IDefaultResponse } from "../lib/interfaces";
import { apiRequest } from "./Api";

export interface RestaurantsResponse {
  // data: RestaurantItems[];
}

export interface IRestaurant {
  id: string;
  name: string;
  description: string;
  open_hours: string;
  location_id: string;
  created_at: string;
  updated_at: string;
  location: {
    id: string;
    name: string;
    description: string;
    whatCanYouDo: string;
    numberOfVisits: number;
    created_at: string;
    updated_at: string;
  };
  thumbnail: any;
  images: any[];
}

export interface RestaurantParams {
  locationId?: string;
  categoryId?: string;
  created_by?: string;
}
export const allRestaurants = async (params?: RestaurantParams) => {
  return await apiRequest<null, IDefaultResponse<IRestaurant[]>>(
    "get",
    `restaurants`,
    undefined,
    undefined,
    {
      ...params,
      location_id: params?.locationId,
      category_id: params?.categoryId,
    }
  );
};

export const getResturant = async (id: string) =>
  apiRequest<any, RestaurantsResponse>("get", `restaurants/${id}`);
