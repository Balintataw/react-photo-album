import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import './App.css'
import Albums from "./Albums"
import Album from "./Album"
import Photo from "./Photo"
import AddImage from "./AddImage"

class App extends Component {
	componentDidMount() {
		document.title ="Image-in"
	}

    render() {
    	return (
			<Provider store={store}>
      		<div className="App">
        		<Router>
					<div>
						<Route path="/" exact component={Albums} />
						<Route path="/album/:id" component={Album} />
						<Route path="/photo/:id" component={Photo} />
						<Route path="/addimage/" component={AddImage} />
						{/* <Route path="/removeimage/" component={RemoveImage} /> */}
					</div>
        		</Router>
      		</div>
			  </Provider>
    	);
    }
}

export default App;
