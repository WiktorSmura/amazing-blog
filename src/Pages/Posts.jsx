import React from "react";
import styled from "styled-components";
import { useQuery } from "graphql-hooks";
import Loader from "../components/Loader";
import PostElement from "../components/PostElement";

const StyledWraper = styled.div`
  height: 93vh;
  width: 100%;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const H1 = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 3px;
  font-size: 3rem;
  text-align: center;
  padding: 3rem 0;
  text-decoration: underline;
  margin: 0;
`;

const POST_TITLES_QUERY = `query BlogPosts {
  allBlogposts(orderBy: _createdAt_DESC) {
    id
    posttitle
  }
}`;

function About() {
  const { loading, error, data } = useQuery(POST_TITLES_QUERY, {});
  if (loading) return <Loader />;
  if (error) return "Something Bad Happened";

  return (
    <StyledWraper>
      <H1>Posty</H1>
      <StyledGrid>
        {data.allBlogposts.map(({ posttitle, id }) => {
          return <PostElement key={id} posttitle={posttitle} id={id} />;
        })}
      </StyledGrid>
    </StyledWraper>
  );
}

export default About;
