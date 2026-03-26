import { useState, useEffect, useRef } from "react";

const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "newest", label: "Newest First" },
  { value: "popular", label: "Popular" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "price-low", label: "Price: Low to High" },
];

export default function SortBar({
  itemCount,
  sortOption,
  onSortChange,
  showFilters,
  onToggleShowFilters,
  filtersOpen,
  onToggleFilters,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLabel =
    SORT_OPTIONS.find((o) => o.value === sortOption)?.label || "Recommended";

  return (
    <div className="sort-bar">
      <div className="sort-bar-left">
        <span className="item-count">{itemCount} ITEMS</span>
        <button
          className="filter-toggle-desktop"
          onClick={onToggleShowFilters}
        >
          <span className="filter-toggle-chevron">{showFilters ? "\u2039" : "\u203A"}</span>
          <span className="filter-toggle-text">{showFilters ? "HIDE FILTER" : "SHOW FILTER"}</span>
        </button>
        {/* Mobile toggle */}
        <button
          className={`filter-toggle-btn${filtersOpen ? " active" : ""}`}
          onClick={onToggleFilters}
        >
          FILTER
        </button>
      </div>

      <div className="sort-bar-right" ref={dropdownRef}>
        <button
          className="sort-dropdown-trigger"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          {activeLabel.toUpperCase()}
          <span className={`sort-chevron${isDropdownOpen ? " open" : ""}`}>▼</span>
        </button>
        {isDropdownOpen && (
          <div className="sort-dropdown-menu">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                className={`sort-dropdown-item${sortOption === opt.value ? " active-option" : ""}`}
                onClick={() => {
                  onSortChange(opt.value);
                  setIsDropdownOpen(false);
                }}
              >
                <span className="sort-check">{sortOption === opt.value ? "✔" : ""}</span>
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
