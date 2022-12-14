import React from "react";
import style from "./Footer.module.css";
import Footers1 from "./Footers1";
import Footers2 from "./Footers2";
import Footers3 from "./Footers3";
import Footers4 from "./Footers4";

const Footer = ({ number, setnumber }) => {
  const FooterList = {
    1: <Footers1 />,
    2: <Footers2 />,
    3: <Footers3 />,
    4: <Footers4 />,
  };

  console.log(number);

  const changeFooter = (footerIndex) => {
    FooterList({ footer: footerIndex });
  };

  return (
    <footer className={style.footer}>
      {FooterList[number]}
      <div className={style.footerButtons}>
        <button
          class="btn btn-ghost"
          onClick={() => changeFooter(setnumber(1))}
        >
          1
        </button>
        <button
          class="btn btn-ghost"
          onClick={() => changeFooter(setnumber(2))}
        >
          2
        </button>
        <button
          class="btn btn-ghost"
          onClick={() => changeFooter(setnumber(3))}
        >
          3
        </button>
        <button
          class="btn btn-ghost"
          onClick={() => changeFooter(setnumber(4))}
        >
          4
        </button>
      </div>
    </footer>
  );
};

export default Footer;
