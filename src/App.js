import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color:'white'
}

let fakeServerData = {
  user: {
    name: 'Satwik',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Another playlist - the best!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Playlist - yeah!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      }
    ]
  }
};


class PlaylistCounter extends Component {
  render() {
    return(
      <div style={{...defaultStyle,width: '40%',display: 'inline-block'}}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    )
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div style={defaultStyle}>
        <img/>
        <input type='text'/>
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle,display: 'inline-block'}}>
        <img />
        <h3>Playlist name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    )
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style= {{...defaultStyle,'font-size':'54px'}}>Welcome {this.state.serverData.user.name}</h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>
            <Filter />
            <div style={{display:'flex', 'flex-flow':'row nowrap', justifyContent: 'space-around'}}>
              <Playlist />
              <Playlist />
              <Playlist />
              <Playlist />
            </div>
          </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
