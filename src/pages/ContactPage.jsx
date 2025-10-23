import React, { useState } from 'react';
import '../components/Utils.css'; 

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        datetime: '',
        enquiry: 'Custom Project Enquiry',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(''); // 'success', 'error', 'idle'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');
        
        // Reuses the Vercel Serverless Function endpoint
        const API_ENDPOINT = '/api/send-callback-email'; 

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData), 
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', datetime: '', enquiry: 'Custom Project Enquiry' }); // Clear form
            } else {
                const errorData = await response.json(); 
                setStatus('error');
                console.error(`Submission failed: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false); 
        }
    };
    
    // Hardcoded contact info from Footer.jsx for the contact section
    const contactInfo = {
        email: 'connect.chetnastudio@gmail.com',
        sayan: '+91 90647 01142',
        abhijit: '+91 81164 37985',
    };

    return (
        <div className='pt-20 min-h-screen bg-black text-gray-400 flex justify-center items-start p-4 md:p-10'>
            <div className='max-w-4xl w-full flex flex-col md:flex-row bg-[#282828] rounded-2xl shadow-2xl overflow-hidden'>
                
                {/* Left Side: Contact Info */}
                <div className="md:w-1/2 bg-[#FF6F3D] p-8 md:p-12 text-white flex flex-col justify-between">
                    <h2 className='text-4xl font-bricolage font-bold mb-4'>Let's Connect</h2>
                    <p className='text-lg mb-8 opacity-90'>
                        Ready to launch your project? Fill out the form or reach us directly.
                    </p>
                    
                    <div className='space-y-4'>
                        <h3 className='text-xl font-semibold'>Contact Details</h3>
                        
                        <p>
                            <span className="font-light block">Email us at:</span>
                            <a href={`mailto:${contactInfo.email}`} className="font-bold hover:underline">{contactInfo.email}</a>
                        </p>
                        <p>
                            <span className="font-light block">Call Sayan (Founder):</span>
                            <a href={`tel:${contactInfo.sayan}`} className="font-bold hover:underline">{contactInfo.sayan}</a>
                        </p>
                        <p>
                            <span className="font-light block">Call Abhijit (Founder):</span>
                            <a href={`tel:${contactInfo.abhijit}`} className="font-bold hover:underline">{contactInfo.abhijit}</a>
                        </p>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="md:w-1/2 p-8 md:p-12">
                    <h2 className="text-3xl font-bricolage text-white font-bold mb-1">Book a Call</h2>
                    <p className='text-gray-400 mb-6'>We'll be in touch within 24 hours.</p>

                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        
                        <label htmlFor="name" className='input-label text-gray-300'>Name</label>
                        <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className='bg-[#333] border-[#444] text-white' />

                        <label htmlFor="phone" className='input-label text-gray-300'>Phone</label>
                        <div className='phone-input-container bg-[#333] border-[#444] mb-4'>
                            <span className='country-code text-white'>🇮🇳</span>
                            <input type="tel" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className='bg-none border-none' />
                        </div>

                        <label htmlFor="datetime" className='input-label text-gray-300'>When should we call you?</label>
                        <input type="datetime-local" id="datetime" name="datetime" value={formData.datetime} onChange={handleChange} required className='bg-[#333] border-[#444] text-white'/>

                        <label htmlFor="enquiry" className='input-label text-gray-300'>Enquiry For</label>
                        <select id="enquiry" name="enquiry" value={formData.enquiry} onChange={handleChange} required className='bg-[#333] border-[#444] text-white'>
                            <option value="Custom Project Enquiry">Custom Project Enquiry</option>
                            <option value="Social Media Mng.">Social Media Mng.</option>
                            <option value="General Question">General Question</option>
                        </select>

                        <button 
                            type="submit" 
                            className="submit-button" 
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Request'}
                        </button>
                    </form>

                    {status === 'success' && (
                        <p className="mt-4 text-green-400 font-semibold">Success! We will contact you shortly.</p>
                    )}
                    {status === 'error' && (
                        <p className="mt-4 text-red-400 font-semibold">Error! Failed to send request. Please try again later.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;