import SearchBar from './SearchBar';
import FilterButton from './FilterButton';
import AccountButton from './AccountButton';
function Header() {
    return (
      <header className="bg-white p-4 fixed top w-full flex items-center justify-between border-green-500 border-2 border-t border-r border-l">
        <FilterButton />
        <div className='flex-auto'> <SearchBar /></div>
        <AccountButton />
      </header>
    );
  }
  
  export default Header;
  