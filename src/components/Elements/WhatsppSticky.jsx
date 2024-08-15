import { FaWhatsappSquare } from "react-icons/fa";
import { openWhatsApp } from "../../utils/constants";

export default function WhatsappSticky() {
  return (
    <a
      className="whiteColor animate pointer font13"
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        fontSize: "52px",
        cursor: "pointer",
      }}
      onClick={() => openWhatsApp()}
    >
      <FaWhatsappSquare color="#25D366" title="Contact us" />
    </a>
  );
}
