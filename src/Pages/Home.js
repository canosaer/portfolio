import React, { Component, useState, useEffect, useRef } from 'react'
import LogoCube from '../components/LogoCube'
import {useWindowDimensions} from '../utilities'

import FluidAnimation from "../react-fluid-animation";
import random from "random";


const defaultConfig = {
    textureDownsample: 1,
    densityDissipation: 1,
    velocityDissipation: 0.99,
    pressureDissipation: 0.93,
    pressureIterations: 25,
    curl: 30,
    splatRadius: 0.015
};

  
export default class Home extends Component {
state = {
    config: {
    ...defaultConfig
    }
};

componentDidMount() {
    this._reset();
}

render() {
    const { config } = this.state;

    return (
    <div
        style={{
        height: "100vh",
        pointerEvents: "none"
        }}
    >
        <FluidAnimation config={config} animationRef={this._animationRef} />

        <div
            style={{
                position: "absolute",
                zIndex: 1,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: "1em",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                pointerEvents: "none",
            }}
        >
            <h1 className="home__heading">Eric Canosa</h1>
        </div>
    </div>
    );
}

_animationRef = ref => {
    this._animation = ref;
    this._reset();
};

_onUpdate = config => {
    this.setState({ config });
};

_onClickRandomSplats = () => {
    this._animation.addSplats((5 + Math.random() * 20) | 0);
};

_onReset = () => {
    this.setState({ config: { ...defaultConfig } });
};

_reset() {
    if (this._animation && window.innerWidth < 455) {
        this._animation.addRandomSplats(random.int(3, 5));
    }
    else if (this._animation && window.innerWidth < 768) {
        this._animation.addRandomSplats(random.int(3, 7));
    }
    else if(this._animation && window.innerWidth < 1200){
        this._animation.addRandomSplats(random.int(8, 9));
    }
    else if(this._animation && window.innerWidth < 1700){
        this._animation.addRandomSplats(random.int(10, 19));
    }
    else if(this._animation){
        this._animation.addRandomSplats(random.int(10, 24));
    }
}
}
