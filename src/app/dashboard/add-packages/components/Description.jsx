import { AlertCircle } from 'lucide-react';
import React from 'react';

const Description = ({register, errors}) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Package Description</h2>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                </label>
                <textarea
                    {...register('description', {
                        required: 'Description is required',
                        minLength: { value: 50, message: 'Description must be at least 50 characters' }
                    })}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Provide a detailed description of your travel package..."
                />
                {errors.description && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.description.message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Description;