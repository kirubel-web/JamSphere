// HomePage.jsx
import React, { useContext } from "react";
import styled from "@emotion/styled";
import SongList from "../components/SongList";
import SongForm from "../components/SongForm";
import { AuthContext } from "../context/AuthContext";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Container = styled.div`
  width: 500px; /* Set a fixed width */
  margin: 2rem auto; /* Center the container horizontally */
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-wrap: break-word;
  overflow: hidden; /* Hide any overflow content */
  box-sizing: border-box; /* Ensures padding is included in the width calculation */

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
   width: 90%;
   padding-left: 2rem;
`;

const LogoutButton = styled.button`
  background: linear-gradient(45deg, #ff4e50, #ff6a70);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(45deg, #d43842, #e54858);
  }
    @media (max-width: 768px) {
    width: 30%;
    margin-left: 1rem;

  }
`;

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <PageWrapper>
      <Container>
      <Profile >
        <h3>Welcome, {user?.username || user.user.username}!</h3>
        <LogoutButton onClick={logout}>
          Logout
        </LogoutButton>
        </Profile>
        <Title>🎉JamSphere🎉</Title>

        <SongForm />
        <SongList />
      </Container>
    </PageWrapper>
  );
};

export default HomePage;
