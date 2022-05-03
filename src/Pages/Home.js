import React, { useState, useEffect, useRef } from 'react'
import LogoCube from '../components/LogoCube'
import {useWindowDimensions} from '../utilities'
import gsap from 'gsap'

export default function Home() {
    const canvas = useRef();
    const q = gsap.utils.selector(canvas);
    const tl = useRef();
    const width = useWindowDimensions().width;
    const whiteLines = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef()]
  
    // useEffect(() => {       
        // www.youtube.com/watch?v=PNL9DaZgHpU
    //     console.log(width)     
    //     tl.current = gsap.timeline()
    //         .from(q(".circle1"), {
    //             x: width,
    //             duration: 5,
    //         })
    // }, []);
    
    return (
        <>
            <section className="home" ref={canvas}>
                <LogoCube />
                <div className="white-circle">
                    {/* {whiteLines.map((line, i) => {
                        const key = `white-line--${i}`
                        const rotation = i*20
                        const style = {
                            transform: `rotate(${rotation}deg`,

                        }

                        return(
                            <div key={key} className="white-line" style={style}></div>
                        )
                    })} */}
                </div>
            </section>
        </>
    )
}