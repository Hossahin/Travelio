import { AlertCircle } from 'lucide-react';
import React from 'react';

const PackageName = ({register, errors}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Package Name *
            </label>
            <input
                {...register('packageName', {
                    required: 'Package name is required',
                    minLength: { value: 5, message: 'Package name must be at least 5 characters' }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Amazing Himalayan Adventure"
            />
            {errors.packageName && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.packageName.message}
                </p>
            )}
        </div>
    );
};

export default PackageName;