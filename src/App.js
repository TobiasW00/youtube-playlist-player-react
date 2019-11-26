import React, { Component } from 'react';
import './App.css';
import YouTube from './api/youtube';
import VideoList from './components/videolist/videolist';
class App extends Component {
  constructor()
  {
    super();
    this.state = {items:[]};
    YouTube.getYouTubeVideos().then((youtuberesult)=>{this.setState({items:youtuberesult.items.slice(0,youtuberesult.items.length-1)});return youtuberesult;}).then((result) =>
        {
          let cannelinfo = result.items[result.items.length-1];
          window.document.title = cannelinfo.snippet.title + " - " + cannelinfo.snippet.description;
        }
    );
    
  }
  render() {
    return (
      <div className="App">
        <VideoList items={this.state.items} />
      </div>
    );
  }
}

export default App;
