import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

const StyledWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93vh;
  max-width: 1200px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 3px;
  font-size: 3rem;
  text-decoration: underline;
  opacity: 0;
`;

function Hero() {
  useEffect(() => {
    anime({
      targets: ".hero-text",
      opacity: [0, 1],
      delay: 500,
      duration: 10000,
    });
  }, []);

  return (
    <StyledWraper>
      <H1 className="hero-text">Kozacki blog</H1>
    </StyledWraper>
  );
}

export default Hero;
