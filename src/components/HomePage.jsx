import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #3E6C6C;
  font-family: 'Berkshire Swash', serif;
`;

const H1Styles = styled.h1`
  font-size: 3rem;
`;

const IntroStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PStyles = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <H1Styles>Hello World</H1Styles>
      <IntroStyles>
        <PStyles>I'm Mari</PStyles>
        <PStyles>Software Engineer</PStyles>
      </IntroStyles>
    </HomePageContainer>
  )
}

export default HomePage;
