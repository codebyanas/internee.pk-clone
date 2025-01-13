import React,{useState,useEffect} from 'react'
import './CSS/fifthCSS.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Fifth = () => {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
       }, [])  

    const [remarks, setRemarks] = useState([
        {
            name: 'Rabia Javed',
            location: 'Karachi, Pakistan',
            remark: '\"internee.pk is the best, most comprehensive 21st-century innovation for those student who\'s looking for internship and upgrade their skillsets. Their projects are tough but market valued.\"'
        },
        {
            name: 'Nagina Asif',
            location: 'Karachi, Pakistan',
            remark: '\"internee.pk is all about helping us grow ourcareers. May ALLAH give them more achivements andsuccess on their journey.\"'
        },
        {
            name: 'RazaUllah Sami',
            location: 'KPK, Pakistan',
            remark: '\"Thanks to internee.pk, I grew up my skills hereand now i am working as a Flutter Developer in aUS company.\"'
        },
        {
            name: 'FarhatUllah Khan',
            location: 'Karachi, Pakistan',
            remark: '\"internee.pk is the best, most comprehensive 21st-century innovation for those student who\'s looking for internship and upgrade their skillsets. Their projects are tough but market valued.\"'
        }
    ]);
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? remarks.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === remarks.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="mt-20">
            <div className="remarks bg-slate-200 p-10" data-aos = "fade-right">
                <div className="upper w-4/5 m-auto flex justify-between items-center">
                    <h1 className="md:text-4xl  text-xl font-bold w-[60%]">What Students are saying about internee.pk</h1>
                    <div className="buttons flex gap-6">
                        <button onClick={prevSlide} className="w-8 h-8 rounded-full border border-gray-500 hover:bg-gray-500 hover:text-white">&lt;</button>
                        <button onClick={nextSlide} className="w-8 h-8 rounded-full border border-gray-500 hover:bg-gray-500 hover:text-white">&gt;</button>
                    </div>
                </div>
                <div className="lower mt-10">
                    <div className='remarks-container w-4/5 m-auto relative'>
                        {remarks.map((remark, index) => (
                            <div key={index} className={`remark ${index === currentIndex ? 'active' : ''}`}>
                                <p className="text-lg text-white mb-6">{remark.remark}</p>
                                <p className="text-lg text-yellow-400">{remark.name}</p>
                                <p className="text-lg text-white">{remark.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fifth;
