import { Close } from '@material-ui/icons';
import React from 'react';
import './SendMail.css'
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import firebase from './firebase';



const SendMail = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const db = firebase.collection('subs')


    const onSubmit = (formData) => {
        console.log(formData)

        db.add({
            to: formData.To,
            subject: formData.Message,
            time: new Date()
        })
        dispatch(closeSendMessage());
    }


    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close onClick={() => dispatch(closeSendMessage())}
                    className="sendMail__close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    name='to'
                    placeholder='To'
                    type='email'
                    {...register("To", { required: true })}
                />
                {errors.To && <p className="sendMail__error">To is required!</p>}

                <input
                    name='subject'
                    placeholder='Subject'
                    type='text'
                    // ref={register({ required: true })}
                    {...register("Subject", { required: true })}
                />
                {errors.Subject && <p className="sendMail__error">Subject is required!</p>}

                <input
                    name='message'
                    placeholder='Message'
                    type='text'
                    className='sendMail__message'
                    // ref={register({ required: true })}
                    {...register("Message", { required: true })}
                />
                {errors.Message && <p className="sendMail__error">Message is required!</p>}

                <div className="sendMail__options">
                    <Button
                        className='sendMail__send'
                        variant='contained'
                        color='primary'
                        type='submit'>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;
