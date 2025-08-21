import { useState, useEffect } from "react";
import Search from "./Search";

function App() {
  const [planets, setPlanets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("TRAPPIST-1");
  const [errorMessage, setErrorMessage] = useState("");

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
          <div className="flex flex-col items-center">
            <h2 className="text-3xl mt-8 mb-8">Search Results</h2>
            <table>
              <thead>
                <tr>
                  <th className="p-2 border-2">Planet Name</th>
                  <th className="p-2 border-2">Orbital Period (days)</th>
                  <th className="p-2 border-2">Radius (Earth radii)</th>
                  <th className="p-2 border-2">Mass (Earth mass)</th>
                  <th className="p-2 border-2">Temperature (Kelvin)</th>
                </tr>
              </thead>
              <tbody>
                {planets.map((planet, idx) => (
                  <tr key={idx}>
                    <td className="p-2 border-2">{planet.pl_name}</td>
                    <td className="p-2 border-2">
                      {planet.pl_orbper ?? "N/A"}
                    </td>
                    <td className="p-2 border-2">{planet.pl_rade ?? "N/A"}</td>
                    <td className="p-2 border-2">
                      {planet.pl_bmasse ?? "N/A"}
                    </td>
                    <td className="p-2 border-2">{planet.pl_eqt ?? "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
