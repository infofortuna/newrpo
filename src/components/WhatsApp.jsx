// 1st
// import { Button, Menu, MenuItem, Tooltip, Fab } from "@mui/material";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import React, { useState } from "react";

// const WhatsAppTopUp = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedMessage, setSelectedMessage] = useState("");

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleOptionSelect = (message) => {
//     setSelectedMessage(message);
//     handleMenuClose();
//   };

//   const handleTopUpClick = () => {
//     const message =
//       selectedMessage ||
//       "Hello!%20I%20would%20like%20to%20inquire%20about%20the%20top-up%20process%20for%20my%20account.";
//     window.open(
//       `https://api.whatsapp.com/send?phone=917506615066&text=${message}`,
//       "_blank"
//     );
//   };

//   return (
//     <>
//       <Tooltip title="Contact Us on WhatsApp" arrow>
//         <Fab
//           color="primary"
//           aria-label="WhatsApp"
//           style={{
//             position: "fixed",
//             bottom: "16px",
//             right: "16px",
//             zIndex: 1000,
//           }}
//           onClick={handleMenuClick}
//         >
//           <WhatsAppIcon />
//         </Fab>
//       </Tooltip>

//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//         PaperProps={{
//           style: {
//             borderRadius: "8px",
//             marginTop: "8px",
//           },
//         }}
//       >
//         <MenuItem onClick={() => handleOptionSelect("Hi!%20I%20need%20help%20with%20my%20account.")}>
//           Option 1
//         </MenuItem>
//         <MenuItem onClick={() => handleOptionSelect("Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.")}>
//           Option 2
//         </MenuItem>
//         <MenuItem onClick={() => handleOptionSelect("Hi!%20I%20have%20a%20question%20about%20my%20recent%20order.")}>
//           Option 3
//         </MenuItem>
//         {/* Add more options as needed */}
//       </Menu>

//       <Button
//         variant="outlined"
//         style={{
//           position: "fixed",
//           bottom: "80px",
//           right: "16px",
//           zIndex: 1000,
//           backgroundColor: "#fff",
//           borderColor: "#4CAF50",
//           color: "#4CAF50",
//           borderRadius: "8px",
//           fontWeight: "bold",
//           padding: "10px 20px",
//         }}
//         onClick={handleTopUpClick}
//       >
//         Send Message
//       </Button>
//     </>
//   );
// };

// export default WhatsAppTopUp;

// 2nd
// import { Button, Menu, MenuItem, Tooltip, Fab } from "@mui/material";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import React, { useState } from "react";

// const WhatsAppTopUp = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedMessage, setSelectedMessage] = useState("");
//   const [showSendButton, setShowSendButton] = useState(false); // State to control Send Message button visibility

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleOptionSelect = (message) => {
//     setSelectedMessage(message);
//     setShowSendButton(true); // Show the Send Message button when an option is selected
//     handleMenuClose();
//   };

//   const handleTopUpClick = (event) => {
//     // Prevent the default behavior to avoid scroll issues
//     event.preventDefault();
//     const message =
//       selectedMessage ||
//       "Hello!%20I%20would%20like%20to%20inquire%20about%20the%20top-up%20process%20for%20my%20account.";
//     window.open(
//       `https://api.whatsapp.com/send?phone=917506615066&text=${message}`,
//       "_blank"
//     );

//     // Optionally, reset the state after sending the message
//     setShowSendButton(false);
//     setSelectedMessage(""); // Clear selected message after sending
//   };

//   return (
//     <>
//       <Tooltip title="Contact Us on WhatsApp" arrow>
//         <Fab
//           color="primary"
//           aria-label="WhatsApp"
//           style={{
//             position: "fixed",
//             bottom: "16px",
//             right: "115px",
//             zIndex: 1000,
//             outline: "none", // Remove focus outline
//           }}
//           onClick={handleMenuClick}
//           onFocus={(e) => (e.target.style.outline = "none")} // Keep focus outline hidden
//           onBlur={(e) => (e.target.style.outline = "")} // Restore outline on blur
//         >
//           <WhatsAppIcon />
//         </Fab>
//       </Tooltip>

//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//         PaperProps={{
//           style: {
//             borderRadius: "8px",
//             marginTop: "8px",
//             boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Optional: Adding shadow to menu
//           },
//         }}>
//         <MenuItem
//           onClick={() =>
//             handleOptionSelect("Hi!%20I%20need%20help%20with%20my%20account.")
//           }>
//           Option 1
//         </MenuItem>
//         <MenuItem
//           onClick={() =>
//             handleOptionSelect(
//               "Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
//             )
//           }>
//           Option 2
//         </MenuItem>
//         <MenuItem
//           onClick={() =>
//             handleOptionSelect(
//               "Hi!%20I%20have%20a%20question%20about%20my%20recent%20order."
//             )
//           }>
//           Option 3
//         </MenuItem>
//         {/* Add more options as needed */}
//       </Menu>

//       {/* Conditionally render the Send Message button */}
//       {showSendButton && (
//         <Button
//           variant="outlined"
//           style={{
//             position: "fixed",
//             bottom: "80px",
//             right: "16px",
//             zIndex: 1000,
//             backgroundColor: "#fff",
//             borderColor: "#4CAF50",
//             color: "#4CAF50",
//             borderRadius: "8px",
//             fontWeight: "bold",
//             padding: "10px 20px",
//             outline: "none", // Remove focus outline
//           }}
//           onClick={handleTopUpClick}
//           onFocus={(e) => (e.target.style.outline = "none")} // Remove default focus outline
//           onBlur={(e) => (e.target.style.outline = "")} // Restore outline on blur
//         >
//           Send Message
//         </Button>
//       )}
//     </>
//   );
// };

// export default WhatsAppTopUp;

//3

import { Menu, MenuItem, Tooltip, Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import ImportExportIcon from "@mui/icons-material/ImportExport"; // New icon for Import/Export
import { useState } from "react";

const WhatsAppTopUp = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (message) => {
    const url = `https://api.whatsapp.com/send?phone=917506615066&text=${message}`;
    window.open(url, "_blank");
    handleMenuClose();
  };

  return (
    <>
      <Tooltip title="Contact Us on WhatsApp" arrow>
        <Fab
          color="primary"
          aria-label="WhatsApp"
          style={{
            position: "fixed",
            bottom: "16px",
            right: "115px",
            zIndex: 1000,
            outline: "none",
          }}
          onClick={handleMenuClick}
          onFocus={(e) => (e.target.style.outline = "none")}
          onBlur={(e) => (e.target.style.outline = "")}>
          <WhatsAppIcon />
        </Fab>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            borderRadius: "8px",
            marginTop: "8px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          },
        }}>
        <MenuItem
          onClick={() =>
            handleOptionSelect(
              "Hi!%20I%20need%20help%20with%20your%20services."
            )
          }
          style={{
            padding: "12px 16px",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f1f1f1")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "white")
          }>
          <HelpIcon style={{ marginRight: "8px" }} />
          Help!
        </MenuItem>

        <MenuItem
          onClick={() =>
            handleOptionSelect(
              "Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            )
          }
          style={{
            padding: "12px 16px",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f1f1f1")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "white")
          }>
          <InfoIcon style={{ marginRight: "8px" }} />
          Services
        </MenuItem>

        <MenuItem
          onClick={() =>
            handleOptionSelect(
              "Hi!%20I%20have%20a%20question%20about%20my%20import/%20export."
            )
          }
          style={{
            padding: "12px 16px",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f1f1f1")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "white")
          }>
          <ImportExportIcon style={{ marginRight: "8px" }} />
          Import/Export
        </MenuItem>

        {/* Add more options as needed */}
      </Menu>
    </>
  );
};

export default WhatsAppTopUp;
