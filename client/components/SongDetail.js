import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchSong from '../queries/fetchSong'

class SongDetail extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div>
				<h3>Song Detail</h3>
			</div>
		)
	}
}

export default SongDetail
