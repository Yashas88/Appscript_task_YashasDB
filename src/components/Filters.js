import { useState } from "react";

const IDEAL_FOR_OPTIONS = ["Men", "Women", "Baby & Kids"];

const ACCORDION_SECTIONS = [
  { key: "idealFor", label: "IDEAL FOR", hasContent: true },
  { key: "occasion", label: "OCCASION", hasContent: false },
  { key: "work", label: "WORK", hasContent: false },
  { key: "fabric", label: "FABRIC", hasContent: false },
  { key: "segment", label: "SEGMENT", hasContent: false },
  { key: "suitableFor", label: "SUITABLE FOR", hasContent: false },
  { key: "rawMaterials", label: "RAW MATERIALS", hasContent: false },
  { key: "pattern", label: "PATTERN", hasContent: false },
];

export default function Filters({ categories = [], selectedCategories, onToggleCategory }) {
  const [openSection, setOpenSection] = useState("category");
  const [idealFor, setIdealFor] = useState([]);
  const [allIdealFor, setAllIdealFor] = useState(true);

  const toggleAccordion = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  const toggleIdealFor = (option) => {
    setIdealFor((prev) => {
      const next = prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option];
      setAllIdealFor(next.length === 0);
      return next;
    });
  };

  const selectAllIdealFor = () => {
    setIdealFor([]);
    setAllIdealFor(true);
  };

  return (
    <div className="filters">
      {/* Customizable checkbox */}
      <div className="filter-customizable">
        <label className="filter-custom-check">
          <input type="checkbox" defaultChecked />
          <span className="filter-custom-box" />
          <span className="filter-custom-label">CUSTOMIZABLE</span>
        </label>
      </div>

      {/* Category Filter (mapped to API) */}
      <div className="filter-section">
        <div
          className={`filter-section-heading${openSection === "category" ? " expanded" : ""}`}
          onClick={() => toggleAccordion("category")}
        >
          <span>CATEGORY</span>
          <span className="filter-arrow">▼</span>
        </div>
        <div className={`filter-section-body${openSection === "category" ? " open" : ""}`}>
          <div className="filter-section-inner">
            {categories.map((cat) => {
              const isActive = selectedCategories.includes(cat);
              return (
                <div
                  key={cat}
                  className={`filter-item${isActive ? " active" : ""}`}
                  onClick={() => onToggleCategory(cat)}
                >
                  <div className="filter-checkbox">
                    <span className="filter-checkbox-tick">✓</span>
                  </div>
                  <span className="filter-label">{cat}</span>
                </div>
              );
            })}
            {selectedCategories.length > 0 && (
              <span
                className="filter-unselect"
                onClick={() => selectedCategories.forEach((cat) => onToggleCategory(cat))}
              >
                Unselect all
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Accordion sections */}
      {ACCORDION_SECTIONS.map((section) => (
        <div key={section.key} className="filter-section">
          <div
            className={`filter-section-heading${openSection === section.key ? " expanded" : ""}`}
            onClick={() => toggleAccordion(section.key)}
          >
            <span>{section.label}</span>
            <span className="filter-arrow">▼</span>
          </div>
          <div className={`filter-section-body${openSection === section.key ? " open" : ""}`}>
            <div className="filter-section-inner">
              {section.key === "idealFor" ? (
                <>
                  <span className="filter-all-label">All</span>
                  {!allIdealFor && (
                    <span className="filter-unselect" onClick={selectAllIdealFor}>
                      Unselect all
                    </span>
                  )}
                  {IDEAL_FOR_OPTIONS.map((opt) => {
                    const isActive = idealFor.includes(opt);
                    return (
                      <div
                        key={opt}
                        className={`filter-item${isActive ? " active" : ""}`}
                        onClick={() => toggleIdealFor(opt)}
                      >
                        <div className="filter-checkbox">
                          <span className="filter-checkbox-tick">✓</span>
                        </div>
                        <span className="filter-label">{opt}</span>
                      </div>
                    );
                  })}
                </>
              ) : (
                <span className="filter-placeholder">All {section.label.charAt(0) + section.label.slice(1).toLowerCase()}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
