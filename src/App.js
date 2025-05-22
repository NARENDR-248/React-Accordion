import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./App.css"; // Custom styles in same folder

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "Why use React?", content: "It makes building interactive UIs painless and efficient." },
    { title: "How does it work?", content: "React creates a virtual DOM to efficiently update the UI." }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(index)
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React Accordion</h1>
      <div className="accordion">
        {items.length === 0 ? (
          <p>No items available</p>
        ) : (
          items.map((item, index) => (
            <div
              className={`accordion-item ${openIndex === index ? "open" : ""}`}
              key={index}
            >
              <button
                className="accordion-title"
                onClick={() => toggle(index)}
               
              >
                {item.title}
                <span className="arrow">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              {openIndex === index && (
                <div
                  
                  role="region"
                
                  className="accordion-content"
                >
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
