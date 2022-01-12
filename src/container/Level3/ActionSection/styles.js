import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 45vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: gray;
  justify-content: space-between;
  padding: 10px;
  height: 70px;
  border-radius: 10px 0px 0px 10px;
`;

export const MoreContainer = styled.div`
  cursor: pointer;
`;

export const MoreIcon = styled.img`
  height: 30px;
  width: 30px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin: 0px 15px 30px 15px;
`;

export const Icon = styled.img`
  height: 50px;
  width: 50px;
`;

export const Heading = styled.p`
  margin: 0;
  color: white;
  font-size: 18px;
  font-weight: 700;
`;

export const MessageContainer = styled.div`
  position: absolute;
  top: -3px;
  right: 2px;
  display: flex;
  height: 25px;
  width: 25px;
  background-color: red;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
export const Message = styled.p`
  margin: 0;
  color: white;
  font-weight: 600;
`;
