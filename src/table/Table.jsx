import React from "react";
import Row from "./Row.jsx";

const Table = () => {
  return (
    <table border="1">
      <tbody>
        <Row id="1" text="Row 1" />
        <Row id="2" text="Row 2" />
        <Row id="3" text="Row 3" />
      </tbody>
    </table>
  )
}

export default Table;