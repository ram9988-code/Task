import React, { useRef } from "react";
import {
  Container,
  Header,
  Title,
  UserItem,
  UserListContainer,
  UserListItem,
  Username,
  UserScore,
} from "./style";

export default function LeaderBoardSection() {
  const constraintsRef = useRef(null);

  const user = [
    { user: "Username name 1", score: 3 },
    { user: "Username name 2", score: 6 },
    { user: "Username name 3", score: 9 },
    { user: "Username name 4", score: 1 },
    { user: "Username name 5", score: 2 },
    { user: "Username name 6", score: 3 },
    { user: "Username name 7", score: 4 },
    { user: "Username name 8", score: 6 },
    { user: "Username name 9", score: 8 },
  ];
  return (
    <Container>
      <Title>Leader Board</Title>
      <UserListContainer ref={constraintsRef}>
        {user.map((item) => (
          <UserListItem>
            <UserItem backgroundColor={"white"}>
              <Username>{item.user}</Username>
            </UserItem>
            <UserItem backgroundColor={"#d5d3d3"}>
              <UserScore>Score: {item.score}</UserScore>
            </UserItem>
          </UserListItem>
        ))}
      </UserListContainer>
    </Container>
  );
}
