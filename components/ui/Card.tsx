// components/ui/Card.tsx
import React from 'react';

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return (
        <div className={`p-4 border rounded shadow ${className}`}>
            {children}
        </div>
    );
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="p-4">
            {children}
        </div>
    );
};

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="p-2 border-b">
            {children}
        </div>
    );
};

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <h2 className="text-xl font-bold">
            {children}
        </h2>
    );
};

