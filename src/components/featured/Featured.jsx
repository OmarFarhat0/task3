import "./featured.css";
import AllMainFeatureCard from "../allMainFeatureCard/AllMainFeatureCard";
import AllQuestionList from "../allQuestionList/AllQuestionList";
import React from "react";

export default function Featured({ srcImage, introduce, children }) {
  const childArray = React.Children.toArray(children);
  return (
    <>
      <section className="featured">
        <div className="image">
          <img src={srcImage} />
        </div>

        <div className="info">
          <div className="introduce">
            <h2>| {introduce.nameSection}</h2>
            <h3>{introduce.title}</h3>
          </div>

          {childArray[0]}
        </div>

        {childArray[1]}
      </section>
    </>
  );
}
