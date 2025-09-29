import { AlertCircle } from 'lucide-react';
import React from 'react';

const PickupOrDropoff = ({register, errors}) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Pickup & Drop-off</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Pickup Location *
                        </label>
                        <input
                            {...register('pickupLocation', { required: 'Pickup location is required' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., Tribhuvan International Airport"
                        />
                        {errors.pickupLocation && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                                <AlertCircle size={16} className="mr-1" />
                                {errors.pickupLocation.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Drop-off Location *
                        </label>
                        <input
                            {...register('dropoffLocation', { required: 'Drop-off location is required' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., Tribhuvan International Airport"
                        />
                        {errors.dropoffLocation && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                                <AlertCircle size={16} className="mr-1" />
                                {errors.dropoffLocation.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
    );
};

export default PickupOrDropoff;