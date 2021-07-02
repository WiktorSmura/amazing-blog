import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
`;

function PostElement({ posttitle, id }) {
  return (
    <StyledLink to={`/posts/${id}`} key={id}>
      {posttitle}
    </StyledLink>
  );
}

export default PostElement;
