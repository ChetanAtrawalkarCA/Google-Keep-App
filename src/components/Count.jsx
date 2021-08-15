import React from "react";

//display total notes count on homepage
function Count({ count }) {
  return (
    <div className="count">
      <h4>{count}</h4>
    </div>
  );
}

export default Count;
