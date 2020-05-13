import { getVehicles, postVehicle } from "./../services/index";

const getData = (payload) => ({
  type: "GET_VEHICLES",
  payload,
});

export const selectVehicle = (payload) => ({
  type: "SELECT_VEHICLE",
  vehicle: payload,
});

export function getVehiclesDetails(payload) {
  return (dispatch) => {
    getVehicles(payload).then((response) => dispatch(getData(response.data)));
  };
}

const postVehicleSucess = (payload) => ({
  type: "CREATED_NEW_VEHICLE",
  payload,
});

export function createNewVehicle(payload) {
  console.log(payload);
  return (dispatch) => {
    postVehicle(payload).then((response) =>
      dispatch(postVehicleSucess(response.data))
    );
  };
}
