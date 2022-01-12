import styled from "styled-components";
import {motion} from "framer-motion";


export const Container = styled.div`
  padding: 10px;
`;

export const Heading = styled.h2`
  color: white;
`;

export const ItemContainer = styled(motion.div)`
  display: flex;
  background-color: white;
  padding: 1px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export const ItemTitle = styled.p`
  margin: 0;
  padding: 10px 0px;
  font-weight: 700;
  font-size: 18px;
  color: #535355;
`;
