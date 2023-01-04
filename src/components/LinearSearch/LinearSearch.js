import styles from "./linearSearch.module.css";
import { useState, useRef, useEffect } from "react";

const LinearSearch = () => {
  const [arraySize, setArraySize] = useState(0); // set array size to 0
  const [searchNumber, setSearchNumber] = useState(""); // set search number to empty string

  const elements = useRef([]); // create a ref to store the elements it points to an empty array

  const handleArraySizeChange = (event) => {
    // set array size to the value of the input
    setArraySize(event.target.value);
  };

  const handleSearchNumberChange = (event) => {
    // set search number to the value of the input
    setSearchNumber(event.target.value);
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    if (elements.current.length > 0) {
      elements.current.forEach((element) => {
        element.style.backgroundColor = "initial";
      });
    }
  }, [arraySize, searchNumber]);

  const handleSearchButtonClick = async () => {
    if (arraySize === 0 || searchNumber === "") {
      return;
    }
    for (let i = 0; i < arraySize; i++) {
      elements.current[i].style.backgroundColor = "red";

      await sleep(1000);

      if (elements.current[i].innerText === searchNumber) {
        elements.current[i].style.backgroundColor = "green";
        break;
      }
      elements.current[i].style.backgroundColor = "blue";
    }
  };

  const makeElements = () => {
    return Array.from({ length: arraySize }, (_, i) => (
      <div
        className={styles.element}
        key={i}
        ref={(el) => (elements.current[i] = el)}
      >
        {i + 1}
      </div>
    ));
  };

  return (
    <div className="linear-search">
      <h1>Linear Search</h1>
      <div className="container">
        <div className="input-container">
          <span>
            <span>Enter the size of the array</span>
            <input type="number" onChange={handleArraySizeChange} />
          </span>
          <span>
            <span>Enter number to be searched</span>
            <input
              type="text"
              placeholder="Enter a number"
              onChange={handleSearchNumberChange}
            />
          </span>
          <button onClick={handleSearchButtonClick}>Search</button>
        </div>
        <div className={styles.outputContainer} id="output-container">
          {makeElements()}
        </div>
      </div>
    </div>
  );
};

export default LinearSearch;
