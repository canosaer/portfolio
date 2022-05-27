import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


export default function Contact() {

    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [parts, setParts] = useState([])
    const [submit, setSubmit] = useState(false)

    const ContactSchema = Yup.object().shape({
        subject: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
      });

    const handleMail = (enabled) => {
        if(enabled){
            setParts(["@", 'com', 'canosaer', 'gmail', ".", ])
            setSubmit(true)
        } 
        else{
            setParts([])
            setSubmit(false)
        } 
    }

    return (
        <section className="contact">
            <div className="contact__content-box">
                <h1 className="contact__heading">Contact Me</h1>
                <h2 className="contact__subheading"><span className="contact__at">&#64;</span></h2>
                <Formik
                    initialValues={{
                        subject: '',
                        message: '',
                    }}
                    validationSchema={ContactSchema}
                    >
                    {({ touched }) => (
                        <Form className="form">
                            <label className="form__label form__label_subject" htmlFor="subject">Subject <span className={!subject && (touched.message || submit) ? "form__error form__error_subject" : "form__error form__error_subject transparent"}>(required)</span></label>
                            <Field value={subject} onChange={(e) => setSubject(e.target.value)} className="form__input form__input_subject" name="subject" as="textarea" />
                            <label className="form__label form__label_message" htmlFor="message">Message <span className={!message && (touched.message || submit) ? "form__error form__error_message" : "form__error form__error_message transparent"}>(required)</span></label>
                            <Field value={message} onChange={(e) => setMessage(e.target.value)} className="form__input form__input_message" name="message" as="textarea"/>
                            <a
                                onMouseEnter={ () => handleMail(true) }
                                onMouseLeave={ () => handleMail(false) }
                                href={subject && message ? `mailto:${parts[2]}${parts[0]}${parts[3]}${parts[4]}${parts[1]}?subject=${subject}&body=${message}` : null} 
                                className="form__button">
                                    Send
                            </a>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}