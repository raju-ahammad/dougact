import React from 'react'
import ReactPlayer from 'react-player';
import videoURL from "../../Assets/Video/background.mp4"
import "./pages.css"
import NavMenu from '../Menu/NavMenu';
import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'threejs-meshline'


const vertices = []
for (let j = 0; j < Math.PI; j += (2 * Math.PI) / 100)
  vertices.push(new THREE.Vector3(Math.cos(j), Math.sin(j), 0))

const Home = () => {

    return (
        <div className="home">
           
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
