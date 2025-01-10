import logo from '../assets/logo.png'
function Footer() {
    return (
      <footer className="bg-green-500 p-4 fixed bottom-0 w-full flex items-center justify-center">
        <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-green-500 rounded-full">
          <img
            src={logo} 
            alt="Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div> 
          <h1 className="text-2xl font-bold text-white">toidet</h1>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  