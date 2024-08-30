import PropertyCard from "../propertyCard/PropertyCard";
import "./propertie.css";

export default function Properties({ nameSection, title, filterData, data }) {
  return (
    <>
      <section className="properties">
        <div className="container">
          {nameSection != undefined ? <h2>{nameSection}</h2> : null}
          {title != undefined ? <h3>{title}</h3> : null}
          <div className="items">
            {data.map((element, index) => {
              return filterData === "Show All" ||
                filterData === element.type ? (
                <PropertyCard key={index} data={element} />
              ) : null;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
