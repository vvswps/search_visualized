import React, { useState, useRef } from "react";

const BinarySearch = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [searchNumber, setSearchNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleSearchNumberChange = (event) => {
    setSearchNumber(event.target.value);
  };

  const binarySearch = (arr, searchNumber) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === searchNumber) {
        return mid;
      } else if (arr[mid] < searchNumber) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return -1;
  };

  const handleSearchButtonClick = () => {
    const index = binarySearch(array, searchNumber);

    if (index === -1) {
      setStatus("Not Found");
    } else {
      setStatus(`Found at index: ${index}`);
    }
  };

  return (
    <div>
      <h1>Binary Search</h1>
      <input
        type="text"
        placeholder="Enter a number"
        onChange={handleSearchNumberChange}
      />
      <button onClick={handleSearchButtonClick}>Search</button>
      <p>{status}</p>
    </div>
  );
};

export default BinarySearch;
