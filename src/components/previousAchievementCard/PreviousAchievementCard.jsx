import "./previousAchievementCard.css";

export default function PreviousAchievementCard({ data }) {
  return (
    <>
      <div className="allPreAchieveCard">
        {data.map((element, index) => {
          return (
            <div key={index} className="previousAchievementCard">
              <div className="container">
                <p className="number">{element.number}</p>
                <p className="achievement">{element.achievement}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
