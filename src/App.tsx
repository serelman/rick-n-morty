import React from 'react';
import { ROUTES } from './constants/routes';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import {
  CharacterProfile,
  Home
} from "./pages";
import { NewCharacter } from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <Home/>
        </Route>
        <Route path={ROUTES.CHARACTERS_FILTERED}>
          <Home/>
        </Route>
        <Route path={ROUTES.CHARACTER_PROFILE}>
          <CharacterProfile/>
        </Route>
        <Route path={ROUTES.NEW_CHARACTER}>
          <NewCharacter/>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
