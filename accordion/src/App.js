import "./app.css";
import { useState } from "react";

const items = [
  {
    number: "01",
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. /n Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    lines: [
      "molestias architecto voluptate aliquam eius earum ut",
      "molestias architecto voluptate aliquam eius earum ut",
      "molestias architecto voluptate aliquam eius earum ut",
    ],
  },
  {
    number: "02",
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. /n Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    lines: [
      "molestias architecto voluptate aliquam eius earum ut",
      "molestias architecto voluptate aliquam eius earum ut",
      "molestias architecto voluptate aliquam eius earum ut",
    ],
  },
  {
    number: "03",
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. /n Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    lines: [
      "molestias architecto voluptate aliquam eius earum ut",
      "molestias architecto voluptate aliquam eius earum ut",
      "molestias architecto voluptate aliquam eius earum ut",
    ],
  },
];

function App() {
  const [actives, setActives] = useState([]);

  const toggleHandler = (i) => {
    setActives((prev) => {
      if (prev.includes(i)) {
        return prev.filter((p) => p !== i);
      }

      return [...prev, i];
    });
  };

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div className={`item ${actives.includes(i) ? "open" : ""}`} key={i}>
          <p className="number">{item.number}</p>
          <p className="text">{item.title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon"
            onClick={() => toggleHandler(i)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <div className="hidden-box">
            <p>{item.text}</p>
            <ul>
              {item.lines.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
