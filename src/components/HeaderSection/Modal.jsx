// Modal.jsx
import React, { useState } from 'react';
import '../Utils.css'; // Make sure your modal styles are in this file or imported

const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    datetime: '',
    enquiry: 'Online Courses (Website)', // Default value
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle loading/disabling

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button
    
    // ✅ CORRECT API ENDPOINT FOR VERCEL SERVERLESS FUNCTION
    // Vercel automatically maps '/api/send-callback-email' to your file.
    const API_ENDPOINT = '/api/send-callback-email'; 

    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // The backend is configured to use 'RECEIVING_EMAIL' from its ENV, 
            // but for good measure, we'll pass the target email here if the backend needed it.
            body: JSON.stringify({ 
                ...formData,
                targetEmail: 'sayanmaity600@gmail.com' // Not strictly needed, but safe
            }), 
        });

        if (response.ok) {
            alert('Callback request sent successfully! We will contact you shortly.');
            onClose(); // Close the modal on success
        } else {
            // Attempt to read a specific error message from the backend if available
            const errorData = await response.json(); 
            alert(`Failed to send request. Error: ${errorData.error || 'Please check your network.'}`);
        }
    } catch (error) {
        console.error('Submission error:', error);
        alert('An unexpected error occurred during submission.');
    } finally {
        setIsSubmitting(false); // Enable button regardless of success/failure
    }
  };

  return (
    // Backdrop for the modal
    <div className="modal-backdrop" onClick={onClose}>
      {/* Modal content area - stop clicks from closing the modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Request a callback</h2>
          <button className="close-button" onClick={onClose} disabled={isSubmitting}>&times;</button>
        </div>
        <p className='fill-form-text'>Fill the form below to request a callback from our team.</p>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Phone Field */}
          <label htmlFor="phone">Phone</label>
          <div className='phone-input-container'>
              <span className='country-code'>🇮🇳 ▼</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
          </div>

          {/* Date/Time Field */}
          <label htmlFor="datetime">When should we call you? 🗓️</label>
          <input
            type="datetime-local" // Using datetime-local for native picker
            id="datetime"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
          />

          {/* Enquiry Field */}
          <label htmlFor="enquiry">Enquiry For 🗓️</label>
          <select
            id="enquiry"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            required
          >
            <option value="Online Courses (Website)">Online Courses (Website)</option>
            <option value="Custom Project Enquiry">Custom Project Enquiry</option>
            <option value="General Question">General Question</option>
          </select>

          {/* Submit Button */}
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;