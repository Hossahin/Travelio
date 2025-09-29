import { Minus, Plus } from 'lucide-react';
import React from 'react';
import { useFieldArray } from 'react-hook-form';

const Inclusions = ({register, control}) => {
    const { fields: inclusionFields, append: appendInclusion, remove: removeInclusion } = useFieldArray({
        control,
        name: 'inclusions'
    });
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">What's Included</h2>

            {inclusionFields.map((field, index) => (
                <div key={field.id} className="flex gap-2 mb-3">
                    <input
                        {...register(`inclusions.${index}`, { required: 'Inclusion cannot be empty' })}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., All meals"
                    />
                    {inclusionFields.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeInclusion(index)}
                            className="px-3 py-2 text-red-600 border border-red-300 rounded-md hover:bg-red-50"
                        >
                            <Minus size={16} />
                        </button>
                    )}
                </div>
            ))}

            <button
                type="button"
                onClick={() => appendInclusion('')}
                className="flex items-center px-4 py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50"
            >
                <Plus size={16} className="mr-1" />
                Add Inclusion
            </button>
        </div>
    );
};

export default Inclusions;