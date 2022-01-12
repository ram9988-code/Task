import React, { useState } from "react";
import {
  Container,
  Heading,
  Icon,
  ItemContainer,
  Message,
  MessageContainer,
  MoreContainer,
  MoreIcon,
} from "./styles";

export default function ActionSection() {
  const [open, setOpen] = useState(false);

  const openBag = () => {
    setOpen(!open);
  };
  return !open ? (
    <Container>
      <ItemContainer onClick={openBag}>
        <Icon src="/icons/backpack.png" />
        <Heading>Bag</Heading>
      </ItemContainer>
    </Container>
  ) : (
    <Container>
      <MoreContainer onClick={openBag}>
        <MoreIcon src={"/icons/more.png"} alt="MoreIcon" />
      </MoreContainer>

      <ItemContainer>
        <Icon src="/icons/notes.png" />
        <Heading>Records</Heading>
      </ItemContainer>

      <ItemContainer>
        <Icon src="/icons/notepad.png" />
        <Heading>Notepad</Heading>
      </ItemContainer>

      <ItemContainer>
        <Icon src="/icons/mobile.png" />
        <Heading>Mobile</Heading>
        <MessageContainer>
          <Message>1</Message>
        </MessageContainer>
      </ItemContainer>
    </Container>
  );
}
