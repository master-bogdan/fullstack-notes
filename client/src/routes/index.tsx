import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import { Container } from '@material-ui/core';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Home from 'pages/Home';

const Routes: React.FC = () => {
  console.log('');

  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default Routes;
