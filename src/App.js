import React, { useState, useEffect } from "react";

import Sidebar from "./components/sidebar";
import axios from "axios";

function App() {
  const [vehciles, setVehciles] = useState([]);

  const fetchVehciles = () => {
    axios
      .get("http://localhost:3000/vehicles")
      .then((res) => setVehciles(res.data));
  };

  useEffect(() => {
    fetchVehciles();
  }, []);
  console.log(vehciles);

  return (
    <div className="App">
     <Sidebar />
    </div>
  );
}

export default App;
