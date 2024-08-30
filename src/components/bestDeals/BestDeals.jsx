import { useEffect, useState } from "react";
import Deal from "../deal/Deal";
import "./bestDeals.css";

export default function BestDeals({ introduceData, dealData }) {
  const [category, setCategory] = useState("Appartment");

  return (
    <>
      <section className="bestDeal">
        <div className="container">
          <div className="introduce">
            <div>
              <h2>| {introduceData.nameSection}</h2>
              <h3>{introduceData.title}</h3>
            </div>

            <div className="btnOpetions">
              {introduceData.opetions.map((element, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCategory(element)}
                    className={category === element ? "active" : ""}
                  >
                    {element}
                  </button>
                );
              })}
            </div>
          </div>

          {dealData.map((element, index) => {
            return element.type === category ? (
              <Deal key={index} data={element} />
            ) : null;
          })}
        </div>
      </section>
    </>
  );
}
