import React, { useState } from 'react'
import LogoCube from '../components/LogoCube'
import {useWindowDimensions} from '../utilities'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {

    const particlesInit = async (main) => {  
        await loadFull(main);
    };

    return (
        <section className="home">
            <h1 className="home__heading">Eric Canosa</h1>
            <h2 className="home__subheading">Creative Technologist</h2>


            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                background: {
                    color: {
                        value: "#4297A0",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "attract",
                        },
                        parallax: { 
                            enable: false, 
                            force: 60, 
                            smooth: 10 
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        attract: {
                            distance: 200,
                            duration: 0.4,
                            factor: 5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#F4EAE6",
                    },
                    line_linked: {
                        color: "#F4EAE6",
                        distance: 150,
                        enable: true,
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        attract: { enable: false, rotateX: 600, rotateY: 1200 },
                        bounce: false,
                        direction: "none",
                        enable: true,
                        out_mode: "out",
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: { 
                        density: { 
                            enable: true, 
                            value_area: 800 
                        }, 
                        value: 80 
                    },
                    opacity: {
                        anim: { 
                            enable: false, 
                            opacity_min: 0.1, 
                            speed: 1, 
                            sync: false 
                        },
                        random: false,
                        value: 0.2,
                    },
                    shape: {
                        character: {
                        fill: false,
                        font: "Verdana",
                        style: "",
                        value: "*",
                        weight: "400"
                        },
                        image: {
                        height: 100,
                        replace_color: true,
                        src: "images/github.svg",
                        width: 100
                        },
                        polygon: { nb_sides: 5 },
                        stroke: { color: "#000000", width: 0 },
                        type: "circle"
                    },
                    size: {
                        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
                        random: true,
                        value: 5
                    }
                },
                polygon: {
                    draw: { enable: false, lineColor: "#F4EAE6", lineWidth: 0.5 },
                    move: { radius: 10 },
                    scale: 1,
                    type: "none",
                    url: ""
                },
                detectRetina: true,
                }}
            />

        </section>


        
    );
}