import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from '../img/profile.jpg'

export default function About() {

    return (
        <section className="about">
            <div className="about__content-box">
                <header className="heading-row">
                    <div className="heading-row__content">
                        <img className="heading-row__image" src={profile} alt="eric canosa headshot" />
                        <div className="heading-row__text">
                            <h2 className="heading-row__heading">Eric Canosa</h2>
                            <h3 className="heading-row__subheading">Creative Technologist</h3>
                        </div>
                    </div>
                </header>
                <p className="about__text">
                    I first got into computers with the release of DOOM in 1993 and it has been an awesome ride ever since. I've dabbled with hardware and devops, but my passion is developing user experiences that create novel opportunities for people to work, learn, and play.
                </p>
                <div className="about__links">
                    <a className="about__link about__link_linkedin" href="https://www.linkedin.com/in/eric-canosa/" rel="noreferrer" target="_blank">< FontAwesomeIcon className="about__icon about__icon_linkedin" icon={["fab", "linkedin-in"]} /> <p className="about__tooltip about__tooltip_linkedin">linkedin</p></a>
                    <a href="https://drive.google.com/file/d/1SVMX3BShWaxJg3uSFFaW2KNWSPKKKoLM/view?usp=sharing" rel="noreferrer" className="about__link about__link_resume" target="_blank"><FontAwesomeIcon className="about__icon about__icon_resume" icon={"file"} /><p className="about__tooltip about__tooltip_resume">resume</p></a>
                </div>
            </div>
        </section>
    )
}