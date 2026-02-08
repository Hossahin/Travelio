import { AlertCircle } from 'lucide-react';
import React from 'react';

const TermsAndCondition = ({register, errors}) => {
    return (
                    <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                    <input
                        {...register('termsAccepted', { required: 'You must accept the terms and conditions' })}
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-700">
                        I agree to the terms and conditions and confirm that all information provided is accurate
                    </label>
                </div>
                {errors.termsAccepted && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.termsAccepted.message}
                    </p>
                )}
            </div>
    );
};

export default TermsAndCondition;