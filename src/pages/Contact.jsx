import React, { useState } from 'react';
import "../assets/contact_styles.css";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleSubmit = (e) => {        
        e.preventDefault();
        
        setLoading(true);
        setError(false);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('message', message);
 
        fetch("https://getform.io/f/1785a9e0-97b5-419f-aac8-bce32400c34b", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setLoading(false);
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            setLoading(false);
            setError(true);
        });
    };

    return (
        <div name='contact' className='w-full mt-16'>
            {/* Contact form */}
            <div className='my-8 py-8 bg-[#0a192f] flex justify-center items-center px-3 h-screen'>
                <form method='POST' onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
                    <div className='pb-3 text-center'>
                        <p className='text-3xl font-bold inline text-gray-300 uppercase text-center'>Get in touch</p>
                        <p className='text-gray-300'>Simplest Way To Get In Toutch!</p>
                    </div>
                    <input className='bg-[#ccd6f6] p-2 text-gray-700' type="text" placeholder='Name' name='name' value={name} onChange={e => handleChange(e, setName)} required={true}/>
                    <input className='mt-2 p-2 bg-[#ccd6f6] text-gray-700' type="email" placeholder='Email' name='email' value={email} onChange={e => handleChange(e, setEmail)} required={true}/>
                    <input type="tel" className='mt-2 p-2 bg-[#ccd6f6] text-gray-700' name="phone" placeholder='Phone' value={phone} onChange={e => handleChange(e, setPhone)} required={true} minLength={10} maxLength={10}/>
                    <textarea className='bg-[#ccd6f6] mt-2 p-2 text-gray-700' name="message" rows="4" placeholder='Message' value={message} onChange={e => handleChange(e, setMessage)} required={true}></textarea>
                    <button className='text-white border-2 px-6 py-3 my-3 mx-auto hover:bg-blue-700 hover:border-blue-500 flex items-center' disabled={loading}>Lets Collaborate</button>
                </form>
            </div>
        </div>
    );
}
