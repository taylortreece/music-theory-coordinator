import React from 'react'
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar.js'
import SongWorkshop from './containers/SongWorkshop';
import OtherResources from './containers/OtherResources';
import LearnTheory from './containers/LearnTheory';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={SongWorkshop} />
            <Route exact path="/theory-information" component={LearnTheory} />
            <Route exact path="/other-resources" component={OtherResources} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
