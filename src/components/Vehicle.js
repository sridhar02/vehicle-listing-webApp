import React from "react";
import { Typography } from "@material-ui/core";

export default function Vehicle({ vehicle }) {
  return (
    <div>
      <Typography variant="h4">Vehicle Details</Typography>
      <Typography variant="h6"> {vehicle.MakeId}</Typography>
      <Typography variant="h6"> {vehicle.MakeName}</Typography>
      <Typography variant="h6"> {vehicle.VehicleTypeId}</Typography>
      <Typography variant="h6"> {vehicle.VehicleTypeName}</Typography>
    </div>
  );
}
