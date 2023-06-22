import React, { Component } from 'react';
import './App.css';
import DrumPad from './drumpad';

class App extends Component {
  constructor(props) {
    
    super(props);
    
    this.state = {
      innerPosition: "right",
      innerPosition2: "derecha",
      value: 50,
      volume: 0.5,
      drumPads1: [
        { label:'Q', soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3', description: 'aguanile'},
        { label:'W',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'pero tu que'},
        { label:'E',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'alalaleeee'},
        { label:'A',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'descripcion de un rugido'},
        { label:'S',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'hola'},
        { label:'D',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'qasfaga'},
        { label:'Z',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'pues no'},
        { label:'X',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'normal'},
        { label:'C',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'si te siente'},
      ],
      drumPads2: [
        { label:'Q',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'alo'},
        { label:'W',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'que mas pues'},
        { label:'E',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'quiere que le baile'},
        { label:'A',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'azucaaa'},
        { label:'S',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'que no cono'},
        { label:'D',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'en los anos 1600'},
        { label:'Z',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'ajena'},
        { label:'X',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',  description: 'ya no se que poner' },
        { label:'C',soundFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' , description: 'velgacion'},
      ],
      currentKey: false,
      displayText:""
    }
    
   
    
    
  }
  handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    this.setState({
      value,
      volume: value / 100,
      currentKey: null
    });
  }
  moveInnerPosition = () => {
    this.setState((prevState) =>({
      innerPosition: prevState.innerPosition === "left" ? "right" : "left",
        
    
    }))
    
  }
  moveInnerPosition2 = () => {
    this.setState((prevState) =>({
      innerPosition2: prevState.innerPosition2 === "izquierda" ? "derecha" : "izquierda"
    }))
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const keyPressed = event.key.toUpperCase(); // Obtén la tecla presionada en mayúsculas
    
    if(this.state.innerPosition2 === "izquierda") {

    switch (keyPressed) {
      case 'Q':
        this.drumPadRefQ.playSound();
        this.drumPadRefQ.handleMouseDown();
        ;
        this.setState({ currentKey: true });
        this.setState({ displayText: this.state.drumPads1[0].description });
        break;
      case 'W':
        this.drumPadRefW.playSound();
        this.drumPadRefW.handleMouseDown();
        
        this.setState({ currentKey: true });
        this.setState({ displayText: this.state.drumPads1[1].description });
        break;
      case 'E':
        this.drumPadRefE.playSound();
        this.drumPadRefE.handleMouseDown();
        
        this.setState({ currentKey: true });
        this.setState({ displayText: this.state.drumPads1[2].description });
        break;
      case 'A':
        this.drumPadRefA.playSound();
        this.drumPadRefA.handleMouseDown();
        
        this.setState({ currentKey: true });
        this.setState({ displayText: this.state.drumPads1[3].description });
        break;
      case 'S':
        this.drumPadRefS.playSound();
        this.drumPadRefS.handleMouseDown();
        
        this.setState({ currentKey: true });
        this.setState({ displayText: this.state.drumPads1[4].description });
        break;
      case 'D':
        this.drumPadRefD.playSound();
        this.drumPadRefD.handleMouseDown();
        
        this.setState({ currentKey: true });
        this.setState({ displayText: this.state.drumPads1[5].description });
        break;
      case 'Z':
        this.drumPadRefZ.playSound();
        this.drumPadRefZ.handleMouseDown();
        
        this.setState({ currentKey: true });
        this.setState({ displayText: this.state.drumPads1[6].description });
        break;
      case 'X':
        this.drumPadRefX.playSound();
        this.drumPadRefX.handleMouseDown();
        
        this.setState({ currentKey: true });
        this.setState({ displayText: this.state.drumPads1[7].description });
        break;
      case 'C':
        this.drumPadRefC.playSound();
        this.drumPadRefC.handleMouseDown();
        
        this.setState({ currentKey: true });
        this.setState({ displayText: this.state.drumPads1[8].description });
        break;
      default:
        break;
    }
  } else if (this.state.innerPosition2 === 'derecha') {
    
    switch (keyPressed) {
    case 'Q':
      this.drumPadRefQ.playSound();
      this.drumPadRefQ.handleMouseDown();
      
      this.setState({ currentKey: true });
      this.setState({ displayText: this.state.drumPads2[0].description });
      break;
    case 'W':
      this.drumPadRefW.playSound();
      this.drumPadRefW.handleMouseDown();
      
      this.setState({ currentKey: true });
      this.setState({ displayText: this.state.drumPads2[1].description });
      break;
    case 'E':
      this.drumPadRefE.playSound();
      this.drumPadRefE.handleMouseDown();
      
      this.setState({ currentKey: true });
      this.setState({ displayText: this.state.drumPads2[2].description });
      break;
    case 'A':
      this.drumPadRefA.playSound();
      this.drumPadRefA.handleMouseDown();
      
      this.setState({ currentKey: true });
      this.setState({ displayText: this.state.drumPads2[3].description });
      break;
    case 'S':
      this.drumPadRefS.playSound();
      this.drumPadRefS.handleMouseDown();
      
      this.setState({ currentKey: true });
      this.setState({ displayText: this.state.drumPads2[4].description });
      break;
    case 'D':
      this.drumPadRefD.playSound();
      this.drumPadRefD.handleMouseDown();
      
      this.setState({ currentKey: true });
      this.setState({ displayText: this.state.drumPads2[5].description });
      break;
    case 'Z':
      this.drumPadRefZ.playSound();
      this.drumPadRefZ.handleMouseDown();
      
      this.setState({ currentKey: true });
      this.setState({ displayText: this.state.drumPads2[6].description });
      break;
    case 'X':
      this.drumPadRefX.playSound();
      this.drumPadRefX.handleMouseDown();
      
      this.setState({ currentKey: true });
      this.setState({ displayText: this.state.drumPads2[7].description });
      break;
    case 'C':
      this.drumPadRefC.playSound();
      this.drumPadRefC.handleMouseDown();
      
      this.setState({ currentKey: true });
      this.setState({ displayText: this.state.drumPads2[8].description });
      break;
    default:
      break;
  }}  
    
  } 



  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  handleDrumPadClick = (label, description) => {
    
         this.setState({
      currentKey: true,
      displayText: description
    });}

 
 

  render(){
    const { innerPosition, innerPosition2, drumPads1, drumPads2, currentKey, displayText} = this.state;
    // let displayText = currentKey ? this.state.description : this.state.value
    
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="drum-container" id="drum-machine">
          <div  className="pad-bank" onKeyDown={this.handleKeyDown} tabIndex={0}>
          <DrumPad  id={drumPads1[0].label}ref={(ref) => (this.drumPadRefQ = ref)} volume={this.state.volume} label="Q" soundFile={ innerPosition2 === 'izquierda' ? drumPads1[0].soundFile : drumPads2[0].soundFile  }innerPosition={this.state.innerPosition} onClick={this.handleDrumPadClick} description={innerPosition2 === 'izquierda' ? drumPads1[0].description : drumPads2[0].description } />
<DrumPad id={drumPads1[1].label} ref={(ref) => (this.drumPadRefW = ref)}volume={this.state.volume} label="W" soundFile={ innerPosition2 === 'izquierda' ? drumPads1[1].soundFile : drumPads2[1].soundFile } innerPosition={this.state.innerPosition}onClick={this.handleDrumPadClick} description={innerPosition2 === 'izquierda' ? drumPads1[1].description : drumPads2[1].description }/>
<DrumPad  id={drumPads1[2].label}ref={(ref) => (this.drumPadRefE = ref)}volume={this.state.volume} label="E" soundFile={ innerPosition2 === 'izquierda' ? drumPads1[2].soundFile : drumPads2[2].soundFile } innerPosition={this.state.innerPosition}onClick={this.handleDrumPadClick} description={innerPosition2 === 'izquierda' ? drumPads1[2].description : drumPads2[2].description }/>
<DrumPad id={drumPads1[3].label} ref={(ref) => (this.drumPadRefA = ref)}volume={this.state.volume} label="A" soundFile={ innerPosition2 === 'izquierda' ? drumPads1[3].soundFile : drumPads2[3].soundFile } innerPosition={this.state.innerPosition}onClick={this.handleDrumPadClick} description={innerPosition2 === 'izquierda' ? drumPads1[3].description : drumPads2[3].description }/>
<DrumPad id={drumPads1[4].label} ref={(ref) => (this.drumPadRefS = ref)} volume={this.state.volume} label="S" soundFile={ innerPosition2 === 'izquierda' ? drumPads1[4].soundFile : drumPads2[4].soundFile } innerPosition={this.state.innerPosition}onClick={this.handleDrumPadClick} description={innerPosition2 === 'izquierda' ? drumPads1[4].description : drumPads2[4].description }/>
<DrumPad  id={drumPads1[5].label}ref={(ref) => (this.drumPadRefD = ref)}volume={this.state.volume} label="D"soundFile={ innerPosition2 === 'izquierda' ? drumPads1[5].soundFile : drumPads2[5].soundFile }  innerPosition={this.state.innerPosition}onClick={this.handleDrumPadClick} description={innerPosition2 === 'izquierda' ? drumPads1[5].description : drumPads2[5].description }/>
<DrumPad id={drumPads1[6].label} ref={(ref) => (this.drumPadRefZ = ref)}volume={this.state.volume} label="Z" soundFile={ innerPosition2 === 'izquierda' ? drumPads1[6].soundFile : drumPads2[6].soundFile } innerPosition={this.state.innerPosition}onClick={this.handleDrumPadClick} description={innerPosition2 === 'izquierda' ? drumPads1[6].description : drumPads2[6].description }/>
<DrumPad  id={drumPads1[7].label}ref={(ref) => (this.drumPadRefX = ref)}volume={this.state.volume} label="X" soundFile={ innerPosition2 === 'izquierda' ? drumPads1[7].soundFile : drumPads2[7].soundFile } innerPosition={this.state.innerPosition}onClick={this.handleDrumPadClick} description={innerPosition2 === 'izquierda' ? drumPads1[7].description : drumPads2[7].description }/>
<DrumPad  id={drumPads1[8].label}ref={(ref) => (this.drumPadRefC = ref)}volume={this.state.volume} label="C" soundFile={ innerPosition2 === 'izquierda' ? drumPads1[8].soundFile : drumPads2[8].soundFile } innerPosition={this.state.innerPosition}onClick={this.handleDrumPadClick} description={innerPosition2 === 'izquierda' ? drumPads1[8].description : drumPads2[8].description }/>
          </div>
          <div className="controls-container">
            <div className="control">
              <p>Power</p>
              <div className="select " onClick={this.moveInnerPosition}>
                
                <div className={`inner ${innerPosition}`} ></div>
              </div>
             
            </div>
            <div className='Display__container'>
                <p  id='display' className='Display__p'>{displayText}</p>
                
                </div>
               <div className='range__container'>
                 <input max={100} min={0} step={1} type="range" value= {this.state.value} onChange={this.handleChange} className='range'></input>

               </div>
                <div className='control'>
                <p>Bank</p>
                <div className="select " onClick={this.moveInnerPosition2}>
                
                <div className={`inner ${innerPosition2}`} ></div>
              </div>


                </div>
               

            <div></div>
            <div></div>
          </div>
        </div>
      </header>
    </div>
  );}

}

export default App;
