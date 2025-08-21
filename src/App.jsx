import { useState, useEffect } from "react";
import Search from "./Search";
import {round} from "mathjs";
import ErrorMessage from "./ErrorMessage";
import NoPlanetsMessage from "./NoPlanetsMessage";

function App() {
  const [planets, setPlanets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("TRAPPIST-1");
  const [errorMessage, setErrorMessage] = useState("");
  const [noPlanetsMessage, setNoPlanetsMessage] = useState("");

  const fetchPlanets = async (searchTerm) => {
    try {
      let url = `http://localhost:5053/retrieve_planets/${searchTerm}`;
      const response = await fetch(url);
      console.log("Attempted to reach: " + url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched planets:", data);
      setPlanets(data);

      if (data.length === 0) {
        setNoPlanetsMessage(
          "No planets found for the search term: " + searchTerm
        );
      } else {
        setNoPlanetsMessage("");
      }

      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error fetching planets: " + error.message);
      console.error("Error fetching planets:", error);
    }
  };

  useEffect(() => {
    fetchPlanets(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url(/background-image.jpg)" }}
      >
        <div className="flex flex-col items-center w-full max-w-6xl px-6 py-10 bg-black/60 rounded-3xl shadow-2xl opacity-90">
          <div className="text-center">
            <h1 className="text-5xl font-bold mt-5">
              Extrasolar Bodies Database v2.0
            </h1>
            <h6 className="text-sm mt-2 text-blue-200">
              An improved version of Alex's ESB-DB v1.0, now featuring NASA's
              exoplanet archive!
            </h6>
          </div>

          <div className="flex flex-col items-center mt-8 w-full">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ErrorMessage errorMessage={errorMessage} />
            <NoPlanetsMessage noPlanetsMessage={noPlanetsMessage} />
          </div>
          <div className="flex flex-col items-center w-full mt-8">
            <h2 className="text-3xl font-semibold mb-8">Search Results</h2>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse bg-gray-900 text-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-gray-800 text-blue-300">
                  <tr>
                    <th className="p-3 border-b border-gray-700">
                      Planet Name
                    </th>
                    <th className="p-3 border-b border-gray-700">
                      Orbital Period (days)
                    </th>
                    <th className="p-3 border-b border-gray-700">
                      Radius (Earth radii)
                    </th>
                    <th className="p-3 border-b border-gray-700">
                      Mass (Earth mass)
                    </th>
                    <th className="p-3 border-b border-gray-700">
                      Temperature (Kelvin)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {planets.map((planet, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-800 transition-colors"
                    >
                      <td className="p-3 border-b border-gray-700">
                        <strong>{planet.pl_name}</strong>
                      </td>
                      <td className="p-3 border-b border-gray-700">
                        {round(planet.pl_orbper, 2) ?? "N/A"}
                      </td>
                      <td className="p-3 border-b border-gray-700">
                        {round(planet.pl_rade, 2) ?? "N/A"}
                      </td>
                      <td className="p-3 border-b border-gray-700">
                        {round(planet.pl_bmasse, 2) ?? "N/A"}
                      </td>
                      <td className="p-3 border-b border-gray-700">
                        {round(planet.pl_eqt) ?? "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
