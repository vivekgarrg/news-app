import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({val}) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 

    const day = new Date(val?.publishedAt).getDate(); 
    const month = months[new Date(val?.publishedAt).getMonth()];
    const year = new Date(val?.publishedAt).getFullYear();
  return (
    <Card sx={{ width: 300, marginTop:"20px" }}>
       <Typography variant='h6' sx={{opacity:"0.8"}} align="center">
        {`${day}  ${month}  ${year} `}
       </Typography>
      <CardMedia
        component="img"
        height="180"
        image={val?.urlToImage}
        alt={"news"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {val?.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
