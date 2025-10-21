import React, { useState } from 'react';
import '../Utils.css';


const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    datetime: '',
    enquiry: 'Social Mdeia Mng.',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ✅ Correct relative path for Vercel Serverless Function
    const API_ENDPOINT = '/api/send-callback-email'; 

    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                ...formData,
            }), 
        });

        if (response.ok) {
            alert('Callback request sent successfully! We will contact you shortly.');
            onClose(); 
        } else {
            const errorData = await response.json(); 
            alert(`Failed to send request. Server error: ${errorData.error || 'Unknown issue.'}`);
        }
    } catch (error) {
        console.error('Submission error:', error);
        alert('An unexpected error occurred during submission. Check server console for CORS/network details.');
    } finally {
        setIsSubmitting(false); 
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Request a callback</h2>
          <button className="close-button" onClick={onClose} disabled={isSubmitting}>&times;</button>
        </div>
        <p className='fill-form-text'>Fill the form below to request a callback from our team.</p>

        <form onSubmit={handleSubmit}>
          
          <label htmlFor="name" className='input-label'>Name</label>
          <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="phone" className='input-label'>Phone</label>
          <div className='phone-input-container'>
              <span className='country-code'>🇮🇳 </span>
              <input type="tel" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <label htmlFor="datetime" className='input-label'>When should we call you? 🗓️</label>
          <input type="datetime-local" id="datetime" name="datetime" value={formData.datetime} onChange={handleChange} required />

          <label htmlFor="enquiry" className='input-label'>Enquiry For 🗓️</label>
          <select id="enquiry" name="enquiry" value={formData.enquiry} onChange={handleChange} required>
            <option value="Social Media Mng.">Social Media Mng.</option>
            <option value="Custom Project Enquiry">Custom Project Enquiry</option>
            <option value="General Question">General Question</option>
          </select>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;