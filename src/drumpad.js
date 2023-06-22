import React, {Component} from 'react';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    
    this.audioRef = React.createRef();
    this.state = {
      clickEffect: false,
    };
  }

  handleMouseDown = () => {
   
    if (this.props.innerPosition === 'left') {return;}
    
    if (this.state.clickEffect) {return;}

    setTimeout(this.handleMouseUp, 100);

    this.setState({ clickEffect: true });

    const { current: audioElement } = this.audioRef;
    audioElement.volume = this.props.volume;
    audioElement.currentTime = 0;
    audioElement.play();
  };
  handleMouseUp = () => {
    this.setState({ clickEffect: false });
    
  }

  
  playSound = () => {
    
    const {innerPosition, audioFile,} = this.props;
    
    
    const audio = new Audio(audioFile);
      audio.play();}
      handleClick = () => {
        const { label, description, onClick } = this.props;
        onClick(label, description);
      }
    

  render() {
    const  {clickEffect}  = this.state;
    const className = clickEffect ? "click__effect" : "";
    const { soundFile, id } = this.props;

    return (
      <div
        className={`drum-pad ${className}`}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        id="audio"
        onClick={this.handleClick}
        

        
      >
        {this.props.label}
        <audio id={id}className='clip'ref={this.audioRef} src={soundFile} crossOrigin='anonymous' preload='auto'/>
      </div>
    );
  }
}

export default DrumPad;