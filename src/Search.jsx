function Search({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Enter parent star name... (e.g., Kepler-22)"
      className="p-2 border-2 rounded-4xl w-150"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default Search;
