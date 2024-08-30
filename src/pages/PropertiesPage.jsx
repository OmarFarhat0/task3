import HeadRoutePage from "../components/headRoutePage/HeadRoutePage";
import PropertiesFilter from "../components/propertiesFilter/PropertiesFilter";

export default function PropertiesPage() {
  return (
    <>
      <div className="propertiesPage">
        <HeadRoutePage thePath="HOME / PROPERTIES" namePage="PROPERTIES" />
        <PropertiesFilter
          allFilter={["Show All", "Apartment", "Villa House", "Penthouse"]}
          data={[
            {
              src: "/public/images/property/property-01.jpg",
              type: "Villa House",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-02.jpg",
              type: "Apartment",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-03.jpg",
              type: "Penthouse",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-02.jpg",
              type: "Apartment",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-03.jpg",
              type: "Penthouse",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-01.jpg",
              type: "Villa House",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-01.jpg",
              type: "Villa House",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-02.jpg",
              type: "Apartment",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-03.jpg",
              type: "Penthouse",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
          ]}
        />
      </div>
    </>
  );
}
