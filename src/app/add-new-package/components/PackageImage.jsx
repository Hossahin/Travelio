import { Camera } from 'lucide-react';
import React, { useState } from 'react';

const PackageImage = ({ imagePreview, setImagePreview }) => {

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }

    };



    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Camera className="mr-2" size={20} />
                Package Image
            </h2>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Package Image
                </label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {imagePreview && (
                    <div className="mt-4">
                        <img
                            src={imagePreview}
                            alt="Package preview"
                            className="max-w-xs h-48 object-cover rounded-md border"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PackageImage;