import React from "react";
import MyLocations from "../../src/components/MyLocations/MyLocations";
import MyRestaurants from "../../src/components/MyRestaurants/MyRestaurants";
import NewLocation from "../../src/components/NewLocation/NewLocation";
import { PrivateRoute } from "../../src/components/shared/PrivateRoute/PrivateRoute";
import Tabs, { IPanel } from "../../src/components/shared/Tabs/Tabs";
import withAuth from "../../src/components/shared/WithAuth/WithAuth";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="dark:text-white mt-[76px]">
      <Tabs tabs={tabs} panels={panels} />
    </div>
  );
};

const tabs = [
  {
    id: 0,
    name: "My Locations",
  },
  {
    id: 1,
    name: "My Restaurants",
  },
  {
    id: 2,
    name: "New Location",
  },
];

const panels: IPanel[] = [
  {
    id: 0,
    name: "My Locations",
    element: <MyLocations />,
  },
  {
    id: 0,
    name: "My Restaurants",
    element: <MyRestaurants />,
  },
  {
    id: 0,
    name: "New Location",
    element: <NewLocation />,
  },
];

export default withAuth(index);
