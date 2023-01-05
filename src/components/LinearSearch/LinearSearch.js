import styles from "./linearSearch.module.css";
import { useState, useRef, useEffect } from "react";
import Footer from "../Footer/Footer";

const LinearSearch = () => {
  const [arraySize, setArraySize] = useState(5); // set array size to 0
  const [searchNumber, setSearchNumber] = useState(""); // set search number to empty string
  const [runEffect, setRunEffect] = useState(false); // set runEffect to false [runEffect is used to run useEffect only when the search button is pressed changes]
  // previously i was using useEffect to change the background color of the elements to initial color but it was running on every change in search number and array size change
  // so i used runEffect to run useEffect only when the search button is pressed

  const [status, setStatus] = useState(""); //used to pass status to footer
  // i could've just added the footer here but i wanted to learn how to pass props to a component

  const elements = useRef([]); // create a ref to store the elements it points to an empty array

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
  }, [runEffect]);

  window.onerror = function () {
    // reload the window after 5 seconds if an error occurs and display an error message
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    return "An error occured. Please reload the page.";
  };

  const handleSearchButtonClick = async () => {
    if (arraySize === 0 || searchNumber === "") {
      return;
    }
    setRunEffect(!runEffect);
    setStatus("Searching...");
    for (let i = 0; i < arraySize; i++) {
      elements.current[i].style.backgroundColor = "red";

      await sleep(1000);

      if (elements.current[i].innerText === searchNumber) {
        elements.current[i].style.backgroundColor = "green";
        setStatus("Found!!!");
        console.log("Found!!!");
        break;
      }
      elements.current[i].style.backgroundColor = "blue";
      console.log(status);
    }
    if (status === "Searching...") {
      console.log("Not Found ⊙﹏⊙∥ in if");
      setStatus("Not Found ⊙﹏⊙∥");
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
  //     let randomNumbers = [];
  //     for (let i = 0; i < arraySize; i++) {
  //       randomNumbers.push(Math.floor(Math.random() * 100));
  //     }
  //     return randomNumbers.map((number) => {
  //       return (
  //         <div
  //           className={styles.element}
  //           ref={(element) => {
  //             elements.current.push(element);
  //           }}
  //         >
  //           {number}
  //         </div>
  //       );
  //     });
  //   };

  return (
    <>
      <div className="linear-search">
        <h1>Linear Search</h1>
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <span>
              <span>Enter the size of the array</span>
              <input
                type="number"
                onChange={(e) => {
                  if (e.target.value <= 50 && e.target.value >= 1)
                    setArraySize(e.target.value);
                }}
                min="1"
                max="50"
                value={arraySize}
              />
            </span>
            <span>
              <span>Enter number to be searched</span>
              <input
                type="text"
                placeholder="Enter a number"
                onChange={handleSearchNumberChange}
                onKeyDown={(e) => {
                  e.key === "Enter" && handleSearchButtonClick(); // call handleSearchButtonClick when enter is pressed
                }}
              />
            </span>
            <button type="submit" onClick={handleSearchButtonClick}>
              Search
            </button>
          </div>
          <div className={styles.outputContainer} id="output-container">
            {makeElements()}
          </div>
        </div>
      </div>
      <Footer status={status} />
    </>
  );
};

export default LinearSearch;
