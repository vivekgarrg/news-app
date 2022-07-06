import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Card from '../Components/Card';

function Home() {
  const [data, setData] = useState([]);

  async function getData(){
   const {data} =  await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=adb5f4b045f2424ebd0df86545914580');
   setData(data.articles)
   console.log(data.articles)
  }

  useEffect(()=>{
    getData();
  })
  return (
    <div>
      <div className='news-cards'>
        {data.map((val, indx)=>(
          <Card key={indx} val={val}/>
        ))}
    </div>
    </div>
  )
}

export default Home