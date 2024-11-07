import { Tooltip, Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppTopUp = () => {
  const handleClick = () => {
    const message =
      "Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20products.";
    const url = `https://api.whatsapp.com/send?phone=917506615066&text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <Tooltip title="Contact Us on WhatsApp" arrow>
      <Fab
        color="success"
        aria-label="WhatsApp"
        style={{
          height: "44px",
          width: "44px",
          position: "fixed",
          bottom: "80px",
          right: "14px",
          zIndex: 1000,
          outline: "none",
        }}
        onClick={handleClick}
        onFocus={(e) => (e.target.style.outline = "none")}
        onBlur={(e) => (e.target.style.outline = "")}
      >
        <WhatsAppIcon />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppTopUp;
