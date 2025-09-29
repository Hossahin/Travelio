import React from 'react';

const PackageType = ({register}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Package Type
            </label>
            <select
                {...register('packageType')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="adventure">Adventure</option>
                <option value="cultural">Cultural</option>
                <option value="wildlife">Wildlife</option>
                <option value="beach">Beach</option>
                <option value="mountain">Mountain</option>
                <option value="city">City Tour</option>
                <option value="cruise">Cruise</option>
                <option value="pilgrimage">Pilgrimage</option>
            </select>
        </div>
    );
};

export default PackageType;