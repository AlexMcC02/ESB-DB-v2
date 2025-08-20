import React from "react";

function App() {
  return (
    <>
      <div
        className="flex items-start justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(./public/background-image.jpg)" }}
      >
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
      </div>
    </>
  );
}

export default App;
