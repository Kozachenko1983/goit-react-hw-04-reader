import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import publications from '../../assets/publications.json';
import Reader from '../Reader/Reader';

const App = () => {
  const ReaderWrapper = props => <Reader items={publications} {...props} />;
  return (
    <Switch>
      <Route exact path="/reader" component={ReaderWrapper} />
      <Redirect from="/" to="/reader" />
    </Switch>
  );
};

export default App;
