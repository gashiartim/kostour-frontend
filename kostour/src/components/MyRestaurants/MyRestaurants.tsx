import React from "react";
import { IRestaurant } from "../../api/Restaurants";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import { useRestaurants } from "../../lib/hooks/queries/useRestaurants";
import CityCard from "../shared/CityCard/CityCard";
import GridContainer from "../shared/GridContainer/GridContainer";
import LoadingBoundary from "../shared/LoadingBoundary/LoadingBoundary";
import NoDataBoundary from "../shared/NoDataBoundary/NoDataBoundary";

type Props = {};

const MyRestaurants = (props: Props) => {
  const { user } = useAuthContext();

  const { data, isLoading } = useRestaurants({
    created_by: user?.id,
  });

  return (
    <LoadingBoundary loading={isLoading}>
      <NoDataBoundary dataLength={data?.total || 0}>
        <GridContainer>
          {data?.data?.map((restaurant: IRestaurant | any) => (
            <CityCard href="restaurants" key={restaurant.id} {...restaurant} />
          ))}
        </GridContainer>
      </NoDataBoundary>
    </LoadingBoundary>
  );
};

export default MyRestaurants;
