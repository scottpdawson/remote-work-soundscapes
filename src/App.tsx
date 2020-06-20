import React from 'react';
import './App.css';
import ReactSlider from 'react-slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { 
  faHeart,
  faBomb,
  faDove
} from '@fortawesome/free-solid-svg-icons'
import { sounds, backgrounds, twitterShareLink, facebookShareLink } from './Constants'

interface Track {
  title: string,
  src: string,
  icon: IconDefinition,
  isPlaying?: boolean,
  player?: any,
}

interface AppState {
  trackList: Track[]
}

interface MyProps {}

class App extends React.Component<MyProps, AppState> {
  
  constructor(props: any) {
    super(props)

    this.state = {
      trackList: sounds
    }
  }

  toggleAll(shouldPlay: boolean) {
    // turn all on or off 
    const { trackList } = this.state;

    trackList.forEach(track => {
      shouldPlay ? track.player.play() : track.player.pause();
    }, this);

    // update state for which one is playing now
    let updatedTrackList = trackList;
    updatedTrackList.forEach(track => {
      track.isPlaying = shouldPlay;
    }, this);
    this.setState({
      trackList: updatedTrackList,
    })
  }

  toggleTrack(track: any, index: number) {
    // update state for which one is playing now
    const { trackList } = this.state;
    let updatedTrackList = trackList;
    updatedTrackList[index].isPlaying = !updatedTrackList[index].isPlaying;
    this.setState({
      trackList: updatedTrackList,
    }, function() {
      trackList[index].isPlaying ? track.player.play() : track.player.pause()
    });
  }

  getlist = () => this.state.trackList.map((item: any, index: number) => {
    let thisTrack = this.state.trackList[index];
    return (
      <div className="playerWrapper">
        <div 
          className="playerContainer"
          key={index}
          onClick={() => this.toggleTrack(thisTrack, index) }

        >      
          <p className='playerTitle'>{item.title}</p>
          <div 
            className={`player ${thisTrack.isPlaying ? "isPlaying" : "isNotPlaying"}`}
            title={item.title}
          >
          <FontAwesomeIcon 
            size="4x" 
            className="player-icon" 
            icon={thisTrack.icon} 
          />    
          <audio 
            ref={ref => thisTrack.player = ref} 
            src={thisTrack.src}
            loop
            preload="auto"
          />
          </div>
        </div>
        {thisTrack.isPlaying && <div className="sliderWrapper">
          <ReactSlider
            className="volume-slider"
            thumbClassName="handle"
            trackClassName="track"
            min={0}
            max={1}
            step={.1}
            defaultValue={thisTrack.player.volume || 1}
            onChange={(volume) => thisTrack.player.volume = volume}
          />
        </div>}
      </div>
    );
  });

  getPercentPlaying = ():number => {
    if (this.state && this.state.trackList) {
      const numberPlaying = this.state.trackList.filter(x => x.isPlaying).length;
      const percentPlaying = numberPlaying / this.state.trackList.length * 100;
      return percentPlaying;
    }
    return 0;
  }

  getPercentAsIndex = () => {
    return Math.floor(this.getPercentPlaying() / 10);
  }

  getBackground = () => {
    return `${backgrounds[this.getPercentAsIndex()]}`;
  }

  render() {

    return (
      <>
        <main style={{ backgroundColor: this.getBackground() }}>
          <header>
            <h1>Work-From-Home Soundscapes</h1>
            <p>
              Ah, working remotely from a tranquil corner of your home. Is there anything better? Until the noises start, that is. Eliminating those is a key to mastering <a href="https://artofworkingremotely.com/book/" rel="noopener noreferrer" target="_blank">the art of working remotely</a>. Yes, this is a parody of quality ambient noise generators like <a href="https://www.noisli.com/" rel="noopener noreferrer" target="_blank">Noisli</a> and <a href="https://coffitivity.com/" rel="noopener noreferrer" target="_blank">Coffitivity</a>. Stick around if leaf blowers are your jam ... we won't judge!
            </p>
            <p><b>Current Status:</b> {this.getPercentPlaying().toFixed(0)}% insanity</p>
            {this.getPercentPlaying() !== 100 && 
              <button onClick={() => this.toggleAll(true)}><FontAwesomeIcon 
                icon={faBomb} 
              /> Wreck My Flow</button>
            }
            {this.getPercentPlaying() !== 0 && 
              <button onClick={() => this.toggleAll(false)}><FontAwesomeIcon 
                icon={faDove} 
              /> Restore My Peace</button>
            }
            <p>Did this made you laugh? Give it a share!</p>
            <div className="share-buttons">
              <a className="socialShare" href={twitterShareLink} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faTwitter} /> Tweet
              </a>
              <a className="socialShare" href={facebookShareLink} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faFacebook} /> Share
              </a>
            </div>
          </header>
          <section className="players">
            {this.getlist()}
          </section>
        </main>
        <footer>
          Made with <FontAwesomeIcon 
            icon={faHeart} 
            color="red"
            title="Love"
          /> by <a href="https://twitter.com/scottpdawson">@scottpdawson</a> and <a href="https://artofworkingremotely.com/book/">The Art of Working Remotely</a>. 
          Deployed from <a href="https://github.com/scottpdawson/remote-work-soundscapes"><FontAwesomeIcon icon={faGithub} title="Github" /></a> via <a href="https://www.netlify.com/">Netlify</a>.
        </footer>
      </>
    );
  }
}

export default App;