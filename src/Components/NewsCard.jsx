import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function NewsCard() {
  const { index } = useParams();
  const [data, setData] = useState('');

  async function getData() {
    const { data } = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=adb5f4b045f2424ebd0df86545914580"
    );
    setData(data.articles[index]);
    console.log(data.articles[index])
  }

  useEffect(() => {
    getData();
  }, [index]);

  const handleClick = () => {
    window.location.href = `${data.url}`;
  };
  return (
    <>
      {" "}
      {data!=="" ? (
        <Card sx={{ width: "100vw", height: "auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              width="100vw"
              height="auto"
              image={data.urlToImage}
              alt="news"
            />
            <CardContent>
              <Typography onClick={handleClick}>View Full News</Typography>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.content}
                <br />
                <br />
                <p>
                  <b>{data.description}</b>
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
