import React from "react";
import { Container, Heading, ItemContainer, ItemTitle } from "./styles";

export default function LocationSection() {
  const location = [
    "Your Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
  ];

  return (
    <Container>
      <Heading>Locations</Heading>
      {location.map((item) => (
        <ItemContainer
          whileHover={{ scale: 1.04 }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <ItemTitle>{item}</ItemTitle>
        </ItemContainer>
      ))}
    </Container>
  );
}
