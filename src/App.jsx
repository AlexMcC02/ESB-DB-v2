import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";

const URL_START =
  "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_orbper,pl_rade,hostname+from+ps+where+hostname='";
const URL_END = "'&format=json";

function App() {
  const [searchTerm, setSearchTerm] = useState("Kepler-22");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchPlanets = async () => {
    try {
      const response = await fetch("http://localhost:5053/retrieve_planets");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        data.forEach((planet, idx) => {
          console.log(`Planet ${idx + 1}:`, planet);
        });
      } else {
        console.log("Received data:", data);
      }
    } catch (error) {
      setErrorMessage("Error fetching planets: " + error.message);
      console.error("Error fetching planets:", error);
    }
  };

  useEffect(() => {
    fetchPlanets();
  });

  return (
    <>
      <div
        className="flex items-start justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/background-image.jpg)" }}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mt-5">
              Extra&nbsp;
              <span className="bg-linear-to-r from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                Solar&nbsp;
              </span>
              Bodies Database v2.0
            </h1>
            <h6 className="text-sm mt-2 text-blue-100">
              An improved version of Alex's ESB-DB v1.0, now featuring NASA's
              exoplanet archive!
            </h6>
          </div>
          <div className="flex flex-col items-center mt-10">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
          </div>
          <div>
            <h2 className="text-3xl mt-8">Search Results</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
