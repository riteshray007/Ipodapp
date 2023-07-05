import React, { Component } from 'react';




export default class Songplayer extends Component {
      
      
      componentDidUpdate(){
            // handles the play pause whenever playorpause props is updated 
            let target = document.getElementById('myaudio');
            if(this.props.playorpause === true){
                  target.play();
            }else{
                  target.pause();
            }
      }


      render() {
            const { details } = this.props;
            //  a simple component displaying the audio controls , images of album  and name of album  
            return (
                  <div className='submenupics'>
                        <h3> {details.name} </h3>
                        <img className='picinsong' src={details.image} />
                        <audio 
                        id='myaudio'
                        autoPlay
                        controls
                        src={details.link}
                        />
                  </div>
            )
      }
}
