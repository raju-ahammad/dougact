import React from 'react'
import Particle from "react-particles-js";
import particlesConfig from "../../Assets/particlesConfig.json";
import "./liquid.css"

const ParticleAnim = () => {
    return (
        <div className="particle">
            <Particle params={particlesConfig} className="App-particles__container" />
        </div>
    )
}

export default ParticleAnim
