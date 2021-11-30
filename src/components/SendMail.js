import { Close } from '@material-ui/icons';
import React from 'react';
import './SendMail.css'
import { IconButton } from '@material-ui/core';

const Sendmail = () => {
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className="sendMail__close" />
            </div>
            <form>

                <input type='text' />
                <input type='text' />
                <input type='text' />

                <div className="sendMail__options">
                    <IconButton>Send</IconButton>
                </div>
            </form>
        </div>
    );
}

export default Sendmail;
