import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Albums from "./Albums";
import Album from "./Album";
import Photo from "./Photo";

class App extends Component {

    render() {
    	return (
      		<div className="App">
        		<Router>
					<div>
						<Route path="/" exact component={Albums} />
						<Route path="/album/:id" component={Album} />
						<Route path="/photo" exact component={Photo} />
					</div>
        		</Router>
      		</div>
    	);
    }
}

export default App;
