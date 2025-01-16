import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Your Name",
          from_email: form.email,
          to_email: "your-email@example.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setAlert({ show: true, type: 'success', message: 'Message sent successfully! 😊' });
          setForm({ name: '', email: '', message: '' });
          setTimeout(() => setAlert({ show: false, type: '', message: '' }), 5000);
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          setAlert({ show: true, type: 'error', message: 'Failed to send the message. Please try again. 😢' });
          setTimeout(() => setAlert({ show: false, type: '', message: '' }), 5000);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row p-5 bg-gray-100 gap-6">
      {/* Left Section */}
      <div className="flex-1 mx-10">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-4">
          Our doors are always open! Drop by and let’s discuss how we can help you achieve your goals. We’re excited to
          hear from you! Whether you have a question, need assistance, or want to collaborate, our team is here to help.
        </p>
        <p className="mb-4">
          📍 <strong>Address:</strong> NIC Karachi, NED University Karachi, Pakistan
        </p>
        <p className="mb-4">
          🕒 <strong>Working Hours:</strong>
          <br /> Monday to Friday: 9:00 AM - 6:00 PM
          <br /> Saturday: 10:00 AM - 4:00 PM
          <br /> Sunday: Closed
        </p>
        <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Get In Touch
        </button>
        <div className="mt-6">
          <p className="mb-2">Follow us</p>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md mx-10">
        <h3 className="text-xl font-semibold mb-3">Contact Form</h3>
        <p className="mb-4">Ask us everything and we would love to hear from you</p>
        {alert.show && (
          <div
            className={`p-3 rounded mb-4 text-white ${
              alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {alert.message}
          </div>
        )}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Get In Touch'}
          </button>
        </form>
      </div>
    </div>
  );
}
