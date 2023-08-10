import React from "react";
import "./Aside.css";
import GroupContent from "../GroupContent/GroupContent";
function Aside() {
  return (
    <section className="Aside">
      <GroupContent />
      <GroupContent />
      <GroupContent />
    </section>
  );
}

export default Aside;
