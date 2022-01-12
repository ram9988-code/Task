import React from "react";
import Image from "next/image";
import {
  Container,
  Heading,
  HeadingContainer,
  ImageContainer,
  MarketContainer,
  Text,
  Time,
  TimeContainer,
  TimeNumeric,
} from "./styles";

export default function HeaderSection() {
  return (
    <Container>
      <TimeContainer>
        <Time>120:00</Time>
        <TimeNumeric>MINS</TimeNumeric>
      </TimeContainer>
      <HeadingContainer>
        <Heading>YOUR GODOWN</Heading>
      </HeadingContainer>
      <MarketContainer>
        <ImageContainer>
          <Image src={"/door.jpg"} alt="door" height={50} width={40} />
        </ImageContainer>
        <Text>View Market</Text>
      </MarketContainer>
    </Container>
  );
}
