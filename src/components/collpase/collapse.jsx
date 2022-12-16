import { useState } from "react";
import style from "./Collapse.module.css";
import ChevronUp from "../../assets/chevronUp.svg";
import ChevronDown from "../../assets/chevronDown.svg";

function Collapse({ open, children, title }) {
  const [isOpen, setIsOpen] = useState(open);

  function handleFilterOpening() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={style.container}>
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
            <img
              className={style.chevronUp}
              src={ChevronUp}
              alt="icone chevron montant"
            />
          )}
        </button>
      </div>
      <>{isOpen && <div className={style.p}>{children}</div>}</>
    </div>
  );
}

export default Collapse;
