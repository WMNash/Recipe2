import React from "react";
import "./Sidebar.css";
// import { Navbar } from "Navbar";

function Sidebar() {
  return (
    <>
      <div style="margin-left:25%" className="Sidebar-circles">
        Sidebar
      </div>
      <button className="Circle">Shapes</button>
      <button className="Circle">Shapes1</button>
      <button className="Circle">Shapes2</button>
      <button className="Circle">Shapes3</button>
      <button className="Circle">Shapes4</button>
    </>
  );
}

export default Sidebar;
