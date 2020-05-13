import React, { useState } from "react";
import { useDispatch } from "react-redux";

import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import {
  makeStyles,
  Typography,
  Button,
  TextField,
  Popover,
} from "@material-ui/core";
import { createNewVehicle } from "../actions/index";

const useSidebarStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    // position: "sticky",
    // backgroundColor: "blue",
    top: "10px",
  },
});

export default function Sidebar() {
  const classes = useSidebarStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [name, setName] = useState("");
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const addNewVehicle = (event) => {
    event.preventDefault();
    let payload = {
      name,
      year,
      make,
    };
    dispatch(createNewVehicle(payload));
    handleClose();
  };

  console.log(name, year, make);
  return (
    <div className={classes.container}>
      <Typography variant="h4">Vehicles</Typography>
      <div>
        <Button>
          <FilterListIcon />
        </Button>
        <Button onClick={handleClick}>
          <AddIcon />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div style={{ margin: "30px" }}>
            <form onSubmit={addNewVehicle}>
              <div>
                <TextField
                  variant="outlined"
                  placeholder="Enter vehicle name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  variant="outlined"
                  placeholder="Enter vehicle year"
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  variant="outlined"
                  placeholder="Enter vehicle make"
                  onChange={(e) => setMake(e.target.value)}
                />
              </div>
              <Button
                color="primary"
                type="submit"
                variant="contained"
                style={{ marginTop: "10px" }}
              >
                Add New
              </Button>
            </form>
          </div>
        </Popover>
      </div>
    </div>
  );
}
