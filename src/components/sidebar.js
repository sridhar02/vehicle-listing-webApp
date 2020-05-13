import React from "react";

import AddIcon from "@material-ui/icons/Add";
import { makeStyles, Typography } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";

const useSidebarStyles = makeStyles({
  container: {
    display: "flex",
    // justifyContent: "space-between",
  },
});

export default function Sidebar() {
  const classes = useSidebarStyles();
  return (
    <div className={classes.container}>
      <Typography>Vehicles</Typography>
      <FilterListIcon />
      <AddIcon />
    </div>
  );
}
