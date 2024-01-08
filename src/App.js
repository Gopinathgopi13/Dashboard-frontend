import React from "react";
import "./App.css";
import { BrowserRouter as Router,Route,Switch,Routes,} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TeachersPage from "./Pages/TeachersPage";
import StudentPage from "./Pages/StudentPage";
import MilestonePage from "./Pages/MilestonesPage";
import EventsPage from "./Pages/EventsPage";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import AddDetails from "./Pages/AddDetails";

const App = () => {
  return (
    <Router>
      <div style={{position:"static"}}>
        {/* <Navbar/> */}
      </div>
      <div className="main">
        <div className="sidebarDiv">
          <Sidebar></Sidebar>
        </div>
        <div className="RoutingDiv">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/student" element={<StudentPage />} />
            <Route path="/milestone" element={<MilestonePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/addDetails" element={<AddDetails/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
