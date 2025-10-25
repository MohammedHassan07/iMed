import React, { useState } from "react";
import { Search } from "lucide-react";
import MedicineCard from "./MedicineCard";
import debounce from "../utils/debounce";
import showToast from "../utils/Toast";
const MedicineSearch = ({  onSelectMedicine }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [medicines, setMedicines] = useState([])

  const fetchItems = async () => {

    try {

      const response = await window.electronAPI.getStocksOnTyping({
        search: searchTerm.trim(),
      });

      console.log("Medicine Response:", response);

      if (response.status !== "success") {
        showToast(response.message, "oklch(57.7% 0.245 27.325)");
        setMedicines([]);
        return;
      }

      setMedicines(response.data || []);
    } catch (error) {
      showToast(error.message, "oklch(57.7% 0.245 27.325)");
    }
  }
  debounce(fetchItems, searchTerm)
  
  return (
    <div className="w-full bg-gray-50 shadow-md rounded-xl p-4 border border-gray-300 overflow-auto h-[80vh]">
      {/* Search Box */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-2 text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Salt Name, Brand Name, Product Form"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-3 border rounded-md py-1 px-2 border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-100"
        />
      </div>

      {/* Medicine List */}
      <div className="flex flex-wrap justify-start items-start gap-3 max-h-[450px] overflow-y-auto">
        {medicines.length > 0 ? (
          medicines.map((med) => (
            <MedicineCard
              key={med.id}
              med={med}
              handleAddMedicine={onSelectMedicine}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No medicines found</p>
        )}
      </div>
    </div>
  );
};

export default MedicineSearch;
