import React, { useState } from 'react';

export default function LiveRegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted");
        console.log("Form Data:", formData);
    };

    return (
        <div className="form">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit} method="post" className="reg-form">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <br /><br />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <br /><br />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br /><br />

                <label htmlFor="password">Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <br /><br />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <br />

                <label>
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(prev => !prev)}
                    /> Show Password
                </label>
                <br />

                <button
                    type="submit"
                    className="btn-reg"
                >
                    Register
                </button>
            </form>

            <h3> Form Data</h3>
            <div className='form-data'>
                <p>First Name:{formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Password: {formData.password}</p>
            </div>
        </div>
    );
}