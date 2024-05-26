'use client';
import React, { useState } from 'react';

// needs logic for generating JWT token.

const signUpPage = () => {
  const [formData, setFormData] = useState({
    emailAddress: '',
    password: '',
    repeatedPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    emailAddress: '',
    password: '',
    repeatedPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const isValid = true;
    let errors = {
      emailAddress: '',
      password: '',
      repeatedPassword: '',
    };

    if (!formData.emailAddress) {
      isValid = false;
      errors.emailAddress = 'please provide an email address';
    } else if (
      !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData.emailAddress)
    ) {
      isValid = false;
      errors.emailAddress = 'please provide a valid email address.';
    }

    if (!formData.password) {
      isValid = false;
      errors.password = 'please provide a password.';
    }

    if (!formData.password === formData.repeatedPassword) {
      isValid = false;
      errors.repeatedPassword =
        'repeated password must match provided password.';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // create new User
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="sm:h-screen md:h-screen">
      <div className="card card-body">
        <form action=""></form>
      </div>
    </div>
  );
};

export default signUpPage;
