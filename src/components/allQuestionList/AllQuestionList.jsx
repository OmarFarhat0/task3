import { useState } from "react";
import "./allQuestionList.css";

export default function AllQuestionList({ data }) {
  const [currentId, setCurrentId] = useState(0);
  return (
    <>
      <div className="allQuestionList">
        <ul>
          {data.map((element, index) => {
            return (
              <div key={index} className="questionList">
                <li onClick={() => setCurrentId(element.id)}>
                  {element.question}
                  <hr />
                  {element.id === currentId ? element.answer : null}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
