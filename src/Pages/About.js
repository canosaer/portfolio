import React, { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from '../img/profile.jpg'

export default function About() {
    const ref = useRef()

    // useEffect(() => {
    //     ref.current.parentElement.style.height = 'unset'
    //     ref.current.parentElement.style.overflowY = 'scroll'
    //     ref.current.parentElement.style.pointerEvents = 'auto'
    // }, []);

    return (
        <section className="about" ref={ref}>
            <img className="about__image" src={profile} alt="eric canosa headshot" />
            <p className="about__text">
                I first got into computers with the release of DOOM in 1993 and it has been an awesome ride ever since. I've dabbled with hardware and networks, but my passion is developing user experiences that create novel opportunities for people to work, learn, and play. I'm looking to take my creative technology skills to the next level at a company where I can stay at the cutting edge and make an impact.
            </p>
            <a className="about__link about__link_linkedin" href="https://www.linkedin.com/in/eric-canosa/" target="_blank">< FontAwesomeIcon className="about__icon about__icon_linkedin" icon={["fab", "linkedin-in"]} /></a>
            <a href="https://drive.google.com/file/d/1Yy7y3c6duyygCgrqAYbxROVfub4dSK3k/view?usp=sharing" className="about__link about__link_resume" target="_blank"><FontAwesomeIcon className="about__icon about__icon_resume" icon={"file"} /></a>
        </section>
    )
}