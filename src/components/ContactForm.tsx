import * as React from 'react';
import {ChangeEvent, useState} from 'react';

export const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [hasEmailError, setHasEmailError] = useState(false);
    const [hasContentError, setHasContentError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';

        setEmail(inputValue);
        setHasEmailError(isEmpty);
    };

    const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';

        setContent(inputValue);
        setHasContentError(isEmpty);
    };

    return (
        <div>
            { isSubmitted
                ? <SubmittedMessage />
                : <div className='contact-form'>
                    <form onSubmit={() => setIsSubmitted(true)}>
                        <p>メールアドレス（必須）</p>
                        <input
                            value={email}
                            onChange={(event) => handleEmailChange(event)}
                        />
                        {hasEmailError && <EmailErrorText/>}

                        <p>お問い合わせ内容（必須）</p>
                        <textarea
                            value={content}
                            onChange={(event) => handleContentChange(event)}
                        />
                        {hasContentError && <ContentErrorText/>}

                        <input type='submit' value='送信'/>
                    </form>
                </div>
            }
        </div>
    );
};

const EmailErrorText = () =>
    <p className='contact-message-error'>
        メールアドレスを入力してください
    </p>
const ContentErrorText = () =>
    <p className='contact-message-error'>
        お問い合わせ内容を入力してください
    </p>
const SubmittedMessage = () =>
    <div className='contact-submit-message'>
        送信完了
    </div>
