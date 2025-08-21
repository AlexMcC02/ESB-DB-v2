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
        className="flex items-center gap-2 ml-4 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
        Find Exoplanets
      </button>
    </form>
  );
}

export default Search;
