import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'

export class AddImage extends Component {
	state = {
		albumId: 0,
		imageName: '',
		imageURL: ''
	}
	handleFormSubmit = (e) => {
		e.preventDefault()
	  axios.post('http://localhost:3001/images', this.state).then(resp => {
		  this.props.history.push('/AddImage')
	  }).catch(e => console.log(e)) 
	}
	handleChange = (e) => {
		console.log(typeof e.target.value)
		console.log(typeof e.target.name)
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleClick = (e) => {
		e.preventDefault();
		this.props.history.goBack()
	}
	
    render() {
		return (
			<div className="addImage-container">
     		    <Sidebar />
				<div className="addImage-container-right">
					<form onSubmit={this.handleFormSubmit} id="form-container">
						<input onChange={this.handleChange} type='text' value={this.state.albumId} name='albumId' placeholder='Album Id' />
						<input onChange={this.handleChange} type='text' value={this.state.imageName} name='imageName' placeholder='Image Name' />
						<input onChange={this.handleChange} type='text' value={this.state.imageURL} name='imageURL' placeholder='Image Path' />
						<button tytpe='submit'>Save</button>
						<button onClick={this.handleClick} type="button">Go Back</button>  
					</form>
				</div>
			</div>
		)
    }
};

export default AddImage;
