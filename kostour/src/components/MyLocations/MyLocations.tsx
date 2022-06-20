import React from "react";
import { ILocation } from "../../api/Locations";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import { useLocations } from "../../lib/hooks/queries/useLocations";
import CityCard from "../shared/CityCard/CityCard";
import GridContainer from "../shared/GridContainer/GridContainer";
import LoadingBoundary from "../shared/LoadingBoundary/LoadingBoundary";
import NoDataBoundary from "../shared/NoDataBoundary/NoDataBoundary";

type Props = {};

const MyLocations = (props: Props) => {
  const { user } = useAuthContext();
  const { data, isLoading } = useLocations({ created_by: user?.id });
  console.log("datadata", data);

  return (
    <LoadingBoundary loading={isLoading}>
      <NoDataBoundary dataLength={data?.total || 0}>
        <GridContainer>
          {data?.data?.map((location: ILocation | any) => (
            <CityCard href="locations" key={location.id} {...location} />
          ))}
        </GridContainer>
      </NoDataBoundary>
    </LoadingBoundary>
  );
};

export default MyLocations;
