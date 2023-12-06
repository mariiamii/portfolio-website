import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
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

const SubAboutMeContainer = styled.div`
  width: 30%;
`;

const ImgStyles = styled.img`
  height: auto; width: 30rem;
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <H1Styles>About Me</H1Styles>
        <div>
          <SubAboutMeContainer>
            <div>
              <p>
                Hello, I'm Mari, a front-end web developer dedicated to merging analytical thinking with artistic creativity. My professional journey began in finance, where I honed my analytical skills and financial expertise. Additionally, I underwent 12 years of formal fine arts education, fostering a creative mindset that allows me to see innovative solutions in every challenge. This unique blend finds its true expression in my passion for front-end development. I am inspired by a deep appreciation for the transformative impact of technology on our world.
                <br />
                <br />
                Beyond the screen, I'm an avid skier, scuba diver, and runner — a challenge seeker at heart. These pursuits have ingrained in me a resilience and determination that I bring to every project. I believe that the pursuit of excellence is a journey, and I'm eager to embark on it as a key player in the dynamic realm of software engineering.
              </p>
            </div>
            <div>
              <a href="https://github.com/mariiamii">GitHub</a>
              <a href="https://www.linkedin.com/in/manuashvili/">LinkedIn</a>
            </div>
          </SubAboutMeContainer>
          <ImgStyles src="../images/mari.jpg" alt="Mari and Lilo"/>
        </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
