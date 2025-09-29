import { AlertCircle } from 'lucide-react';
import React from 'react';

const AvailableSlots = ({ register, errors }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Slots *
            </label>
            <input
                {...register('availableSlots', {
                    required: 'Available slots is required',
                    min: { value: 1, message: 'Available slots must be at least 1' }
                })}
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 20"
            />
            {errors.availableSlots && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.availableSlots.message}
                </p>
            )}
        </div>
    );
};

export default AvailableSlots;