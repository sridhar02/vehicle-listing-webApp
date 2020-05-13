import Axios from "axios";

export default function getVehicles(payload) {
  return Axios.get(`http://localhost:3000/vehicles/?_limit=${payload}`);
}
