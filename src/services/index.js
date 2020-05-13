import Axios from "axios";

export function getVehicles(payload) {
  return Axios.get(`http://localhost:3000/vehicles/?_limit=${payload}`);
}

export function postVehicle(payload) {
  return Axios.post(`http://localhost:3000/vehicles`, { payload });
}
