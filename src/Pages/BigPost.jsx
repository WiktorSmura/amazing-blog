import React from "react";
import { useQuery } from "graphql-hooks";
import styled from "styled-components";
import Loader from "../components/Loader";

const H1 = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 3px;
  font-size: 3rem;
  text-decoration: underline;
`;

const P = styled.p`
  font-size: 2rem;
  font-family: "Times New Roman", Times, serif;
  white-space: pre-line;
`;

const StyledWraper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  min-height: 93vh;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    max-width: 700px;
  }
`;

function BigPost({ match }) {
  const POST_CONTENT_QUERY = `query BlogPost {
  blogpost(filter: {id: {eq: "${match.params.id}"}}) {
    posttitle
    postcontent
  }
}`;

  const { loading, error, data } = useQuery(POST_CONTENT_QUERY, {});
  if (loading) return <Loader />;
  if (error) return "Something Bad Happened";

  return (
    <StyledWraper>
      <H1>{data.blogpost.posttitle}</H1>
      <P>{data.blogpost.postcontent}</P>
    </StyledWraper>
  );
}

export default BigPost;
