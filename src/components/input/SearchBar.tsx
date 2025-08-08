import { Search } from "lucide-react";
import { useState } from "react";

export const SearchBar: React.FC<{
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}> = ({ searchTerm, setSearchTerm }) => {
  const [isExpanded, setIsExpanded] = useState(false);


  console.log("is", isExpanded)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products, categories, brands..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              onBlur={() => setIsExpanded(false)}
            />
          </div>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
