import React, { useState } from 'react';
import styled from 'styled-components';

const ContactMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ContactMeTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
`;

const ContactMeForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ContactMeLabel = styled.label`
    margin-top: 10px;
    font-size: 16px;
    color: #555;
`;

const ContactMeInput = styled.input`
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
`;

const ContactMeTextarea = styled.textarea`
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
`;

const ContactMeButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 18px;

    &:hover {
        background-color: red;
        color:white;
    }
`;

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        setSubmitted(true);
        e.preventDefault(); // Prevents the default form submission behavior
    };

    return (
        <ContactMeContainer>
            <ContactMeTitle>Contact Me</ContactMeTitle>
            {submitted ? (
                <div>Thank you for your message!</div>
            ) : (
                <ContactMeForm onSubmit={handleSubmit}>
                    <ContactMeLabel>
                        Name:
                        <ContactMeInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </ContactMeLabel>
                    <ContactMeLabel>
                        Email:
                        <ContactMeInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </ContactMeLabel>
                    <ContactMeLabel>
                        Message:
                        <ContactMeTextarea value={message} onChange={(e) => setMessage(e.target.value)} />
                    </ContactMeLabel>
                    <ContactMeButton type="submit">Submit</ContactMeButton>
                </ContactMeForm>
            )}
        </ContactMeContainer>
    );
}

export default ContactMe;
