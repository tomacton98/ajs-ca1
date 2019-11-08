/**
 * @Date:   2019-11-05T14:04:21+00:00
 * @Last modified time: 2019-11-08T14:03:49+00:00
 */



import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/home';
import CharacterIndex from './components/characterIndex';
import BookIndex from './components/bookIndex';
import HouseIndex from './components/houseIndex';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Route exact path="/" component = {Home} />
        <Route path="/characterindex" component = {CharacterIndex} />
        <Route path="/bookindex" component = {BookIndex} />
        <Route path="/houseindex" component = {HouseIndex} />
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
