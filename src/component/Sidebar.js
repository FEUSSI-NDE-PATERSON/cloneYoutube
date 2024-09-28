import React from "react";
import Side from "./Side";
const sideba = [
  {
    name: "Home",
  },
  { name: "js Mastery" },
  { name: "Gedeon de la tchetchouva" },
  { name: "Coding" },
  { name: "Info" },
  { name: "danse" },
  { name: "kizomba" },
  { name: "boxing" },
];
function Sidebar({selected,setSelected}) {
  return (
    <div>
      <Side sideba={sideba}  selected={selected} setSelected={setSelected}/>
    </div>
  );
}

export default Sidebar;
