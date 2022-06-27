import axios from "axios";
import React, { useEffect, useState } from "react";

function Fetch() {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data2 = await axios.get("https://dog.ceo/api/breeds/image/random");
    setImgSrc(data2.data.message);
    setBody(data.data.body);
    setTitle(data.data.title);
  };
  return (
    <div>
      <div
        style={{
          border: "2px solid gray",
          width: "300px",
          margin: "auto",
        }}
      >
        <h5> {title} </h5> <hr />
        <p> {body} </p>{" "}
      </div>{" "}
      <h1> {state} </h1>{" "}
      <button onClick={() => setState((prev) => prev + 1)}> + </button>{" "}
      <h1> {state2} </h1>{" "}
      <button onClick={() => setState2((prev) => prev + 1)}> + </button>{" "}
      <div>
        <img src={imgSrc} /> <button onClick={fetchData}> Click me </button>{" "}
      </div>{" "}
    </div>
  );
}

export default Fetch;
