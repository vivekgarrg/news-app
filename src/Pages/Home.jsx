import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Navigate, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function Home() {
  const [data, setData] = useState([]);

  async function getData() {
    const { data } = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=adb5f4b045f2424ebd0df86545914580"
    );
    setData(data.articles);
  }

  useEffect(() => {
    getData();
  }, [data]);

  //ComponentDidMount ---> Component screen par lagta hai
  //ComponentDidUpdate ---> State changes then it will run
  //ComponentDidUnMount ---> Component screen se hatt jata hai..
  const navigate = useNavigate();
  return (
    <div>
      {data.length <= 0 ? (
        <div className="progress">
          <CircularProgress/>
        </div>
      ) : (
        <div className="news-cards">
          {data.map((val, indx) => (
            <div onClick={() => navigate(`card/${indx}`)}>
              <Card val={val} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
