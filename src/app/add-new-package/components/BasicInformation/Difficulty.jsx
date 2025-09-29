import React from 'react';

const Difficulty = ({register}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
            </label>
            <select
                {...register('difficulty')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="challenging">Challenging</option>
                <option value="expert">Expert</option>
            </select>
        </div>
    );
};

export default Difficulty;