import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


export default function Contact() {

    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [parts, setParts] = useState([])

    const ContactSchema = Yup.object().shape({
        subject: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
      });

    const handleMail = (enabled) => {
        if(enabled) setParts(["@", 'com', 'canosaer', 'gmail', ".", ])
        else setParts([])
    }

    return (
        <section className="contact">
            <h1 className="contact__heading">Contact Me</h1>
            <h2 className="contact__subjeading">You can email me at <span className="contact__at">&#64;</span></h2>
            <Formik
                initialValues={{
                    subject: '',
                    message: '',
                }}
                validationSchema={ContactSchema}
                >
                {({ errors, touched }) => (
                    <Form className="contact-form">
                        <label className="contact-form__label contact-form__label_subject" htmlFor="subject">Subject</label>
                        <Field value={subject} onChange={(e) => setSubject(e.target.value)} className="contact-form__input contact-form__input_subject" name="subject" />
                        <div className={errors.subject && touched.subject ? "contact-form__error contact-form__error_subject" : "contact-form__error contact-form__error_subject transparent"}>{errors.subject}</div>
                        <label className="contact-form__label contact-form__label_message" htmlFor="message">Message</label>
                        <Field value={message} onChange={(e) => setMessage(e.target.value)} className="contact-form__input contact-form__input_message" name="message" />
                        <div className={errors.message && touched.message ? "contact-form__error contact-form__error_message" : "contact-form__error contact-form__error_message transparent"}>{errors.message}</div>
                        <a
                            onMouseEnter={ () => handleMail(true) }
                            onMouseLeave={ () => handleMail(false) }
                            href={`mailto:${parts[2]}${parts[0]}${parts[3]}${parts[4]}${parts[1]}?subject=${subject}&body=${message}`} 
                            className="contact-form__button">
                                Submit
                        </a>
                    </Form>
                )}
            </Formik>
        </section>
    )
}