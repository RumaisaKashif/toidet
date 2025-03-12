import { useState } from "react";
import { useSearch } from "../SearchContext"; // Getting the hook
import search_icon from "../assets/search_icon.webp";

function SearchBar() {
  const { onSearch } = useSearch();
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input.trim()); // Trim spaces before updating the search context
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-white p-0 ml-4 mr-4 flex items-center space-x-4">
      <div className="flex flex-auto items-center bg-gray-100 p-2 rounded-full space-x-2">
        <input
          type="text"
          placeholder="Search Toilet"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent flex-grow px-4 outline-none text-gray-700"
        />
        <button onClick={handleSearch} className="p-0 border border-green-500 rounded-full">
          <img src={search_icon} alt="Search Icon" className="w-8 h-8 object-cover" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
