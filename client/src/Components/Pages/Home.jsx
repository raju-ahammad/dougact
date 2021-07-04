import React from 'react'
import ReactPlayer from 'react-player';
import videoURL from "../../Assets/Video/background.mp4"
import "./pages.css"
import NavMenu from '../Menu/NavMenu';

import BoxAnim from "../Animation/BoxAnim"
const Home = () => {

    return (
        <div className="home">
            <div className="home__meshline">
                <BoxAnim/>
            </div>
            <div className="overlay">
               
            </div>
          <ReactPlayer
            url={videoURL}
            playing
            loop
            muted
            width="100%"
            height="100vh"
            style={{ position: "absolute "}}
            />
            <NavMenu />
        </div>
    )
}

export default Home
