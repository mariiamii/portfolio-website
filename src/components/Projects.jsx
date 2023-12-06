import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #3E6C6C;
  font-family: 'Berkshire Swash', serif;
`;

const H1Styles = styled.h1`
  font-size: 3rem;
  padding: 2rem;
`;

const UlStyles = styled.ul`
  
`;

const LiStyled = styled.li`
  font-size: 1rem;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <H1Styles>Projects</H1Styles>
      <UlStyles>
        <LiStyled>Dog Rating</LiStyled>
        <LiStyled>Think Clean</LiStyled>
        <LiStyled>To-Don't List</LiStyled>
        <LiStyled>Minimalistic Tic Tac Toe</LiStyled>
      </UlStyles>
    </ProjectsContainer>
  )
}

export default Projects;
