import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  padding: 10px;
`;

export const Header = styled.div``;

export const Title = styled.h2`
  color: white;
`;

export const UserListContainer = styled(motion.div)`
  display: block;
  justify-content: center;
  overflow: scroll;
  overflow-x: hidden;
  height: 86vh;
`;

export const UserListItem = styled(motion.div)`
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin: 10px 10px;
  cursor: pointer;
`;

export const UserItem = styled.div`
  padding: 0px 15px 0px 15px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 0px 15px 0px 15px;
  color: #555454;
  border-radius: 5px;
`;

export const Username = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #535355;
`;

export const UserScore = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
