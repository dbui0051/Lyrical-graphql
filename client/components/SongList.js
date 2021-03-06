import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs'

class SongList extends Component {
	constructor(props){
		super(props)
		this.onSongDelete = this.onSongDelete.bind(this)
	}

	onSongDelete(id) {
		this.props.mutate({ variables: { id }})
		.then(() => this.props.data.refetch())
	}

	renderSongs() {
		return this.props.data.songs.map(({ id, title }) => {
			return (
				<li key={id} className="collection-item">
					<Link to={`/songs/${id}`}>
						{title}
					</Link>
					<i
						onClick={() => this.onSongDelete(id)}
						className="material-icons"
					>
						delete
					</i>
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<ul className="collection">
					{!this.props.data.loading && this.renderSongs()}
				</ul>
				<Link
				to="/songs/new"
				className="btn-floating btn-large red right"
				>
					<i className="material-icons">add</i>
				</Link>
			</div>
		)
	}
}

const mutation = gql`
	mutation DeleteSong($id: ID) {
	  deleteSong(id: $id){
	    id
	  }
	}
`

export default graphql(mutation)(
	graphql(query)(SongList)
);
