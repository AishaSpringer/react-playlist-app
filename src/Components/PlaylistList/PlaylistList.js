import React from 'react';
import Playlist from './Playlist';

export class PlaylistList extends React.Component {
    constructor(props) {
        super(props);
        this.playlistListItem = this.playlistListItem.bind(this);

        this.state = {
            playlists: []
        };
    }

    playlistListItem() {
        return (
            {this.props.getUserPlaylists()}
        )
    },

    // update playlist's state to array of the returned playlists using playlistId and name 
    this.setState({ 
        playlists: {playlistId, name}
    })

    render() {
        return(
            <div className="PlaylistList">
                <h3>{this.props.playlistListItem.name}</h3>
                {/* render list of playlistListItem components, passing down ID and name of each playlist - .map? */}
            </div>
        )
    }

    componentDidMount() {
        return getUserPlaylists();
    }
}

export default PlaylistList;