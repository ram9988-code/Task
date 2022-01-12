import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Time = styled.h2`
  font-size: 45px;
  margin: 0;
  color: white;
`;
export const TimeNumeric = styled.h2`
  margin-top: 28px;
  margin-left: 5px;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 0px 20px;
  border-radius: 0px 0px 15px 15px;
`;
export const Heading = styled.h1`
  color: white;
  font-size: 30px;
`;

export const MarketContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
cursor: pointer;
`;

export const ImageContainer=styled.div`
display: flex;
justify-content: center;
`;
export const Image = styled.image`
  height: 20px;
  width: 20px;
`;
export const Text = styled.p`
  margin: 0;
  color: white;
  font-size: 18px;
  font-weight: 700;
`;
