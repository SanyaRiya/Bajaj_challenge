import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.post("https://bajaj-challenge-vcng.onrender.com/bfhl", {
        data: ["M", "1", "334", "4", "B"]
      });
      setResponseData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div>
      <h1>Bajaj Challenge API</h1>
      <button onClick={fetchData}>Send POST Request</button>
      {responseData && (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      )}
    </div>
  );
};

export default App;
