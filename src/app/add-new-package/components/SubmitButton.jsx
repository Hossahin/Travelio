import React from 'react';

const SubmitButton = ({handleSubmit, onSubmit, isSubmitting}) => {
    return (
        <div className="flex justify-end space-x-4">
                <button
                    type="button"
                    onClick={() => {
                        reset();
                        setImagePreview(null);
                    }}
                    className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Reset Form
                </button>

                <button
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                    {isSubmitting ? (
                        <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                            Adding Package...
                        </>
                    ) : (
                        'Add Package'
                    )}
                </button>
            </div>
    );
};

export default SubmitButton;