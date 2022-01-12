import React from "react";
import {
  Container,
  Image,
  ItemContainer,
  Number,
  NumberContainer,
} from "./styles";

export default function CardSection() {
  const card = [
    { url: "/UnoBox.jpg", number: 4 },
    { url: "/UnoBox.jpg", number: 5 },
    { url: "/UnoBox.jpg", number: 6 },
    { url: "/UnoBox.jpg", number: 2 },
    { url: "/UnoBox.jpg", number: 6 },
  ];
  return (
    <Container>
      {card.map((item) => (
        <ItemContainer>
          <Image
            whileHover={{ scale: 1.04 }}
            whileTap={{
              scale: 0.9,
            }}
            src={item.url}
            alt="card"
          />
          <NumberContainer>
            <Number>{item.number}</Number>
          </NumberContainer>
        </ItemContainer>
      ))}
    </Container>
  );
}
