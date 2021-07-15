import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import { Container } from '@material-ui/core';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
// Pages
import Home from 'pages/Home';
import Create from 'pages/Create';
import Note from 'pages/Note';

const Routes: React.FC = () => {
  console.log('');

  return (
    <>
      <NavBar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route exact path="/note" component={Note} />
          <Route path="/note/:id" component={Note} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default Routes;
