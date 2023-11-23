import React from "react";

function Day({ day }) {
  return <div>{day.format()}</div>;
}

export default Day;
