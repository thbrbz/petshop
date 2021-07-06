import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './paginas/Home';
import Post from './paginas/Post';
import Sobre from './paginas/Sobre';
import Page404 from './paginas/page404';
import Cabecalho from './components/Cabecalho';
import Categoria from './paginas/Categoria';

function App() {
  return (
  <>
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path='/categoria/:tipo'>
          <Categoria />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
