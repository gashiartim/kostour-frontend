import { apiRequest } from "./Api";

export interface RestaurantsResponse{
    data: RestaurantItems[]
}

export interface RestaurantItems{
    id: string,
    name: string,
    description:string,
    open_hours:string,
    location_id: string,
    created_at: string,
    updated_at: string,
    location: {
      id: string,
      name: string,
      description: string,
      whatCanYouDo: string,
      numberOfVisits: number,
      created_at: string,
      updated_at: string
    },
    thumbnail: any,
    images: []
}

export interface RestaurantParams{
  locationId?:string,
  categoryId?:string
}
export const allRestaurants = async (params?:RestaurantParams) => {
    return await apiRequest<null, RestaurantsResponse>(
      "get",
      `restaurants`,
      undefined,
      undefined,
      params
    );
  };

  export const getResturant = async (id:string) =>
  apiRequest<any,RestaurantsResponse>(
    "get",
    `restaurants/${id}`
  )