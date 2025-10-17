import { useState } from "react";

const AddItem = () => {
  const [activeTab, setActiveTab] = useState("single");

  const [formData, setFormData] = useState({
    saltName: "",
    brandName: "",
    manufacturer: "",
    // batchNumber: "",
    packageQuantity: "",
    productForm: "",
    minQuantityAlert: "",
    // expiryDate: "",
    // unitPrice: "",
    purchasePrice: "",
    // stockQuantity: "",
    storageCondition: "",
    rackNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Item:", formData);
    // TODO: send to backend API
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("Excel file uploaded:", file);
    // TODO: handle Excel parsing & upload
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">

        <button
          className={`text-sm cursor-pointer px-4 py-2 rounded-md ${activeTab === "single"
            ? "bg-blue-950 text-white"
            : "bg-gray-200 text-gray-700"
            }`}
          onClick={() => setActiveTab("single")}
        >
          Add Single Item
        </button>
        <button
          className={`text-sm cursor-pointer px-4 py-2 rounded-md ${activeTab === "excel"
            ? "bg-blue-950 text-white"
            : "bg-gray-200 text-gray-700"
            }`}
          onClick={() => setActiveTab("excel")}
        >
          Upload Excel File
        </button>
      </div>

      {/* Add Single Item Form */}
      {activeTab === "single" && (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg "
        >

          {Object.keys(formData).map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-gray-700 capitalize mb-1 text-sm">
                {field.replace(/([A-Z])/g, " $1")}
              </label>

              {field === "description" ? (
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="outline-0 border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-950"
                  rows="2"
                />
              ) : field === "expiryDate" ? (
                <input
                  type="date"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="outline-0 border rounded-md py-1 px- focus:outline-none focus:ring-1 focus:ring-blue-950"
                />

              ) : (
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-950 transition-all duration-100"

                />
              )}
            </div>
          ))}

          <div className="col-span-full flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-950 text-sm text-white px-6 py-2 rounded-md hover:bg-blue-900 cursor-pointer"
            >
              Add Item
            </button>
          </div>
        </form>
      )}

      {/* Upload Excel File */}
      {activeTab === "excel" && (
        <div className="bg-white p-6 rounded-lg flex items-center justify-start gap-5">
          <p className="text-gray-700 ">
            Upload an Excel (.xlsx or .csv) file containing your item data.
          </p>
          <input
            type="file"
            accept=".xlsx,.csv"
            onChange={handleFileUpload}
            className="border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-950 transition-all duration-100"

          />
          <button className="bg-blue-950 text-sm  text-white px-6 py-2 rounded-md hover:bg-blue-900 cursor-pointer" >
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default AddItem;
