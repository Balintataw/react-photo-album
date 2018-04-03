import React, { Component } from 'react'
import Sidebar from './Sidebar'
import './css/AddAlbum.css'
import axios from 'axios'

export class AddAlbum extends Component {
    state = {
        albumName: ''
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/albums', this.state).then(resp => {
            this.props.history.push('/AddAlbum')
        }).catch(e => console.log(e))
        this.props.history.goBack()     
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
		this.props.history.goBack()
	}
    render() {
        return (
            <div className="add-album-container">
            <Sidebar />
                <div className="add-album-container-right">
                    <form onSubmit={this.handleFormSubmit} id="form-container">
                    <label>Add a new album</label>        {/* make proper labels */}
                        <input onChange={this.handleChange} type='text' value={this.state.albumName} name='albumName' placeholder='Album name' />
                        <button tytpe='submit' className="save">Save</button>
						<button onClick={this.handleClick} type="button"className="back">Go Back</button>  
                    </form>
                </div>
            </div>
        )
    }
};

export default AddAlbum;
