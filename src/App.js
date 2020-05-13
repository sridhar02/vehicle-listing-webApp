import React from "react";

import Sidebar from "./components/sidebar";
import ListOfVehicles from "./components/ListOfVehicles";
import VehicleDetails from "./components/Vehicle";
import { makeStyles } from "@material-ui/core";

const useAppStyles = makeStyles({
  app: {
    display: "flex",
    // flex: 1,
    overflowY: "none",
  },
  list: {
    width: "20%",
  },
  vehicleDetails: {
    borderLeft: "1px solid black",
  },
});

function App() {
  const classes = useAppStyles();

  return (
    <div className={classes.app}>
      <div className={classes.list}>
        <Sidebar />
        <ListOfVehicles />
      </div>
      <div className={classes.vehicleDetails}>
        <VehicleDetails />
      </div>
    </div>
  );
}

export default App;
