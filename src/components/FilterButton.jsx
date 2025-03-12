import { useState, useEffect, useRef } from 'react';
import filter from '../assets/filter.png';
import { useOptions } from '../OptionsContext';

function FilterButton() {
    const dropDownRef = useRef(null); // referencing the drop down filter
    const buttonRef = useRef(null); // referencing the filter button

    const { selectedOptions, toggleCheckBox } = useOptions();

    const [visibility, setVisibility] = useState(false);

    const toggleDropDown = (click) => {
        setVisibility(!visibility);
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target) && 
                buttonRef.current && !buttonRef.current.contains(e.target)) {
                setVisibility(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    return (
        <div className="relative flex-none items-center space-x-2">
        <button 
            ref={buttonRef}
            className="p-0 border border-green-500 flex rounded-full"
            onClick={toggleDropDown}
        >
        <img src={filter} alt="Filter" className="w-10 h-10 object-cover rounded-full" />
          </button>
          {visibility && (
            <div
            ref={dropDownRef}
            className="text-gray-600 absolute items-center mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10"
          >
            <ul className="py-2">
              {/* Option 1 */}
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => toggleCheckBox('bidet')}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.bidet}
                  onChange={() => toggleCheckBox('bidet')}
                  className="mr-2"
                />
                Bidet
              </li>

              {/* Option 2 */}
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => toggleCheckBox('male')}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.male}
                  onChange={() => toggleCheckBox('male')}
                  className="mr-2"
                />
                Male
              </li>
  
              {/* Option 3 */}
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => toggleCheckBox('female')}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.female}
                  onChange={() => toggleCheckBox('female')}
                  className="mr-2"
                />
                Female
              </li>
  
              {/* Option 4 */}
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => toggleCheckBox('disabled')}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.disabled}
                  onChange={() => toggleCheckBox('disabled')}
                  className="mr-2"
                />
                Disabled
              </li>
            </ul>
          </div>
          )}
        </div>
    );
}

export default FilterButton;