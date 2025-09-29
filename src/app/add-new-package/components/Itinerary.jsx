import { Minus, Plus } from 'lucide-react';
import React from 'react';
import { useFieldArray } from 'react-hook-form';

const Itinerary = ({register, control}) => {
        const { fields: itineraryFields, append: appendItinerary, remove: removeItinerary } = useFieldArray({
        control,
        name: 'itinerary'
    });
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Itinerary</h2>

            {itineraryFields.map((field, index) => (
                <div key={field.id} className="border border-gray-200 rounded-md p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium">Day {index + 1}</h3>
                        {itineraryFields.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeItinerary(index)}
                                className="text-red-600 hover:bg-red-50 p-1 rounded"
                            >
                                <Minus size={16} />
                            </button>
                        )}
                    </div>

                    <div className="space-y-3">
                        <input
                            {...register(`itinerary.${index}.title`, { required: 'Day title is required' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Day title (e.g., Arrival in Kathmandu)"
                        />

                        <textarea
                            {...register(`itinerary.${index}.description`)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Detailed description of the day's activities..."
                        />
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={() => appendItinerary({ day: itineraryFields.length + 1, title: '', description: '' })}
                className="flex items-center px-4 py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50"
            >
                <Plus size={16} className="mr-1" />
                Add Day
            </button>
        </div>
    );
};

export default Itinerary;