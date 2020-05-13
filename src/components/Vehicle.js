import React from "react";

import { useSelector } from "react-redux";
import { Typography, makeStyles } from "@material-ui/core";

const useVehicleDetailsStyles = makeStyles({
  container: {
    margin: "20px",
    position: "fixed",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
  vehicle: {
    border: "1px solid black",
  },
});

export default function VehicleDetails() {
  const classes = useVehicleDetailsStyles();
  const vehicles = useSelector((state) => state.vehicles);

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h4">
        Vechile Details Panel
      </Typography>
      <div>
        {vehicles.vehicle && (
          <div>
            <Typography variant="h6">Vechicle Id : {vehicles.vehicle.id}</Typography>
            <Typography variant="h6">Name : {vehicles.vehicle.name}</Typography>
            <Typography variant="h6"> Year : {vehicles.vehicle.year}</Typography>
            <Typography variant="h6"> Make : {vehicles.vehicle.make}</Typography>
          </div>
        )}
      </div>
    </div>
  );
}
