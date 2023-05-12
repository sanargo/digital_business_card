import twitter from "./assets/Twitter Icon.svg";
import facebook from "./assets/Facebook Icon.svg";
import instagram from "./assets/Instagram Icon.svg";
import github from "./assets/GitHub Icon.svg";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={github} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
