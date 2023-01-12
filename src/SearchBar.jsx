function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <div>
        <input
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
          type="text"
          placeholder="Search.."
        />
      </div>
      <input
        checked={inStockOnly}
        type="checkbox"
        onChange={(e) => onInStockOnlyChange(e.target.checked)}
      />
      <span>Only show products in stock</span>
    </form>
  );
}
export default SearchBar;
