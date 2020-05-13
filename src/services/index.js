import Axios from "axios";

export function getVehicles(payload) {
  return Axios.get(`http://localhost:3000/vehicles/?_limit=${payload}`);
}

export function postVehicle(payload) {
  return Axios.post(`http://localhost:3000/vehicles`, payload);
}

export function filterVehiclesByName(payload) {
  return Axios.get(`http://localhost:3000/vehicles?name=${payload}`);
}

export function filterVehiclesByYear(payload) {
  return Axios.get(`http://localhost:3000/vehicles?year=${payload}`);
}

export function filterVehiclesByMake(payload) {
  return Axios.get(`http://localhost:3000/vehicles?make=${payload}`);
}
