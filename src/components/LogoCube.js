import React, { useEffect, useRef, useState} from 'react';
import Cube from 'react-3d-cube';
// import { gsap } from "gsap";

const LogoCube = () => {

    const [ cubeWrapper, setCubeWrapper ] = useState(null)
    const [ cubeInitialized, setCubeInitialized ] = useState(false)
    const [ cubeLocked, setCubeLocked ] = useState(true)
    const [ ready, setReady ] = useState(false)

    const containerDiv = useRef();

    useEffect(() => {
        if(cubeWrapper && !cubeInitialized){
            cubeWrapper.classList.add('enter-transition')
            setCubeInitialized(true)
            cubeWrapper.classList.add('initial-cube')

            const timer = setTimeout(() => {
                cubeWrapper.classList.remove('enter-transition')
                cubeWrapper.classList.add('exit-transition')
                setReady(true)
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [cubeWrapper]);

    const unlockCube = () => {
        setCubeLocked(false)
        cubeWrapper.classList.remove('initial-cube')
        const timer = setTimeout(() => {
            if(cubeWrapper.classList.contains('exit-transition')) cubeWrapper.classList.remove('exit-transition')
            if(cubeWrapper.classList.contains('enter-transition')) cubeWrapper.classList.remove('enter-transition')
        }, 750);
        return () => clearTimeout(timer);
    }


    useEffect(() => {
        if(containerDiv.current){
            setCubeWrapper(containerDiv.current.firstChild.firstChild)
        }
    }, [containerDiv]);



    return (
        <>
            <div className="cube__slot" ref={containerDiv} onMouseDown={(cubeLocked && ready) ? unlockCube : null}
            style={{
                width: 100,
                height: 100,
            }}
            >
                <Cube size={100} index="front">
                    <div className="cube__content"><p className="cube__letter">E</p></div>
                    <div className="cube__content"><p className="cube__letter">C</p></div>
                    <div className="cube__content"><p className="cube__letter">E</p></div>
                    <div className="cube__content"><p className="cube__letter">C</p></div>
                    <div className="cube__content">
                        <div className="cube__logo">
                            <div className="e e_audiowide e_dark"> E
                                <div className="e__curve-up e__curve-up_dark"></div>
                                <div className="e__curve-down e__curve-down_dark"></div>
                                <div className="e__curve-across e__curve-across_dark"></div>
                            </div>
                        </div>
                    </div>
                    <div className="cube__content">
                        <div className="cube__logo">
                            <div className="e e_audiowide e_dark"> E
                                <div className="e__curve-up e__curve-up_dark"></div>
                                <div className="e__curve-down e__curve-down_dark"></div>
                                <div className="e__curve-across e__curve-across_dark"></div>
                            </div>
                        </div>
                    </div>
                </Cube>
            </div>
        </>
    );
}

export default LogoCube