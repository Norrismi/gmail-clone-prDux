import { Checkbox, IconButton } from '@material-ui/core';
import { MoreVert, Redo, ArrowDropDown, ChevronLeft, KeyboardHide, Settings, ChevronRight, Inbox, People, LocalOffer } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import './EmailList.css'
import EmailRow from './EmailRow'
import Section from './Section'
import firebase from './firebase';

const Emaillist = () => {
    const [emails, setEmails] = useState([])

    const db = firebase.collection('emails')


    useEffect(() => {
        db.orderBy('time', 'desc').onSnapshot
            (snapshot => setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))))
    }, [])

    return (
        <div className='emailList'>
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailLest__settinfRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>

                    <IconButton>
                        <ChevronRight />
                    </IconButton>

                    <IconButton>
                        <KeyboardHide />
                    </IconButton>

                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={Inbox} title='Primary' color='red' selected />
                <Section Icon={People} title='Social' color='#1A73E8' />
                <Section Icon={LocalOffer} title='Promotions' color='green' />
            </div>
            <div className="emailList__list">
                {emails.map(({ id, data: { to, subject, message, time } }) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(time?.seconds * 1000).toUTCString()}
                    />
                ))}
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a test This is a test This is a test This is a test'
                    time='10am'

                />

                <EmailRow
                    title='Twitch'
                    subject='What up!!!'
                    description='This is a test This is a test This is a test This is a test'
                    time='11am'

                />

                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a test This is a test This is a test This is a test'
                    time='10am'

                />

                <EmailRow
                    title='Twitch'
                    subject='What up!!!'
                    description='This is a test This is a test This is a test This is a test'
                    time='11am'

                />

                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a test This is a test This is a test This is a test'
                    time='10am'

                />

                <EmailRow
                    title='Twitch'
                    subject='What up!!!'
                    description='This is a test This is a test This is a test This is a test'
                    time='11am'

                />

                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a test This is a test This is a test This is a test'
                    time='10am'

                />

                <EmailRow
                    title='Twitch'
                    subject='What up!!!'
                    description='This is a test This is a test This is a test This is a test'
                    time='11am'

                />

                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a test This is a test This is a test This is a test'
                    time='10am'

                />

                <EmailRow
                    title='Twitch'
                    subject='What up!!!'
                    description='This is a test This is a test This is a test This is a test'
                    time='11am'

                />
            </div>
        </div>
    );
}

export default Emaillist;
