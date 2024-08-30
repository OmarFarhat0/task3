import "./videoView.css";

export default function VideoView({
  nameSection,
  title,
  srcImage,
  srcPoster,
  srcVideo,
  children,
}) {
  return (
    <>
      <div className="videoView">
        <div className="blockTop">
          <div className="info">
            <h2>| {nameSection}</h2>
            <h3>{title}</h3>
          </div>
        </div>

        <div className="blockBottom">
          <div className="video">
            <video controls poster={srcPoster}>
              <source src={srcVideo} type="video/mp4"></source>
            </video>
          </div>
          <div className="containerCards">{children}</div>
        </div>
      </div>
    </>
  );
}
