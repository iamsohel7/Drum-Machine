import React from 'react';
import  './DrumPads.css';



class DrumPads extends React.Component{
   constructor(props){
       super(props);
       this.state={
         
       }
       this.audio = React.createRef(); 
   } 

   componentDidMount(){
      this.audio.current.addEventListener('ended', (e) =>{
        const parent = this.audio.current.parentNode;
        parent.classList.remove('active');
      } )
   }

   playSound = () => {
    
    this.audio.current.play();
   
    const id = this.audio.current.id;

    const parent = this.audio.current.parentNode;
    parent.classList.add('active');
   
    const display = parent.parentNode;
    display.querySelector('h1').innerText = id;
}
   
   render(){
    return(
        <div className="drum-pad" onClick={this.playSound}>
             {this.props.keyTrigger}
             <audio ref={this.audio} src={this.props.audio} className="clip" id={this.props.keyTrigger}/>
        </div>
             )
  }
}

document.addEventListener('keydown', (e) =>{
          const id = e.key.toUpperCase();
          const audio = document.getElementById(id);
          if(audio){
            audio.currentTime=0;
            const parent = audio.parentNode;
            parent.classList.add('active');
            audio.play();
         
            const display = parent.parentNode;
            display.querySelector('h1').innerText = id;
          }
})

export default DrumPads;