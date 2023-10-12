import "../styles/Contact.css";
import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/7969b1f0-68ea-11ee-80c8-136eb968d513";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Form response was not ok');
                }

                setSubmitted(true);
            })
            .catch((err) => {
                // Submit the form manually
                e.target.submit();
            });
    };

    if (submitted) {
        return (
                <div id="contact-wrapper">
                <h3>Contact.</h3>
                <div className="thanks">
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
                </div>
                </div>
        );
    }

    return (
        <div id="contact-wrapper">
            <h3>Contact.</h3>
            <div className="contact">
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
            >
                <div>
                    <input type="text" placeholder="Your name" name="name" required />
                </div>
                <div>
                    <input type="email" placeholder="Email" name="email" required />
                </div>
                <div>
                    <textarea placeholder="Your message" name="message" required />
                </div>
                <div>
                    <input type="submit" name="Submit"/>
                </div>
            </form>
            </div>
        </div>
    );
};

export default ContactForm;