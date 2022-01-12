import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 2rem;
  left: 0;
  right: 0;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
  cursor: pointer;
`;
export const Image = styled(motion.img)`
  height: 190px;
  width: 140px;
  border-radius: 10px;
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #000000a1;
  height: 45px;
  width: 75px;
  margin-top: 10px;
`;

export const Number = styled.h2`
  margin: 0;
  color: white;
`;
