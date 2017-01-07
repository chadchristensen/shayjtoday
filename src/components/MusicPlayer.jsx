import React, { Component } from 'react';
require('./MusicPlayer.scss');

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: 0,
      currentSongDuration: 0,
      isPlaying: false,
      currentVolume: .5,
    }
  }

  componentDidMount() {
    let audioFile = document.getElementById("myAudio")
    {console.log("Audio element: ", audioFile)}

    let duration = audioFile.readyState
    {console.log("Duration: " + duration)}
  }

  goToNext() {
    if (this.state.currentSong === (songList.length - 1)) {
      this.setState({
        currentSong: 0,
      })
    } else {
      this.setState({
        currentSong: this.state.currentSong + 1,
      })
    }

    if(this.state.isPlaying) {
      this.pause()
      this.load()
      this.play()
    }

  }

  goToPrev() {

    if (this.state.currentSong === 0) {
      this.setState({
        currentSong: songList.length - 1,
      })
    } else {
      this.setState({
        currentSong: this.state.currentSong - 1,
      })
    }

    if (this.state.isPlaying) {
      this.pause()
      this.load()
      this.play()
    }


  }

  play() {
    document.getElementById("myAudio").play()
  }

  pause() {
    document.getElementById("myAudio").pause()
  }

  load() {
    document.getElementById("myAudio").load()
  }

  togglePlay() {
    let targetSongSrc = document.getElementById("myAudio").currentSrc;
    let targetSongSrcFileName = targetSongSrc.split('/')[targetSongSrc.split('/').length - 1];

    let sourceSongSrc = songList[this.state.currentSong].audioSrc;
    let sourceSongSrcFileName = sourceSongSrc.split('/')[sourceSongSrc.split('/').length - 1];

    {console.log("isPlaying is: " + this.state.isPlaying)}
    this.setState({isPlaying: !this.state.isPlaying });
    {console.log("isPlaying is: " + this.state.isPlaying)}
    if (this.state.isPlaying) {
      this.pause()
    } else if (sourceSongSrcFileName !== targetSongSrcFileName){
      this.load()
      this.play()
    } else {
      this.play()
    }
    {console.log("isPlaying is: " + this.state.isPlaying)}
  }

  renderAudio() {
    return (
      <audio id="myAudio" onCanPlayThrough={this.updateDuration.bind(this)}>
        <source src={this.getAudioTrack()} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    )
  }

  getAudioTrack() {
    return (
      songList[this.state.currentSong].audioSrc
    )
  }

  renderAlbumInfo() {
    return (
      <div id="album-info">
        <div id="album-artwork">
          <img src={songList[this.state.currentSong].thumb} alt="" />
        </div>
        <div id="album-text">
          <span id="album-title">{songList[this.state.currentSong].album}</span>
          <br/>
          <span id="track-title">{songList[this.state.currentSong].title}</span>
        </div>
      </div>
    )
  }

  renderAudioControls() {
    return (
      <div id="audio-controls">
        <i onClick={this.goToPrev.bind(this)} className="fa fa-step-backward"></i>
        <i onClick={this.togglePlay.bind(this)} className={this.state.isPlaying ? "fa fa-pause" : "fa fa-play"}></i>
        <i onClick={this.goToNext.bind(this)} className="fa fa-step-forward"></i>
      </div>
    )
  }

  updateDuration() {
    let duration = document.getElementById("myAudio").duration
    this.setState({currentSongDuration: duration})
    {console.log("When canPlayThrough is fired, duration is " + duration)}
  }

  renderProgress() {
    let d = Number(this.state.currentSongDuration);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    let formattedDuration = ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);

    return (
      <div id="audio-duration">
        {this.state.currentSongDuration ? formattedDuration : "0:00"}
      </div>
    )
  }

  render() {
    return (
      <div id="music-player">
        <div className="container">
          {this.renderAudio()}
          {this.renderAlbumInfo()}
          {this.renderAudioControls()}
          {this.renderProgress()}
        </div>
      </div>

    );
  }
}

export default MusicPlayer;
