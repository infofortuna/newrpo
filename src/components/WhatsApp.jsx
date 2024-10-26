import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppTopUp = () => {
  const handleTopUpClick = () => {
    // Link to your WhatsApp chat or top-up service
    window.open(
      "https://api.whatsapp.com/send?phone==+917506615066&text=Hi,%20I%20would%20like%20to%20top%20up%20my%20account.",
      "_blank"
    );
  };

  return (
    <Button
      variant="contained"
      color="success"
      style={{
        position: "fixed",
        bottom: "16px",
        right: "86px",
        zIndex: 1000, // Keep it on top
      }}
      onClick={handleTopUpClick}
    >
      <WhatsAppIcon />
    </Button>
  );
};

export default WhatsAppTopUp;
