import { SearchProvider } from '../SearchContext'; // Global searching process
import { OptionsProvider } from '../OptionsContext';
import Header from '../components/MainPageHeader';
import SearchBar from '../components/SearchBar';
import ToiletList from '../components/ToiletList';
import Footer from '../components/Footer';

function MainPage() {
  return (
    <SearchProvider>
      <OptionsProvider>
        <div className="overflow-hidden bg-white p-0 w-screen min-h-screen flex-col">
          <Header />
          <SearchBar />
          <ToiletList />
          <Footer className="mt-auto"/>
        </div>
      </OptionsProvider>
    </SearchProvider>
  );
}

export default MainPage;