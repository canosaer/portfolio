import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from '../img/profile.jpg'

export default function About() {

    return (
        <section className="about">
            <div className="about__heading-row about__heading-row_mobile">
                <h2 className="about__heading">Eric Canosa | Creative Technologist</h2>
            </div>
            <div className="about__heading-row about__heading-row_desktop">
                <h2 className="about__heading">Eric Canosa</h2>
                <h3 className="about__subheading">Creative Technologist</h3>
            </div>
            <img className="about__image" src={profile} alt="eric canosa headshot" />
            <p className="about__text">
                I first got into computers with the release of DOOM in 1993 and it has been an awesome ride ever since. I've dabbled with hardware and networks, but my passion is developing user experiences that create novel opportunities for people to work, learn, and play. I'm looking to take my creative technology skills to the next level at a company where I can stay at the cutting edge and make an impact.
            </p>
            <div className="about__links">
                <a className="about__link about__link_linkedin" href="https://www.linkedin.com/in/eric-canosa/" target="_blank">< FontAwesomeIcon className="about__icon about__icon_linkedin" icon={["fab", "linkedin-in"]} /> <p className="about__tooltip about__tooltip_linkedin">linkedin</p></a>
                <a href="https://drive.google.com/file/d/1Yy7y3c6duyygCgrqAYbxROVfub4dSK3k/view?usp=sharing" className="about__link about__link_resume" target="_blank"><FontAwesomeIcon className="about__icon about__icon_resume" icon={"file"} /><p className="about__tooltip about__tooltip_resume">resume</p></a>
            </div>
        </section>
    )
}