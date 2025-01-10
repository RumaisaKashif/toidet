import ToiletCard from "./ToiletCard.jsx";
import { useSearch } from "../SearchContext"; // import hook
import { useState, useEffect } from "react";
import { fetchToilets } from "./firebase/firebaseUtils.js";

function ToiletList() {
  const [toilets, setToilets] = useState([]);
  const { searchInput } = useSearch();

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
    return (
      toilet.name.toLowerCase().includes(lowerCaseSearch) || 
      toilet.location.toLowerCase().includes(lowerCaseSearch)
    );
  });

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
