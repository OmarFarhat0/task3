import "./contactNavBar.css";
import NavContactCard from "../navContactCard/NavContactCard";

export default function ContactNavBar({ contactCardsData, socialIcons }) {
  return (
    <div className="contactNavBar">
      <div className="cardsContainer">
        {contactCardsData.map((element, index) => {
          return (
            <NavContactCard
              key={index}
              icon={element.icon}
              text={element.text}
            />
          );
        })}
      </div>

      <div className="iconsContainer">
        {socialIcons.map((element, index) => {
          return (
            <div key={index} className="item">
              <a href="#">{element}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
