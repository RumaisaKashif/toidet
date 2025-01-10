import filter from './filter.png';

function FilterButton() {
    return (
        <div className="flex items-center space-x-2">
        <button className="p-0 border border-green-500 rounded-full">
            <img src={filter} alt="Filter" className="w-9 h-9 object-cover rounded-full" />
          </button>
        </div>
    );
}

export default FilterButton;