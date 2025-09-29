import { AlertCircle } from 'lucide-react';
import React from 'react';

const Destination = ({register, errors}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination *
            </label>
            <input
                {...register('destination', { required: 'Destination is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Nepal, Everest Base Camp"
            />
            {errors.destination && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.destination.message}
                </p>
            )}
        </div>
    );
};

export default Destination;