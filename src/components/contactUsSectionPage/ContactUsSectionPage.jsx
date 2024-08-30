import React from "react";
import "./contactUsSectionPage.css";
import SectionContactCard from "../sectionContactCard/SectionContactCard";

export default function ContactUsSectionPage({
  info,
  contactCardsData,
  children,
}) {
  const childArray = React.Children.toArray(children);
  return (
    <section className="contactUsSectionPage">
      <div className="container">
        <div className="blockOne">
          <div>
            <div className="info">
              <h2>| {info.nameSection}</h2>
              <h3>{info.title}</h3>
              <p>{info.text}</p>
            </div>

            <div className="cardsContainer">
              {contactCardsData.map((element, index) => {
                return (
                  <SectionContactCard
                    key={index}
                    srcImg={element.srcImg}
                    text1={element.text1}
                    text2={element.text2}
                  />
                );
              })}
            </div>
          </div>
          <div>{childArray[0]}</div> {/* form component */}
        </div>
        <div className="map">{childArray[1]}</div> {/* iframe google map */}
      </div>
    </section>
  );
}
