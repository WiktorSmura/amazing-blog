import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

const StyledWraper = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderElement = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: black;
  margin: 20px;
`;

function Loader() {
  useEffect(() => {
    anime({
      targets: ".loader-element",
      loop: true,
      translateY: [
        { value: -120, duration: 500 },
        { value: 0, duration: 800 },
      ],
      delay: anime.stagger(150, { start: 0 }),
      duration: "150",
      easing: "easeInOutQuad",
      elastic: 200,
    });
  }, []);

  return (
    <StyledWraper>
      <LoaderElement className="loader-element"></LoaderElement>
      <LoaderElement className="loader-element"></LoaderElement>
      <LoaderElement className="loader-element"></LoaderElement>
    </StyledWraper>
  );
}

export default Loader;
