import AccountButton from "./AccountButton";
import BackButton from "./BackButton";

function Header(){
    return (
        <header className="z-10 bg-white p-5 fixed top w-full flex flex-row items-center justify-between border-green-500 border-2 border-t border-r border-l">
          <BackButton />
          <div className="justify-center text-green-800 flex text-2xl font-semibold">
          NUS Toilet Finder
          </div>
          <div className="flex flex-row-reverse">
          <AccountButton />
          </div>
        </header>
      );
}

export default Header;