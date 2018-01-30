// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleClickBitrate = () => {
    // Update our state here...
    let newBitrate;
    (this.state.settings.bitrate === 8) ? newBitrate = 12 : newBitrate = 8;
    let currentSettings = this.state.settings
    this.setState({
      settings: {
        ...currentSettings,
        bitrate: newBitrate
      }
    })
  }

  handleClickResolution = () => {
    // Update our state here...
    let newResolution;
    (this.state.settings.video.resolution === "1080p") ? newResolution = "720p" : newResolution = "1080p";
    let currentSettings = this.state.settings
    this.setState({
      settings: {
        ...currentSettings,
        video: { resolution: newResolution }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickBitrate}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleClickResolution}>{this.state.settings.video.resolution}</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
