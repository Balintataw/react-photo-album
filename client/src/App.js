import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import Albums from "./Albums";
import Album from "./Album";
import Photo from "./Photo";

class App extends Component {

    render() {
    	return (
			<Provider store={store}>
      		<div className="App">
        		<Router>
					<div>
						<Route path="/" exact component={Albums} />
						<Route path="/album/:id" component={Album} />
						<Route path="/photo/:id" component={Photo} />
					</div>
        		</Router>
      		</div>
			  </Provider>
    	);
    }
}

export default App;
