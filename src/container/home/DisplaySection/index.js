import React from "react";
import { useRouter } from "next/router";

import { Button, Container, Heading, LocationContainer, Text, Title } from "./styles";

export default function DisplaySection() {
  const router=useRouter();
  const gotoLevel=()=>{
    router.push("/level");
  }
  return (
    <Container>
      <LocationContainer>
      <Heading>You've got</Heading>
      </LocationContainer>
      <LocationContainer>
        <Heading>Location:</Heading>
        <Title>University</Title>
      </LocationContainer>
      <LocationContainer>
        <Heading>Role:</Heading>
        <Title>Student</Title>
      </LocationContainer>
      <LocationContainer>
          <Text>Your objective is to find the Spy</Text>
      </LocationContainer>
      <Button onClick={gotoLevel}>Start the game</Button>
    </Container>
  );
}
