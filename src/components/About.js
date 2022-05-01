import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {

    return(
        <section className="about" id="about">
            <h3 className="about__heading"><a className="about__link" href="https://www.linkedin.com/in/eric-canosa/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin-in"]} /></a><span className="about__heading-text">About Me</span></h3>
            <p className="about__text">
                I first got into computers with the release of DOOM in 1993 and it has been an awesome ride ever since. I've dabbled with hardware and networks, but my passion is developing user experiences that create novel opportunities for people to work, learn, and play. I'm looking to take my creative technology skills to the next level at a company where I can stay at the cutting edge and make an impact.
            </p>
        </section>
    )
}