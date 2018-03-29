import React, { Component } from 'react';
import axios from 'axios';

export class Album extends Component {
    state = {
        images: []
    }

    componentDidMount(props) {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp => {
            console.log(resp.data.images)
            this.setState({
                images: resp.data.images
            })
        })
    }

    render() {
        return (
            <div className="album-container">
                album page
            </div>
        )
    }
};

export default Album;
