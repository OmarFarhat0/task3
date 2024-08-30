import "./propertiesFilter.css";
import Properties from "../properties/Properties";
import { useEffect, useState } from "react";
import { SiAccenture } from "react-icons/si";

export default function PropertiesFilter({ allFilter, data }) {
  const [filterNow, setFilterNow] = useState("Show All");

  return (
    <>
      <div className="propertiesFilter">
        <div className="btnFilter">
          {allFilter.map((element, index) => {
            return (
              <button
                key={index}
                onClick={() => setFilterNow(element)}
                className={filterNow === element ? "active" : ""}
              >
                {element}
              </button>
            );
          })}
        </div>

        <Properties filterData={filterNow} data={data} />

        <div className="btnPages">
          <button>1</button>
          <button className="active">2</button>
          <button>3</button>
          <button>
            <SiAccenture />
          </button>
        </div>
      </div>
    </>
  );
}
