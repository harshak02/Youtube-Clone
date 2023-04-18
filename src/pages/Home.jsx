import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display : flex;
  justify-content: space-between;
  flex-wrap : wrap;
`;

export const Home = () => {

  //fetching videos from backend
  const [videos,setVideos] = useState([]);

  const fetchVideos = async ()=> {
    const res = await axios.get("http://localhost:8800/api/videos/random");
    setVideos(res.data.videos);
  }

  useEffect(()=> {
    fetchVideos();
  },[]);

  return (
    <Container>
        {videos.map((video) => (
          <Card key={video._id} />
        ))}
    </Container>
  );
};
