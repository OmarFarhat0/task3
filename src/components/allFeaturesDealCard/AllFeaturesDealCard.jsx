import "./allFeaturesDealCard.css";

export default function AllFeaturesDealCard({ data }) {
  return (
    <>
      <div className="allfeaturesDealCard">
        {data.map((element, index) => {
          return (
            <div key={index} className="featuresDealCard">
              <div className="content">
                <p>
                  {element.whatFeature} <span>{element.valFeature}</span>
                </p>
              </div>
              {index != data.length - 1 ? (
                <div>
                  <hr />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
