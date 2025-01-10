import ToiletCard from "./ToiletCard.jsx";
import { useSearch } from "../SearchContext"; // import hook
import { useOptions } from '../OptionsContext'; // import hook
import { useState, useEffect } from "react";
import { fetchToilets } from "./firebase/firebaseUtils.js";

function ToiletList() {
  const [toilets, setToilets] = useState([]);
  const { searchInput } = useSearch();
  const {selectedOptions} = useOptions();

  useEffect(() => {
    async function getToilets() {
      try {
        const data = await fetchToilets();
        setToilets(data);
      } catch (error) {
        console.error("Error fetching toilets:", error);
      }
    }
    getToilets();
  }, []);

  const filteredToilets = toilets.filter((toilet) => {
    const lowerCaseSearch = searchInput.toLowerCase();
    if ((searchInput && !toilet.name.toLowerCase().includes(lowerCaseSearch)) ||
        (searchInput && !toilet.location.toLowerCase().includes(lowerCaseSearch))) {
      return false;
    }
    if (selectedOptions.unisex && toilet.gender !== 'unisex') return false;
    if (selectedOptions.male && toilet.gender !== 'male' && toilet.gender !== 'unisex') return false;
    if (selectedOptions.female && toilet.gender !== 'female' && toilet.gender !== 'unisex') return false;
    if (selectedOptions.disabled && !toilet.disabled) return false;
    if (selectedOptions.bidet && !toilet.bidet) return false;

    return true; // If no filters, include all toilet
    }
  );

  return (
    <div className="max-h-[555px] flex flex-col p-4 space-y-4 overflow-auto mt-8">
      <div className="justify-center text-green-800 flex text-2xl font-semibold">
        NUS Toilet Finder
      </div>
      {filteredToilets.length === 0 ? (
        <div className="justify-center text-neutral-500 flex text-2xl">
          No Toilet Found
        </div>
      ) : (
        filteredToilets.map((toilet) => (
          <ToiletCard key={toilet.id} toilet={toilet} />
        ))
      )}
    </div>
  );
}

export default ToiletList;
