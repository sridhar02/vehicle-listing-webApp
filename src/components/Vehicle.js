import React from "react";

import { useSelector } from "react-redux";
import { Typography, makeStyles } from "@material-ui/core";

const useVehicleDetailsStyles = makeStyles({
  container: {
    marginTop: "30px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
  vehicle: {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    // width: "30%",
    marginTop: "40px",
  },
});

export default function VehicleDetails() {
  const classes = useVehicleDetailsStyles();
  const vehicles = useSelector((state) => state.vehicles);
  // console.log(vehicles.vehicle);

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h4">
        Vechile Details Panel
      </Typography>
      <div>
        {vehicles.vehicle && (
          <div>
            <Typography variant="h6">Id:{vehicles.vehicle.id}</Typography>
            <Typography variant="h6">Name : {vehicles.vehicle.name}</Typography>
            <Typography variant="h6"> Year:{vehicles.vehicle.year}</Typography>
            <Typography variant="h6"> Make: {vehicles.vehicle.make}</Typography>
          </div>
        )}
      </div>
    </div>
  );
}
