const vehicles = (state = [], action) => {
  switch (action.type) {
    case "GET_VEHICLES":
      return {
        ...state,
        vehicles: action.payload,
      };
    case "SELECT_VEHICLE":
      return {
        ...state,
        vehicle: action.vehicle,
      };
    default:
      return state;
  }
};

export default vehicles;
