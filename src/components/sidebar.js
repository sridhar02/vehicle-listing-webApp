import React from "react";

import AddIcon from "@material-ui/icons/Add";
import { makeStyles, Typography, Button } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";

const useSidebarStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function Sidebar() {
  const classes = useSidebarStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h3" >Vehicles</Typography>
      <div>
        <Button>
          <FilterListIcon />
        </Button>
        <Button>
          <AddIcon />
        </Button>
      </div>
    </div>
  );
}
