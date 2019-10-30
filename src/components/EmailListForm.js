import React, { useState } from 'react';
import styles from './EmailListForm.module.scss';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Button from "../components/button"

const EmailListForm = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        addToMailchimp(email)
            .then((data) => {
                setSuccess(true)
            })
            .catch((error) => {
                // Errors in here are client side
                // Mailchimp always returns a 200
            });
    };

    const handleEmailChange = (event) => {
        setEmail(event.currentTarget.value);
    };
    return (
        !success ?
            <form onSubmit={handleSubmit} className={styles.EmailListForm} >
                <h2>Stay in the know!</h2>
                <div className={styles.Wrapper}>
                    <input
                        placeholder="Email address"
                        name="email"
                        type="text"
                        onChange={handleEmailChange}
                    />
                    <Button type="submit">Subscribe!</Button>

                </div>
            </form >
            :
            <div className={styles.EmailListForm}>
               <h2>Success! Check your email address for a welcome email!</h2>
            <Button onClick={() => setSuccess(false)}>Subscribe a friend!</Button>
            </div>
    )
};

export default EmailListForm;