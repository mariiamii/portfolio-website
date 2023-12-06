import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #3E6C6C;
  font-family: 'Berkshire Swash', serif;
`;

const H1Styles = styled.h1`
  font-size: 3rem;
  padding: 2rem;
`;

const LiStyled = styled.li`
  font-size: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <H1Styles>Skills</H1Styles>
      <ul>
        <LiStyled>React</LiStyled>
        <LiStyled>JavaScript</LiStyled>
        <LiStyled>HTML</LiStyled>
        <LiStyled>CSS</LiStyled>
        <LiStyled>Flex</LiStyled>
        <LiStyled>StyledComponents</LiStyled>
        <LiStyled>Accessibility</LiStyled>
        <LiStyled>Git</LiStyled>
        <LiStyled>Responsive Web Design</LiStyled>
        <LiStyled>Design</LiStyled>
      </ul>
    </SkillsContainer>
  )
}

export default Skills;
