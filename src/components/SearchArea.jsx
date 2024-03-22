import { CiSearch } from "react-icons/ci";

const SearchArea = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="relative">
                <CiSearch className="absolute inset-y-0 left-0 w-6 h-6 text-gray-400 m-2" />
                <input
                    type="text"
                    className="w-96 py-2 px-10 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Search in a Technique or Celebrity..."
                />
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md"
            >
                Search
            </button>
        </div>
    );
}

export default SearchArea;
