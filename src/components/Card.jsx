import React from "react"
import styled from "styled-components";
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from "react-router-dom";

const Container = styled.div`
  width : 360px;
  margin-bottom : 45px;
  cursor : pointer;
`;

const Image = styled.img`
  width : 100%;
  height : 202px;
  cursor : pointer;
`;

const Details = styled.div`
  display : flex;
  margin-top : 16px;
  gap : 12px;
`;

const ChannelImage = styled.img`
  width : 36px;
  height : 36px;
  border-radius : 50%;
  background-color : #999;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size : 14px;
  font-weight : 500;
  color : ${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
  font-size : 13px;
  color : ${({theme}) => theme.textSoft};
  margin : 4px 0px;
`;
const Info = styled.div`
  font-size : 12px;
  color : ${({theme}) => theme.text};
`;

export const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration : "none"}}>
    <Container>
        <Image src="https://imgs.search.brave.com/Zmwpna_dJHYvq2dyR9ZcL1u9HN543ZJl8x_RPMGRms4/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/b2VKR3ozZWV5aHhL/M1hSUTBMeHBRSGFG/aiZwaWQ9QXBp"/>
        <Details>
            <ChannelImage src="https://imgs.search.brave.com/XcwXat5h5XqWxUwbawesLBl9z0_l552CqjzSAw4Hzmw/rs:fit:520:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/ZDdUUUk2N3B3ZnIw/RjVqcVRnRDFBQUFB/QSZwaWQ9QXBp"/>
            <Texts>
                <Title> Test Video </Title>
                <ChannelName>Harsha Vlog's</ChannelName>
                <Info>660,998 views <CircleIcon sx={{ fontSize: 8 }} /> 1 day ago</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  );
};
