import { useQuery, UseQueryOptions } from "react-query";
import { toast } from "react-toastify";
import {
  allRestaurants,
  IRestaurant,
  RestaurantParams,
} from "../../../api/Restaurants";
import { IDefaultResponse } from "../../interfaces";
import restaurantKeys from "../keys/restaurantKeys";

export const useRestaurants = (
  params?: RestaurantParams,
  options?: UseQueryOptions<
    IDefaultResponse<IRestaurant[]>,
    any,
    IDefaultResponse<IRestaurant[]>,
    any
  >
) => {
  return useQuery<IDefaultResponse<IRestaurant[]>, any>(
    restaurantKeys.restaurants(params),
    () => allRestaurants(params),
    {
      onError: (e) => {
        if (e.response) toast.error(e.response.data.error);
      },
      ...options,
    }
  );
};
