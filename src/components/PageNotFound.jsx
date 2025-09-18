import React from "react";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div>
      <div className="pnf">
        <div className="pnf-title">
          <h1>404</h1>
          <h2>Opps...! Page Not Found</h2>
        </div>

        <Link to="/" className="btnLink">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
