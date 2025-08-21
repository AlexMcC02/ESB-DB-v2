function Search({ searchTerm, setSearchTerm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchInput.value;
    setSearchTerm(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-gray-900 p-4 rounded-xl shadow-lg"
    >
      <input
        type="text"
        name="searchInput"
        placeholder="Enter parent star name... (e.g., Kepler-22)"
        className="p-3 rounded-lg w-100 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue={searchTerm}
      />
      <button
        type="submit"
        className="ml-4 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
      >
        Find Exoplanets
      </button>
    </form>
  );
}

export default Search;
