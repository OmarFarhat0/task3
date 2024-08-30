import "./sectionContactCard.css";

export default function SectionContactCard({ srcImg, text1, text2 }) {
  return (
    <>
      <div className="contactCard">
        <div className="block1">
          <img src={srcImg} />
        </div>

        <div className="block2">
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </>
  );
}
