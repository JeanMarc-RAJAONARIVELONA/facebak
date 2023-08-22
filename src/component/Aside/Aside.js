import React from "react";
import "./Aside.css";
import GroupContent from "../GroupContent/GroupContent";
import Button from "../button/button";
function Aside() {
  return (
    <section className="Aside">
      <GroupContent />
      <GroupContent />
      <GroupContent />
      <GroupContent />
      <GroupContent />
      <GroupContent />
      <GroupContent />
      <GroupContent />
      <GroupContent />
      <GroupContent />
      <GroupContent />
      <GroupContent />
      <Button value={"Test"} color={"test"} />
      <Button value={"Test"} color={"lexi_luna"} />
    </section>
  );
}

export default Aside;
