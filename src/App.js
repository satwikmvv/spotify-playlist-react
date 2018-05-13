import React, { Component } from 'react';
import './App.css';

let defaultTextColor = 'white'
let defaultStyle = {
  color:defaultTextColor
}

class Aggregate extends Component {
  render() {
    return(
      <div style={{...defaultStyle,width: '40%',display: 'inline-block'}}>
        <h2>Content</h2>
      </div>
    )
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
      <div style={{...defaultStyle,display: 'inline-block', width: '25%'}}>
        <img />
        <h3>Playlist name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    let name="satwik"
    let color='green'
    let stl= {'text-shadow': '6px 6px 0px rgba(0,0,0,0.2)', 'color': 'blue'}
    return (
      <div className="App">
        <h1 style= {stl}>Welcome {name}</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
