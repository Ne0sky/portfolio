import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Lottie from 'lottie-react';
import lottie_contact from '../data/lottie_contact.json'
import { FaRegPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { GrGithub } from 'react-icons/gr';
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
        <div className='w-full px-4 md:px-8 lg:px-16 pt-16 pb-8 '>
            
            <div className='flex flex-col lg:flex-row w-full justify-center items-ce gap-8'>
            <div className='font-tertiary'>
            <h2 className='font-tertiary font-medium text-4xl lg:text-5xl '>Have an awesome idea? <br/> Lets bring it to life.</h2>
            <p className=' font-medium  py-4 text-zinc-800 font-tertiary'>I am looking for freelance opportunities or internships <br/> in startups or agencies. </p>
            <form className=' flex gap-2 py-8 font-teertiary flex-col w-[90%] lg:w-[80%] 'onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                <input type="text" className='p-2 bg-transparent font-tertiary border-b border-zinc-600 placeholder:text-zinc-800 focus:outline-none' placeholder='Your Name' id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                <input type="email" className='p-2 bg-transparent font-tertiary border-b border-zinc-600 placeholder:text-zinc-800 focus:outline-none' id="email" placeholder='your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                <textarea id="message" className='h-44 p-2 bg-transparent font-tertiary border-b border-zinc-600 placeholder:text-zinc-800 focus:outline-none' placeholder='Enter your messsage' value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className='p-2 flex items-center gap-2 mt-8 justify-center bg-zinc-900 text-sm rounded-2xl w-1/3 text-white font-tertiary' type="submit ">Send<FaRegPaperPlane/></button>
            </form>
            </div>

            <div>
            <Lottie className='hidden lg:block w-[350px]   z-20' animationData={lottie_contact} loop={true} />         
            <div  className='flex flex-col gap-4'>
                <div>
            <h3 className='font-tertiary font-medium text-lg'>Contact Details</h3>
            <div className='flex items-center'> <MdEmail/><p>mailmeakash2@gmail.com</p></div> 
            </div>
            <div className='   '>
                <h3 className='font-tertiary font-medium text-lg'> My Digital Spaces</h3>
                <a className='flex items-center gap-2'  target='_blank' href="https://www.linkedin.com/in/akash-dey-75165b201/"><FaLinkedinIn/> Linkedin</a>
                 <a className='flex items-center gap-2'  target='_blank' href="https://www.instagram.com/cynik._/"><FaInstagram/> Instagram</a>
                 <a  className='flex items-center gap-2' target='_blank' href="https://github.com/Ne0sky"><GrGithub/> Github</a> 
                 <a className='flex items-center gap-2'  target='_blank' href="https://leetcode.com/ne0sky/"><SiLeetcode/> Leetcode</a></div>
            </div>
            </div>
               
            </div>
        </div>
    );
};

export default Contact;
