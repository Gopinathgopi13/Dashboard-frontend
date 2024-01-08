import React from "react";
import KPWidget from "../Components/KPWidgets";
import Widgets from "../Components/Widgets";

const HomePage = () => {
  return (
    <div style={{ width: "100%", border: "1px solid blue" }}>
      <div>
        <div>
          <h1>Widgets</h1>
        </div>
        <div>
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
