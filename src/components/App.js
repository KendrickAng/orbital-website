import React from 'react';
import Homepage from './Homepage';
import Quickstartpage from './Quickstartpage';
import '../styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component{
  render() {
		return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/quickstart" component={Quickstartpage} />
          </Switch>
        </div>
      </BrowserRouter>
		);
	}
}


export default App;
