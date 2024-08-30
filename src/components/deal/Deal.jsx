import AllFeaturesDealCard from "../allFeaturesDealCard/AllFeaturesDealCard";
import "./deal.css";

export default function Deal({ data }) {
  return (
    <>
      <div className="deal">
        <div>
          <AllFeaturesDealCard data={data.features} />
        </div>

        <div className="image">
          <img src={data.srcImg} />
        </div>

        <div className="info">
          <h4>{data.info.title}</h4>
          <p>{data.info.firstP}</p>
          <p>{data.info.secondP}</p>
          <button>{data.info.contentBtn}</button>
        </div>
      </div>
    </>
  );
}
