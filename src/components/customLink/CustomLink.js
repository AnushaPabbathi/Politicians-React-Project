import React from "react";
import "./CustomLink.css";
import {
  Link,
  useRouteMatch
} from "react-router-dom";

function CustomLink({ label, to, activeOnlyWhenExact, data, className }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={`${match ? "active" : "" } ${className}`}>
      {label === 'Home' ? <span className="BackArrow">&#x2190; </span> : ''}
      <Link to={{pathname: to, state: {data}}}>{label}</Link>
    </div>
  );
}

export default CustomLink;
