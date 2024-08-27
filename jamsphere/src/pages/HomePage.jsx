// HomePage.jsx
import React from "react";
import styled from "@emotion/styled";
import SongList from "../components/SongList";
import SongForm from "../components/SongForm";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-wrap: break-word;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <Container>
        <Title>JamSphere</Title>
        <SongForm />
        <SongList />
      </Container>
    </PageWrapper>
  );
};

export default HomePage;

