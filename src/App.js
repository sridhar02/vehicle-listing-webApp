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
});

function App() {
  const classes = useAppStyles();

  return (
    <div className={classes.app}>
      <div style={{ width: "50%" }}>
        <Sidebar />
        <ListOfVehicles />
      </div>
      <div style={{ border: "1px solid black", width: "50%" }}>
        <VehicleDetails />
      </div>
    </div>
  );
}

export default App;
