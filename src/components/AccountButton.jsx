import account from '../assets/account.png';
function AccountButton() {
    return (
        <div className="flex items-center space-x-4">
          <button className="p-0 border border-green-500 rounded-full">
            <img src={account} alt="User" className="w-10 h-10 object-cover rounded-full" />
          </button>
        </div>
    );
}

export default AccountButton