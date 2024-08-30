import "./allMainFeatureCard.css";

export default function AllMainFeatureCard({ data }) {
  return (
    <>
      <div className="allMainFeatureCard">
        {data.map((element, index) => {
          return (
            <div key={index} className="mainFeatureCard">
              <div className="content">
                <div>
                  <img src={element.srcLogo} />
                </div>
                <div>
                  <p>{element.valFeature}</p>
                  <p>{element.whatFeature}</p>
                </div>
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
