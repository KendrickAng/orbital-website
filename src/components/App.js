import React from 'react';
import Homepage from './Homepage';
import Quickstartpage from './Quickstartpage';
import Highscorespage from './Highscorespage';
import '../styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Main application served through public/index.js.
class App extends React.Component{
  render() {
		return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/quickstart" component={Quickstartpage} />
            <Route path="/highscores" component={Highscorespage} />
          </Switch>
        </div>
      </BrowserRouter>
		);
	}
}


export default App;
