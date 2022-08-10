import { useState } from "react";

export default function Portfolio() {
  const [data, setData] = useState("");

  function handleSelection(e) {
    console.log(e.target.innerText);
    setData(e.target.innerText);
  }

  return (
    <>
      <div className="text-center pt-20">
        <div className="text-3xl font-bold">Portfolio</div>
        <ul className="flex-1 flex mr-auto justify-around">
          <li
            onClick={handleSelection}
            className="hover:text-blue-800 hover:underline hover:underline-offset-4 decoration-solid"
          >
            All
          </li>
          <li
            onClick={handleSelection}
            className="hover:text-blue-800 hover:underline hover:underline-offset-4 decoration-solid"
          >
            Engineering
          </li>
          <li
            onClick={handleSelection}
            className="hover:text-blue-800 hover:underline hover:underline-offset-4 decoration-solid"
          >
            Design
          </li>
        </ul>
      </div>
      <div>
        <h4>{data}</h4>
      </div>
    </>
  );
}

