import { AlertCircle } from 'lucide-react';
import React from 'react';

const ContactInfo = ({register, errors}) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Email *
                    </label>
                    <input
                        {...register('contactEmail', {
                            required: 'Contact email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Please enter a valid email address'
                            }
                        })}
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="contact@travelagency.com"
                    />
                    {errors.contactEmail && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle size={16} className="mr-1" />
                            {errors.contactEmail.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Phone *
                    </label>
                    <input
                        {...register('contactPhone', { required: 'Contact phone is required' })}
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+1 (555) 123-4567"
                    />
                    {errors.contactPhone && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle size={16} className="mr-1" />
                            {errors.contactPhone.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;