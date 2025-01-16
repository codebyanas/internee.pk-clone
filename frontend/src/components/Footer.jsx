import React from 'react';
import './CSS/foot.css';
const Footer = () => {
    return (
        <footer className="footer bg-gray-100 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center md:items-start">
                <div className="footer-logo flex flex-col items-center md:items-start">
                    <img src="src\assets\logo.png" alt="Internee.pk Logo" className="h-12 mb-4" />
                    <p className="text-green-600 font-bold text-xl">Internee.pk</p>
                    <p className="text-purple-600 text-sm">VIRTUAL INTERNSHIP PLATFORM</p>
                </div>
                <div className="footer-links flex flex-col items-center md:items-start">
                    <h2 className="font-bold mb-4">Company</h2>
                    <a href="#" className="mb-2 text-gray-600">Contact Us</a>
                    <a href="#" className="mb-2 text-gray-600">Privacy Policy</a>
                    <a href="#" className="mb-2 text-gray-600">Terms and Conditions</a>
                </div>
                <div className="footer-help flex flex-col items-center md:items-start">
                    <h2 className="font-bold mb-4">Get help</h2>
                    <a href="#" className="mb-2 text-gray-600">Training Videos</a>
                    <a href="#" className="mb-2 text-gray-600">Request Help</a>
                </div>
                <div className="footer-social flex flex-col items-center md:items-start">
                    <h2 className="font-bold mb-4">Socialize with us</h2>
                    <div className="flex gap-4 mb-4">
                        <a href="#" className="text-yellow-500"><i className="fab fa-youtube"></i></a>
                        <a href="#" className="text-yellow-500"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-yellow-500"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-yellow-500"><i className="fab fa-twitter"></i></a>
                    </div>
                    <p className="text-gray-600 mb-2">+923453191638</p>
                    <p className="text-gray-600 mb-2">info@internee.pk</p>
                    <p className="text-gray-600 text-sm">Copyright ©2024 internee.pk Pvt Ltd.</p>
                    <p className="text-gray-600 text-sm">All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
