import getVehicles from "./../services/index";

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
