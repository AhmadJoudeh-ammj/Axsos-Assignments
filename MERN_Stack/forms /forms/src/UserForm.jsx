import React from 'react'; // No need for useState or useEffect
import { useForm } from 'react-hook-form';

export default function LiveRegistrationForm() {
  
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onBlur', // Best for UX: validate when a user leaves a field
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    
    const onSubmit = (data) => {
        alert("Form Submitted Successfully!");
        console.log("Form Data:", data);
    };

    const password = watch('password');

    
    return (
        <div className="form">
            <h1>Registration Form</h1>
            {/* 4. Pass your clean onSubmit function to handleSubmit */}
            <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    // 5. Register the field and define its validation rules here.
                    {...register('firstName', {
                        required: 'First Name is required',
                        minLength: { value: 2, message: 'First Name must be at least 2 characters' }
                    })}
                />
                <br />

                {/* The 'errors' object from useForm works automatically */}
                {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    {...register('lastName', {
                        required: 'Last Name is required',
                        minLength: { value: 2, message: 'Last Name must be at least 2 characters' }
                    })}
                />
                <br />

                {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email' }
                    })}

                />
                <br />



                {errors.email && <p className="error-message">{errors.email.message}</p>}
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: { value: 8, message: 'Password must be at least 8 characters' }
                    })}
                />
                <br />

                {errors.password && <p className="error-message">{errors.password.message}</p>}

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: value => value === password || 'Passwords must match'
                    })}
                />
                <br />

                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}

                <button type="submit" className="btn-reg">Register</button>
            </form>
        </div>
    );
}