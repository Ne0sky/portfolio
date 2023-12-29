import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Lottie from 'lottie-react';
import lottie_contact from '../data/lottie_contact.json'
import { FaRegPaperPlane } from "react-icons/fa";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace these values with your own email.js service details
        const serviceId = 'service_f21p4cv';
        const templateId = 'template_mt9wwan';
        const publickey = 'VitvKMNrWonzZTLkY';

        const template_params = {
            from_name : name,
            from_email : email,
            to_name: 'Akash Dey',
            message : message
        }

        emailjs.send(serviceId, templateId, template_params, publickey)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                // Add any success message or redirect here
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                // Add any error handling here
            });

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='w-full px-4 pt-16 pb-32 '>
            <h2 className='font-tertiary font-medium text-4xl lg:text-5xl  text-center relative'>Contact</h2>
            <p className=' font-medium  text-center font-tertiary'>Drop me a line</p>
            <div className='flex flex-col  lg:flex-row w-full justify-center items-center gap-8'>
            <Lottie className='w-[450px] relative z-20' animationData={lottie_contact} loop={true} />         
               <form className=' flex gap-2 font-teertiary flex-col w-[90%] lg:w-1/3'onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                <label className='text-xl font-medium font-tertiary' htmlFor="name">Name</label>
                <input type="text" className='p-2 rounded-xl font-tertiary' placeholder='your name' id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                <label className='text-xl font-medium font-tertiary' htmlFor="email">Email</label>
                <input type="email" className='p-2 rounded-xl font-tertiary' id="email" placeholder='your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                <label className='text-xl font-medium font-tertiary' htmlFor="message">Message</label>
                <textarea id="message" className='h-44 rounded-xl font-tertiary p-4' placeholder='Enter your messsage' value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className='p-2 flex items-center gap-2  justify-center bg-indigo-500 rounded-xl w-1/3 text-white font-tertiary' type="submit ">Send<FaRegPaperPlane/></button>
            </form>
            </div>
        </div>
    );
};

export default Contact;
