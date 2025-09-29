import { AlertCircle } from 'lucide-react';
import React from 'react';

const Duration = ({register, errors}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (days) *
            </label>
            <input
                {...register('duration', {
                    required: 'Duration is required',
                    min: { value: 1, message: 'Duration must be at least 1 day' }
                })}
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 7"
            />
            {errors.duration && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.duration.message}
                </p>
            )}
        </div>
    );
};

export default Duration;