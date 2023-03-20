import React from 'react';
import styled from 'styled-components';
import {  useNavigate } from "react-router-dom";






const Container = styled.div`
background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Home = () => {
  const navigate = useNavigate();
    return (
      <Container>
        <Title>Welcome to your music app</Title>
        <Subtitle>Listen to your favorite songs anytime, anywhere.</Subtitle>
        <button onClick={() => navigate("/app")}>
          Listen to your music now
        </button>
      </Container>
    );
  }
export default Home;