import AddNewPackageForm from "./AddNewPackageForm";


const AddPackageForm = () => {
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Travel Package</h1>
        <p className="text-gray-600">Create an exciting travel experience for your customers</p>
      </div>

      <AddNewPackageForm></AddNewPackageForm>
    </div>
  );
};

export default AddPackageForm;