import React from 'react';
import Form from './Form';

export default function FormWrapper() {
    // This component doesn't need to know about the context.
    // It just renders its child.
    return (
        <div>
            <Form />
        </div>
    );
}