import { useState } from 'react'
import './App.css'
import './index.css'
import logo from './logo.png'

const toilets = [
  { id: 1, name: 'Toilet A', gender: 'Male', bidet: false },
  { id: 2, name: 'Toilet B', gender: 'Female', bidet: true },
  { id: 3, name: 'Toilet C', gender: 'Male', bidet: true },
  { id: 4, name: 'Toilet D', gender: 'Female', bidet: false },
  { id: 5, name: 'Toilet E', gender: 'Male', bidet: true },
];

function App() {
  const [search, setSearch] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [bidetFilter, setBidetFilter] = useState(false);

  const filteredToilets = toilets
    .filter((toilet) => {
      return (
        toilet.name.toLowerCase().includes(search.toLowerCase()) &&
        (genderFilter ? toilet.gender === genderFilter : true) &&
        (bidetFilter ? toilet.bidet === bidetFilter : true)
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bg-green-500 min-h-screen max-w-fit flex flex-col"> {/* Ensure full screen height and width */}
      {/* Header */}
      <header className="bg-black text-white flex items-center justify-between p-4 w-full"> {/* Ensure header width fills the screen */}
        <div className="flex items-center space-x-1">
          <div className="w-16 h-16 bg-green-500 rounded-full mr-2">
          <img
            src={logo} 
            alt="Logo"
            className="w-full h-full object-cover rounded-full"
          />
          </div> {/* Logo Placeholder */}
          <h1 className="text-2xl font-bold">toidet</h1>
        </div>
        
        {/* Account Button and Search Bar */}
        <div className="flex items-center space-x-2 ml-11">
        <input
            type="text"
            placeholder="Search toilets"
            className="p-2 border border-gray-300 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-green-500 text-white p-2 rounded-md">Account</button>
          
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto p-4 w-full"> 
        <h2 className="text-3xl font-bold mb-4">NUS Toilet Finder</h2>

        {/* Filters */}
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center h-6">
            <label className="text-lg mr-2">Gender:</label>
            <select
              className="p-2 border border-gray-300 rounded"
              onChange={(e) => setGenderFilter(e.target.value)}
              value={genderFilter}
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="flex items-center h-6">
            <label className="text-xl mr-2 ml-40">Bidet:</label>
            <input
              type="checkbox"
              className="p-2"
              checked={bidetFilter}
              onChange={() => setBidetFilter(!bidetFilter)}
            />
          </div>
        </div>

        {/* Toilet List */}
        <ul className="space-y-2">
          {filteredToilets.map((toilet) => (
            <li key={toilet.id} className="border p-2 rounded shadow">
              <h3 className="text-xl font-semibold">{toilet.name}</h3>
              <p>{toilet.gender} Toilet</p>
              <p>{toilet.bidet ? 'Has Bidet' : 'No Bidet'}</p>
            </li>
          ))}
        </ul>
        {/*
        This code splits the toilet list into 2:
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredToilets.map((toilet) => (
          <div key={toilet.id} className="border p-2 rounded shadow">
            <h3 className="text-xl font-semibold">{toilet.name}</h3>
            <p>{toilet.gender} Toilet</p>
            <p>{toilet.bidet ? 'Has Bidet' : 'No Bidet'}</p>
          </div>
        ))}
          </div> 
        */}
      </div>
    </div>
  );
}

export default App;
