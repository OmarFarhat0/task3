import { useEffect, useState } from "react";
import "./slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider({ city, country, text, imagesLinks }) {
  const [indexImage, setIndexImage] = useState(0);

  function changeBackground(event, n) {
    let secondWay = n === undefined;

    if (
      secondWay &&
      document.getElementById(event.target.id).style.color ===
        "rgb(243, 85, 37)"
    ) {
      return;
    }

    document.getElementById(`clickChangeBack-${indexImage}`).style.color =
      "white";

    if (secondWay) {
      setIndexImage(Number(event.target.id.substring(16)));
    } else {
      let testIndex = indexImage + n;

      if (testIndex < 0) {
        setIndexImage(imagesLinks.length - 1);
      } else if (testIndex === imagesLinks.length) {
        setIndexImage(0);
      } else {
        setIndexImage((prev) => prev + n);
      }
    }
  }

  useEffect(() => {
    document.getElementsByClassName(
      "slider"
    )[0].style.backgroundImage = `url(${imagesLinks[indexImage]})`;

    document.getElementById(`clickChangeBack-${indexImage}`).style.color =
      "#f35525";
  }, [indexImage]);

  return (
    <>
      <section className="slider">
        <div className="block">
          <button
            className="leftRightBtn"
            onClick={(event) => changeBackground(event, -1)}
          >
            <FaChevronLeft className="leftRightIcon" />
          </button>

          <div className="introduce">
            <div className="from">
              <p>
                {city}, <span>{country}</span>
              </p>
            </div>

            <div className="text">
              <p>{text}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="secondButtons">
            {imagesLinks.map((element, index) => {
              return (
                <button
                  key={index}
                  id={`clickChangeBack-${index}`}
                  onClick={changeBackground}
                >
                  .
                </button>
              );
            })}
          </div>
          <button
            className="leftRightBtn"
            onClick={(event) => changeBackground(event, +1)}
          >
            <FaChevronRight className="leftRightIcon" />
          </button>
        </div>
      </section>
    </>
  );
}
