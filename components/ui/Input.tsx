// components/ui/Input.tsx
import React from 'react';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...props}
        />
    );
};
