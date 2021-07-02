import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Posts from "./Pages/Posts";
import Hero from "./Pages/Hero";
import BigPost from "./Pages/BigPost";
import Nav from "./components/Nav";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    text-align: center;
    color: black;
    font-size: 1.5rem;
    padding: .5rem;
  }

  li {
    margin: 1rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Hero}></Route>
          <Route path="/posts" exact component={Posts}></Route>
          <Route path="/posts/:id" component={BigPost} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
