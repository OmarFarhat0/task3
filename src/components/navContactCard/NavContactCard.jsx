import "./navContactCard.css";

export default function NavContactCard({ icon, text }) {
  return (
    <div className="navContactCard">
      <div className="container">
        <p>{icon}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
