import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import anime from "animejs";

const StyledUl = styled.ul`
  height: 7vh;
  margin: 0;
  list-style: none;
  display: flex;
  opacity: 1;
  top: -100px;
`;

const StyledLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
`;

function Nav() {
  useEffect(() => {
    anime({
      targets: ".link",
      delay: anime.stagger(300, { start: 1000 }),
      translateY: [-100, 0],
      duration: 3000,
    });
  });

  return (
    <nav>
      <StyledUl className="list">
        <li className="link">
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li className="link">
          <StyledLink to="/posts">Posty</StyledLink>
        </li>
      </StyledUl>
    </nav>
  );
}

export default Nav;
