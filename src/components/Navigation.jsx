import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 1rem;
`;

const LinkStyle = styled.a`
  color: #3E6C6C;
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <LinkStyle href='#Home'>Home</LinkStyle>
      <LinkStyle href='#AboutMe'>About Me</LinkStyle>
      <LinkStyle href='#Skills'>Skills</LinkStyle>
      <LinkStyle href='#Projects'>Projects</LinkStyle>
    </NavigationContainer>
  );
};

export default Navigation;
