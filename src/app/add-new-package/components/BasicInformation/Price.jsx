import React from 'react';

const Price = ({register, errors}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (USD) *
            </label>
            <input
                {...register('price', {
                    required: 'Price is required',
                    min: { value: 0, message: 'Price must be positive' }
                })}
                type="number"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 1299.99"
            />
            {errors.price && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.price.message}
                </p>
            )}
        </div>
    );
};

export default Price;