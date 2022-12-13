import { useState } from "react";
import style from "./Collapse.module.css";
import ChevronUp from "../../assets/chevronUp.svg";
import ChevronDown from "../../assets/chevronDown.svg";

function Collapse({ open, children, title }) {
  // eslint-disable-next-line no-mixed-operators

  const [isOpen, setIsOpen] = useState(open);

  function handleFilterOpening() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <div className={style.collapse}>
        <h2>{title}</h2>
        <button type="button" onClick={handleFilterOpening}>
          {!isOpen ? (
            <img
              className={style.chevronDown}
              src={ChevronDown}
              alt="icone chevron descendant"
            />
          ) : (
            <img src={ChevronUp} alt="icone chevron montant" />
          )}
        </button>
      </div>
      <div>
        <div>{isOpen && <p className={style.p}>{children}</p>}</div>
      </div>
    </>
  );
}

export default Collapse;
