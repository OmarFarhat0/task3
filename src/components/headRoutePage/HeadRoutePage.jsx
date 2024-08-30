import "./headRoutePage.css";

export default function HeadRoutePage({ thePath, namePage }) {
  return (
    <section className="headRoutePage">
      <p>{thePath}</p>
      <p>{namePage}</p>
    </section>
  );
}
