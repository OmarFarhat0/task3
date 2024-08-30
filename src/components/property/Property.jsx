import "./property.css";

import React from "react";

export default function Property({ info, children }) {
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      <div className="property">
        <div>
          <div className="info">
            <img src="/public/images/property/property-01.jpg" />
            <p>{info.type}</p>
            <p>{info.street}</p>
            <hr />
            {info.firstText}
            {info.secondText}
          </div>

          <div>{childrenArray[0]}</div>
        </div>

        <div>{childrenArray[1]}</div>
      </div>
    </>
  );
}
