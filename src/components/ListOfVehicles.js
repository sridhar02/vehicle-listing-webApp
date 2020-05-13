import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfinteScroll from "react-infinite-scroll-component";

import { makeStyles, Button } from "@material-ui/core";
import { getVehiclesDetails, selectVehicle } from "../actions/index";

function Vehicle({ vehicle }) {
  const dispatch = useDispatch();
  const handleSelectVehicle = () => {
    const payload = {
      id: vehicle.id,
      name: vehicle.name,
      year: vehicle.year,
      make: vehicle.make,
    };

    dispatch(selectVehicle(payload));
  };
  return (
    <div>
      <Button onClick={() => handleSelectVehicle()}   style={{width:"100%"}}>
        {vehicle.id}. 
        {vehicle.name}
      </Button>
    </div>
  );
}

const useListOfVehiclesStyles = makeStyles({
  container: {
    borderTop: "1px solid black",
  },
});

function ListOfVehicles() {
  const [count, setCount] = useState(50);
  const vehicles = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();
  const classes = useListOfVehiclesStyles();

  const fetchVehicles = () => {
    setCount(count + 50);
    dispatch(getVehiclesDetails(count + 50));
  };

  useEffect(() => {
    dispatch(getVehiclesDetails(count));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      {vehicles.vehicles && (
        <InfinteScroll
          dataLength={vehicles.vehicles.length}
          next={fetchVehicles}
          hasMore={true}
          loader={<h4>loading..</h4>}
        >
          {vehicles.vehicles.map((vehicle) => (
            <Vehicle vehicle={vehicle} key={vehicle.id} />
          ))}
        </InfinteScroll>
      )}
    </div>
  );
}

export default ListOfVehicles;
