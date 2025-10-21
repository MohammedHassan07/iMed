import { useState } from "react";
import TabButton from "../../components/TabButton";
import AddButton from "../../components/AddButton";
import showToast from "../../utils/Toast";

const AddItem = () => {
  const [activeTab, setActiveTab] = useState("single");

  const [formData, setFormData] = useState({
    saltName: "",
    brandName: "",
    manufacturer: "",
    packageQuantity: "",
    productForm: "",
    minQuantityAlert: "",
    storageCondition: "",
    boxNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "storageCondition") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        boxNumber: value === "box" ? prev.boxNumber : "",
      }));
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const field in formData) {
      if ((field !== "description" && field !== "boxNumber") && formData[field] === "") {
        showToast(`Please fill in the ${field.replace(/([A-Z])/g, ' $1')}`, 'oklch(57.7% 0.245 27.325)');
        return;
      }
    }

    const response = await window.electronAPI.addMedicine(formData);
    console.log(response)

    if (response.status !== 'success') {
      return showToast(response.message || 'Something went wrong !!!', 'oklch(57.7% 0.245 27.325)');
    }

    return showToast('Medicine Addedd', 'oklch(62.7% 0.194 149.214)');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("Excel file uploaded:", file);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Tabs */}
      <TabButton
        tabs={[
          { label: "Add Single Item", value: "single" },
          { label: "Upload Excel File", value: "excel" },
        ]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Add Single Item Form */}
      {activeTab === "single" && (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-sm"
        >
          {Object.keys(formData).map((field) => {
            // Hide boxNumber field unless storageCondition = "box"
            if (field === "boxNumber" && formData.storageCondition !== "box") {
              return null;
            }

            return (
              <div key={field} className="flex flex-col">
                <label
                  htmlFor={field}
                  className="text-gray-700 capitalize mb-1 text-sm"
                >
                  {field.replace(/([A-Z])/g, " $1")}
                </label>

                {field === "description" ? (
                  <textarea
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="outline-0 border rounded-md py-1 px-2 focus:ring-1 focus:ring-blue-950"
                    rows="2"
                  />
                ) : field === "storageCondition" ? (
                  <select
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="outline-0 border rounded-md py-1 px-2 focus:ring-1 focus:ring-blue-950"
                  >
                    <option value="">Select Storage Condition</option>
                    <option value="fridge">Fridge</option>
                    <option value="box">Box</option>
                    <option value="counter">Counter</option>
                  </select>
                ) : field === "productForm" ? (
                  <select
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="outline-0 border rounded-md py-1 px-2 focus:ring-1 focus:ring-blue-950"
                  >
                    <option value="">Select Product Form</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Syrup">Syrup</option>
                    <option value="Ointment">Ointment</option>
                    <option value="Injection">Injection</option>
                    <option value="Drops">Drops</option>
                    <option value="Powder">Powder</option>
                  </select>
                ) : (
                  <input
                    id={field}
                    type={
                      ["packageQuantity", "minQuantityAlert"].includes(field)
                        ? "number"
                        : "text"
                    }
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="outline-0 border rounded-md py-1 px-2 focus:ring-1 focus:ring-blue-950"
                  />
                )}
              </div>
            );
          })}

          <div className="col-span-full flex justify-end mt-4">
            <AddButton label="Add Item" />
          </div>
        </form>
      )}

      {/* Upload Excel File */}
      {activeTab === "excel" && (
        <div className="bg-white p-6 rounded-lg flex items-center justify-start gap-5 shadow-sm">
          <p className="text-gray-700">
            Upload an Excel (.xlsx or .csv) file containing your item data.
          </p>
          <input
            type="file"
            accept=".xlsx,.csv"
            onChange={handleFileUpload}
            className="border rounded-md py-1 px-2 focus:ring-1 focus:ring-blue-950 transition-all duration-100"
          />
          <button
            type="button"
            className="bg-blue-950 text-sm text-white px-6 py-2 rounded-md hover:bg-blue-900 cursor-pointer"
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default AddItem;
