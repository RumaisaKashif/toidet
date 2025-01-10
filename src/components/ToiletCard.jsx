import { useState } from 'react';
import bidetIcon from '../assets/bidet_icon.png';
import bookmarkIconUnsaved from '../assets/bookmark_icon_unsaved.png';
import bookmarkIconSaved from '../assets/bookmark_icon_saved.png';
import genderFemale from '../assets/gender_female.png';
import genderMale from '../assets/gender_male.png';
import disabledIcon from '../assets/disabled_icon.png';


function ToiletCard({ toilet }) {

  const [saved, setSaved] = useState(false);

  const handleSaved = () => {
    setSaved(!saved);
  }

    return (
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 border-green-500 border-2">
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg text-gray-600 font-bold">{toilet.name}</h3>
          <p className="text-gray-600">{toilet.location}</p>
          <div className="flex items-center space-x-2 mt-2"> 
            <span className="text-yellow-400">
              {'★'.repeat(toilet.rating)}
              {'☆'.repeat(5 - toilet.rating)}
            </span>
            {toilet.bidet && <img src={bidetIcon} alt="Bidet" className="w-7 h-7" />}
            
            {toilet.gender.toLowerCase() === 'unisex' ? (
              <div className='flex space-x-4 items-center'>
                <img src={genderMale} alt={toilet.gender} className='w-4.5 h-6'></img>
                <img src={genderFemale} alt={toilet.gender} className='w-4.5 h-6'></img>
                </div>
              ) : toilet.gender.toLowerCase() === 'male' ? (
                <img src={genderMale} alt={toilet.gender} className='w-4.5 h-6'></img>
              ) : toilet.gender.toLowerCase() === 'female' ? (
                <img src={genderFemale} alt={toilet.gender} className='w-4.5 h-6'></img>
              ) : null}
            {toilet.disabled && <img src={disabledIcon} alt="Disabled" className="w-7 h-7" />}
          </div>
        </div>
        <button 
          onClick={handleSaved}
          className="p-0 border-0 bg-transparent cursor-pointer">
          <img 
            src={saved ? bookmarkIconSaved : bookmarkIconUnsaved} 
            alt="Bookmark-Unsaved" 
            className="w-8 h-9" />
        </button>
      </div>
    );
  }
  
  export default ToiletCard;
