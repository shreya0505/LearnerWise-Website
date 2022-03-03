import React from 'react'
import DummyVideo from '../assets/DummyVideo.mp4'
import "../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react';

const Video = () => {
    return (
    <div>
    <Player playsInline > 
         <source src={DummyVideo}/>
         <BigPlayButton position="center" />
    </Player>
    </div>
  )
}

export default Video