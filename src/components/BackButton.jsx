import { Link } from "react-router-dom";
import goBack from "../assets/BackButton.png";

function BackButton({searchInput, selectedOptions}){
    return(
        <Link to={{
            pathname: `/`,
            state: {searchInput, selectedOptions}
        }}>
        <div className="flex items-center space-x-4">
            <button
                className="p-0 border border-green-500 rounded-full">
            <img src={goBack} alt="Back" className="w-10 h-10 bg-white rounded-full object-cover" />
            </button>
        </div>
        </Link>
    )
}

export default BackButton;