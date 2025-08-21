function Search({ searchTerm, setSearchTerm }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchInput.value;
    setSearchTerm(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchInput"
        placeholder="Enter parent star name... (e.g., Kepler-22)"
        className="p-2 border-2 rounded-4xl w-150"
        defaultValue={searchTerm}
      />
      <button
        type="submit"
        className="border-2 rounded-4xl p-2 ml-2 bg-blue-500 text-white hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default Search;
