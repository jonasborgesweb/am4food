import React from 'react';
import {Switch,Route} from 'react-router-dom';

import SingIn from '../pages/SingIn'

const Routes:React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
  </Switch>
)

export default Routes;