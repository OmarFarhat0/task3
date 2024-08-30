import "./propertyCard.css";
export default function PropertyCard({ data }) {
  return (
    <>
      <div className="propertyCard">
        <img src={data.src} />

        <div className="simpleInformation">
          <p>{data.type}</p>
          <p>{data.price}</p>
        </div>

        <p className="street">{data.street}</p>

        <div className="deepInformation">
          <p>
            Bedrooms: <span>{data.bedrooms}</span>
          </p>
          <p>
            Bathrooms: <span>{data.bathrooms}</span>
          </p>
          <p>
            Area: <span>{data.area}</span>
          </p>
          <p>
            Floor: <span>{data.floor}</span>
          </p>
          <p>
            Parking: <span>{data.parking}</span>
          </p>
        </div>

        <hr />
        <div style={{ textAlign: "center" }}>
          <button>{data.textButton}</button>
        </div>
      </div>
    </>
  );
}
