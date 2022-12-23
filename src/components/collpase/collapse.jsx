import { useState } from "react";
import styles from "./Collapse.module.css";
import ChevronUp from "../../assets/chevronUp.svg";
import ChevronDown from "../../assets/chevronDown.svg";

function Collapse({ housingVariant = false, open, children, title }) {
  const [isOpen, setIsOpen] = useState(open);

  function handleFilterOpening() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <div
        className={housingVariant ? styles.housingCollapse : styles.collapse}
      >
        <h2>{title}</h2>
        <button type="button" onClick={handleFilterOpening}>
          {!isOpen ? (
            <img
              className={
                housingVariant ? styles.housingChevronDown : styles.chevronDown
              }
              src={ChevronDown}
              alt="icone chevron descendant"
            />
          ) : (
            <img
              className={
                housingVariant ? styles.housingChevronUp : styles.chevronUp
              }
              src={ChevronUp}
              alt="icone chevron montant"
            />
          )}
        </button>
      </div>
      <>
        {isOpen && (
          <div className={housingVariant ? styles.housingP : styles.p}>
            {children}
          </div>
        )}
      </>
    </div>
  );
}

export default Collapse;
