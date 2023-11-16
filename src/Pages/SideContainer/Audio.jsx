import React, { Component } from "react";
import anthem from "../Audio/National_anthem.ogg";
import "./Audio.css"; // Import your CSS file

class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      volume: 0.5, // You can set the initial volume here (0.5 for 50% volume)
    };
    this.audioRef = React.createRef();
  }

  togglePlay = () => {
    const audio = this.audioRef.current;
    if (this.state.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  handleVolumeChange = (e) => {
    const volume = parseFloat(e.target.value);
    this.setState({ volume });
    this.audioRef.current.volume = volume;
  };

  render() {
    return (
      <div className="anthem_section">
        <h3>জাতীয় সংগীত</h3>

        <div className="audio-player">
          <audio ref={this.audioRef} src={anthem} controls={true}></audio>
          {/* Hide your custom controls */}
        </div>
      </div>
    );
  }
}

export default Audio;
