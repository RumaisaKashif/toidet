function ToiletCard({ toilet }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 border-green-500 border-2">
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-bold">{toilet.name}</h3>
          <p className="text-gray-600">{toilet.location}</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-yellow-400">
              {'★'.repeat(toilet.rating)}
              {'☆'.repeat(5 - toilet.rating)}
            </span>
            {toilet.bidet && <img src="/bidet-icon.png" alt="Bidet" className="w-6 h-6" />}
            {toilet.accessible && <img src="/accessible-icon.png" alt="Accessible" className="w-6 h-6" />}
            <img
              src={`/gender-${toilet.gender.toLowerCase()}.png`}
              alt={toilet.gender}
              className="w-6 h-6"
            />
          </div>
        </div>
        <button className="p-2 border border-gray-300 rounded-full">
          <img src="/bookmark-icon.png" alt="Bookmark" className="w-6 h-6" />
        </button>
      </div>
    );
  }
  
  export default ToiletCard;
// above code is before gender field was removed

