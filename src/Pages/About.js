import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from '../img/profile.jpg'

export default function About() {

    return (
        <section className="about">
            <h2 className="about__heading">Eric Canosa</h2>
            <h3 className="about__subheading">Creative Technologist</h3>
            <img className="about__image" src={profile} alt="eric canosa headshot" />
            <p className="about__text">
                I first got into computers with the release of DOOM in 1993 and it has been an awesome ride ever since. I've dabbled with hardware and networks, but my passion is developing user experiences that create novel opportunities for people to work, learn, and play.
            </p>
            <div className="about__links">
                <a className="about__link about__link_linkedin" href="https://www.linkedin.com/in/eric-canosa/" target="_blank">< FontAwesomeIcon className="about__icon about__icon_linkedin" icon={["fab", "linkedin-in"]} /> <p className="about__tooltip about__tooltip_linkedin">linkedin</p></a>
                <a href="https://drive.google.com/file/d/1SVMX3BShWaxJg3uSFFaW2KNWSPKKKoLM/view?usp=sharing" className="about__link about__link_resume" target="_blank"><FontAwesomeIcon className="about__icon about__icon_resume" icon={"file"} /><p className="about__tooltip about__tooltip_resume">resume</p></a>
            </div>
        </section>
    )
}