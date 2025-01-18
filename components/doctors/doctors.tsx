import React, { useState } from 'react';
import './doctors.scss';

interface Doctor {
    id: number;
    name: string;
    specialization: string;
    experience: string;
    image: string;
    bio?: string;
    education?: string;
    services?: string;
}

const Doctors = () => {
    const doctors: Doctor[] = [
        {
            id: 1,
            name: 'Доктор 1',
            specialization: 'Дерматолог',
            experience: '10 лет опыта',
            image: './doctor.jpg',
            bio: 'Доктор 1 является опытным дерматологом с многолетним стажем...',
            education: 'Образование доктора 1',
            services: 'Услуги доктора 1',
        },
        {
            id: 2,
            name: 'Доктор 2',
            specialization: 'Косметолог',
            experience: '15 лет опыта',
            image: './doctor.jpg',
            bio: 'Доктор 2 квалифицированный косметолог с индивидуальным подходом к каждому пациенту...',
            education: 'Образование доктора 2',
            services: 'Услуги доктора 2',
        },
        {
            id: 3,
            name: 'Доктор 3',
            specialization: 'Хирург',
            experience: '8 лет опыта',
            image: './doctor.jpg',
            bio: 'Биография доктора 3',
            education: 'Образование доктора 3',
            services: 'Услуги доктора 3',
        },
        {
            id: 4,
            name: 'Доктор 4',
            specialization: 'Хирург',
            experience: '8 лет опыта',
            image: './doctor.jpg',
            bio: 'Биография доктора 4',
            education: 'Образование доктора 4',
            services: 'Услуги доктора 4',
        },
    ];

    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

    const openModal = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
    };

    const closeModal = () => {
        setSelectedDoctor(null);
    };

    return (
        <div className="doctors-component">
            <h2 className="doctors-title">Наши Врачи</h2>
            <ul className="doctors-list">
                {doctors.map((doctor) => (
                    <li key={doctor.id} className="doctor-item" onClick={() => openModal(doctor)}>
                        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                        <div className="doctor-details">
                            <h3 className="doctor-name">{doctor.name}</h3>
                            <p className="doctor-specialization">{doctor.specialization}</p>
                            <p className="doctor-experience">{doctor.experience}</p>
                        </div>
                    </li>
                ))}
            </ul>

            {selectedDoctor && (
                <div className="doctor-modal">
                    <div className="doctor-modal-content">
                        <button className="doctor-modal-close" onClick={closeModal}>
                            &times;
                        </button>
                        <p className="doctor-modal-specialization">{selectedDoctor.specialization}</p>
                        <p className="doctor-modal-experience">{selectedDoctor.experience}</p>
                        <img src={selectedDoctor.image} alt={selectedDoctor.name} className="doctor-modal-image" />
                        <h3 className="doctor-modal-name">{selectedDoctor.name}</h3>
                        <p className="doctor-modal-bio">{selectedDoctor.bio}</p>
                        <p className="doctor-modal-education">{selectedDoctor.education}</p>
                        <p className="doctor-modal-services">{selectedDoctor.services}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Doctors;