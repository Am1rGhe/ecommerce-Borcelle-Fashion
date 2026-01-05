import stylesSvg from "../header/Header.module.css";
import styles from "./SearchOverlay.module.css";

function SearchOverlay({isSearchOpen, onCloseSearch }) {
  if (!isSearchOpen) return null;
  return (
    <div className={`${styles.overlay} ${isSearchOpen ? styles.open : ""}`}>
      <input type="text" placeholder="Search" />
      {/* close the search overlay */}
      <button onClick={()=>onCloseSearch()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={stylesSvg.headerSvg}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchOverlay;
