import React from 'react';
import './doctors.scss'; 

const Doctors = () => {
    const doctors = [
        {
            id: 1,
            name: 'Доктор 1',
            specialization: 'Дерматолог',
            experience: '10 лет опыта',
            image: './doctor.jpg',
        },
        {
            id: 2,
            name: 'Доктор 2',
            specialization: 'Косметолог',
            experience: '15 лет опыта',
            image: './doctor.jpg',
        },
        {
            id: 3,
            name: 'Доктор 3',
            specialization: 'Хирург',
            experience: '8 лет опыта',
            image: './doctor.jpg',
        },
        {
            id: 4,
            name: 'Доктор 4',
            specialization: 'Хирург',
            experience: '8 лет опыта',
            image: './doctor.jpg',
        },
    ];

    return (
        <div className="doctors-component">
            <h2 className="doctors-title">Наши Врачи</h2>
            <ul className="doctors-list">
                {doctors.map((doctor) => (
                    <li key={doctor.id} className="doctor-item">
                        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                        <div className="doctor-details">
                            <h3 className="doctor-name">{doctor.name}</h3>
                            <p className="doctor-specialization">{doctor.specialization}</p>
                            <p className="doctor-experience">{doctor.experience}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Doctors;