import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
// import AddAlbum from './AddAlbum'
import './css/AddImage.css'

export class AddImage extends Component {
	state = {
		albumId: '',
		imageName: '',
		imageURL: '',
		albumName: ''
	}
	componentDidMount() {
		const id = this.props.match.params.albumid
		axios.get('http://localhost:3001/albums/' + id).then(resp => {
			console.log(resp.data)
			this.setState({
				albumName: resp.data.albumName
			})
		})
	}
	handleFormSubmit = (e) => {
		e.preventDefault()
	  	axios.post('http://localhost:3001/images', {
			  imageName: this.state.imageName,
			  albumId: this.props.match.params.albumid
		  }).then(resp => {
			this.props.history.push('/AddImage')
	  	}).catch(e => console.log(e)) 
	}
	handleChange = (e) => {
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
						{/* <input onChange={this.handleChange} type='text' value={this.props.match.params.albumid} name='albumId' placeholder='Album Id' /> */}
						<input onChange={this.handleChange} type='text' value={this.state.albumName} name='albumId' placeholder='Album Id' />
						<input onChange={this.handleChange} type='text' value={this.state.imageName} name='imageName' placeholder='Image Name' />
						<input onChange={this.handleChange} type='text' value={this.state.imageURL} name='imageURL' placeholder='Image Path' />
						<button tytpe='submit' className="save">Save</button>
						<button onClick={this.handleClick} type="button"className="back">Go Back</button>  
					</form>
				</div>
				{/* <AddAlbum /> */}
			</div>
		)
    }
};

export default AddImage;
