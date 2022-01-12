import Head from "next/head";
import styled from "styled-components";
import ActionSection from "../container/Level3/ActionSection";
import CardSection from "../container/Level3/CardSection";
import HeaderSection from "../container/Level3/HederSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Level-2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Header>
          <HeaderSection />
        </Header>
        <ActionSection/>
        <CardSection/>
      </Main>
    </div>
  );
}

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("/godown.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Header = styled.div`
  padding: 0px 20px;
  width: 100%;
`;