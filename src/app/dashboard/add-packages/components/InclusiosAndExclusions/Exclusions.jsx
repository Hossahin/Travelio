import { Minus, Plus } from 'lucide-react';
import React from 'react';
import { useFieldArray } from 'react-hook-form';

const Exclusions = ({ register, control }) => {
    const { fields: exclusionFields, append: appendExclusion, remove: removeExclusion } = useFieldArray({
        control,
        name: 'exclusions'
    });
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">What's Not Included</h2>

            {exclusionFields.map((field, index) => (
                <div key={field.id} className="flex gap-2 mb-3">
                    <input
                        {...register(`exclusions.${index}`, { required: 'Exclusion cannot be empty' })}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Personal expenses"
                    />
                    {exclusionFields.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeExclusion(index)}
                            className="px-3 py-2 text-red-600 border border-red-300 rounded-md hover:bg-red-50"
                        >
                            <Minus size={16} />
                        </button>
                    )}
                </div>
            ))}

            <button
                type="button"
                onClick={() => appendExclusion('')}
                className="flex items-center px-4 py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50"
            >
                <Plus size={16} className="mr-1" />
                Add Exclusion
            </button>
        </div>
    );
};

export default Exclusions;