import { AlertCircle, Calendar } from 'lucide-react';
import React from 'react';

const Dates = ({register, errors}) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Calendar className="mr-2" size={20} />
                    Package Dates
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Start Date *
                        </label>
                        <input
                            {...register('startDate', { required: 'Start date is required' })}
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.startDate && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                                <AlertCircle size={16} className="mr-1" />
                                {errors.startDate.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            End Date *
                        </label>
                        <input
                            {...register('endDate', { required: 'End date is required' })}
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.endDate && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                                <AlertCircle size={16} className="mr-1" />
                                {errors.endDate.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
    );
};

export default Dates;