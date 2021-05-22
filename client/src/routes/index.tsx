import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import NavBar from 'components/NavBar';
import Home from 'pages/Home';

const Routes: React.FC = () => {
  console.log('');

  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
