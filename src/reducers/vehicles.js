const vehicles = (state = [], action) => {
    switch (action.type) {
      case "ADD_VEHICLES":
        return [
          ...state,
          {
            id: action.id,
            gasConnectionNumber: action.payload.gasConnectionNumber,
            gasConnectionName: action.payload.gasConnectionName,
            mobileNumber: action.payload.mobileNumber,
            connectionType: action.payload.connectionType,
          },
        ];
      default:
        return state;
    }
  };
  
  export default vehicles;