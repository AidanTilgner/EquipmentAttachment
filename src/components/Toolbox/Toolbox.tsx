import React from "react";
import Attachment from "../Attachment/Attachment";
import styles from "./Toolbox.module.scss";

const equipment = [
  {
    name: "test",
    dimensions: { height: 1, width: 1 },
  },
  {
    name: "test2",
    dimensions: { height: 2, width: 1 },
  },
];

function Toolbox() {
  return (
    <div className={styles.toolbox}>
      {equipment.map((e, i) => (
        <Attachment key={e.name + i} name={e.name} dimensions={e.dimensions} />
      ))}
    </div>
  );
}

export default Toolbox;