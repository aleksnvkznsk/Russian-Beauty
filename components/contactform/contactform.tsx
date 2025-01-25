// src/components/ContactForm.tsx
"use client";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './contactform.scss';

interface FormData {
    name: string;
    phone: string;
}

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="contact-form-container">
            <div className="contact-form-left">
                <p className="contact-form-title">Возникли вопросы? Поможем и подскажем</p>
            </div>
            <div className="contact-form-right">
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <div className="form-group">
                        <input
                            type="text"
                            {...register("name", { required: "Имя обязательно" })}
                            placeholder="Ваше имя"
                            className={`input-field ${errors.name ? 'input-error' : ''}`}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="phone"
                            {...register("phone", {
                                required: "Телефон обязателен", pattern: {
                                    value: /^[+0-9]{1,}[0-9]{0,}$/,
                                    message: 'Некорректный номер'
                                }
                            })}
                            placeholder="Ваш телефон"
                            className={`input-field ${errors.phone ? 'input-error' : ''}`}
                        />
                    </div>
                    <button type="submit" className="submit-button">Отправить</button>
                    {/* {errors.name && <span className="error-message">{errors.name.message}</span>} */}
                    {/* {errors.phone && <span className="error-message">{errors.phone.message}</span>} */}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;