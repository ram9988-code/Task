import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #234576;
  width: 60%;
  border-radius: 10px;
  padding-top: 20px;
  z-index: 10;
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h2`
  color: #c9ccff;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: white;
  padding-left: 5px;
`;

export const Button = styled.button`
  background-image: linear-gradient(
    180deg,
    #476281 40%,
    #234576 90%
  );
  padding: 30px 0px;
  border-color: transparent;
  border-radius: 0px 0px 10px 10px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover{
    background-image: linear-gradient(
    180deg,
    #476281 0%,
    #234576 100%
  );;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #7175b5;
`;
