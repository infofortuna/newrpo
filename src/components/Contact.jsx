// import React from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Stack,
//   Avatar,
//   Divider,
//   Grid,
//   IconButton,
//   Snackbar,
//   CircularProgress,
// } from "@mui/material";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { Formik } from "formik";
// import * as Yup from "yup";

// // Validation Schema
// const validationSchema = Yup.object({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   phone: Yup.string()
//     .matches(/^[0-9]+$/, "Phone number must be numeric")
//     .required("Phone number is required"),
//   message: Yup.string().required("Message is required"),
// });

// function ContactUs() {
//   const [open, setOpen] = React.useState(false);

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpen(false);
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "white",
//         py: 6,
//         px: 2,
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         boxShadow: 1,
//       }}
//     >
//       <Grid
//         container
//         spacing={3}
//         sx={{
//           borderRadius: 2,
//           boxShadow: 3,
//           backgroundColor: "#f9f9f9",
//           width: { xs: "100%", md: "80%", lg: "70%" },
//           overflow: "hidden",
//         }}
//       >
//         {/* Right Side: Contact Form Section */}
//         <Grid item xs={12} md={6}>
//           <Box sx={{ p: 4 }}>
//             <Typography
//               variant="h5"
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: { xs: "1.5rem", md: "1.75rem" },
//                 color: "#00796b",
//               }}
//             >
//               Contact Us
//             </Typography>
//             <Typography sx={{ mb: 3 }} color="textSecondary">
//               Please fill out the form below, and our team will get back to you
//               promptly.
//             </Typography>
//             <Formik
//               initialValues={{
//                 name: "",
//                 email: "",
//                 phone: "",
//                 message: "",
//               }}
//               validationSchema={validationSchema}
//               onSubmit={(values, { resetForm, setSubmitting }) => {
//                 setTimeout(() => {
//                   setOpen(true);
//                   resetForm();
//                   setSubmitting(false);
//                 }, 500);
//               }}
//             >
//               {({
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 values,
//                 errors,
//                 touched,
//                 isSubmitting,
//               }) => (
//                 <form onSubmit={handleSubmit}>
//                   <Stack spacing={2}>
//                     <TextField
//                       id="name"
//                       name="name"
//                       label="Name"
//                       variant="outlined"
//                       value={values.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       error={touched.name && Boolean(errors.name)}
//                       helperText={touched.name && errors.name}
//                       required
//                     />
//                     <TextField
//                       id="email"
//                       name="email"
//                       label="Email"
//                       variant="outlined"
//                       type="email"
//                       value={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       error={touched.email && Boolean(errors.email)}
//                       helperText={touched.email && errors.email}
//                       required
//                     />
//                     <TextField
//                       id="phone"
//                       name="phone"
//                       label="Phone"
//                       variant="outlined"
//                       type="tel"
//                       value={values.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       error={touched.phone && Boolean(errors.phone)}
//                       helperText={touched.phone && errors.phone}
//                       required
//                     />
//                     <TextField
//                       id="message"
//                       name="message"
//                       label="Message"
//                       variant="outlined"
//                       multiline
//                       rows={4}
//                       value={values.message}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       error={touched.message && Boolean(errors.message)}
//                       helperText={touched.message && errors.message}
//                       required
//                     />
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       color="primary"
//                       size="large"
//                       disabled={isSubmitting}
//                       sx={{
//                         "&:hover": {
//                           backgroundColor: "#005b5b",
//                         },
//                       }}
//                     >
//                       {isSubmitting ? (
//                         <CircularProgress size={24} color="inherit" />
//                       ) : (
//                         "Submit"
//                       )}
//                     </Button>
//                   </Stack>
//                 </form>
//               )}
//             </Formik>
//           </Box>
//         </Grid>

//         {/* Left Side: Get in Touch Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               p: 4,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "flex-start",
//               backgroundColor: "#00796b",
//               color: "white",
//               borderRadius: 2,
//               boxShadow: 1,
//             }}
//           >
//             <Box
//               sx={{
//                 border: "4px solid white",
//                 borderRadius: "50%",
//                 padding: "4px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 mb: 2,
//                 transition: "transform 0.3s ease", // Smooth transition
//                 "&:hover": {
//                   transform: "rotateY(20deg) rotateX(10deg)", // Rotate on hover
//                 },
//               }}
//             >
//               <Avatar
//                 alt="Fortuna Enterprise"
//                 src="company-logo-png.png"
//                 sx={{
//                   width: 60,
//                   height: 60,
//                   transition: "transform 0.3s ease", // Smooth transition
//                   "&:hover": {
//                     transform: "rotateY(20deg) rotateX(10deg)", // Rotate on hover
//                   },
//                 }}
//               />
//             </Box>
//             <Typography
//               variant="h5"
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: { xs: "1.5rem", md: "1.75rem" },
//                 color: "white",
//               }}
//             >
//               Get in Touch
//             </Typography>
//             <Typography sx={{ mb: 2, fontSize: { xs: "0.85rem", md: "1rem" } }}>
//               We’re here to assist you with all your import-export needs. Reach
//               out to us through any of the following methods:
//             </Typography>
//             <Divider sx={{ mb: 2, backgroundColor: "whiteAlpha.400" }} />
//             <Typography fontWeight="bold">Contact Information:</Typography>
//             <Box
//               sx={{ border: "1px solid white", borderRadius: 1, p: 2, mt: 2 }}
//             >
//               <Stack spacing={1}>
//                 <Typography display="flex" alignItems="center">
//                   <FaPhoneAlt style={{ marginRight: 8 }} />
//                   +91-7506615066
//                 </Typography>
//                 <Typography display="flex" alignItems="center">
//                   <FaEnvelope style={{ marginRight: 8 }} />
//                   <span
//                     style={{ color: "#ffeb3b", textDecoration: "underline" }}
//                   >
//                     info@fortunaenterprise.in
//                   </span>
//                 </Typography>
//                 <Typography display="flex" alignItems="center">
//                   <FaMapMarkerAlt style={{ marginRight: 8 }} />
//                   Fortuna Enterprise B-320, Atlantis K10, 3A, Sayaji Path,
//                   Alkapuri, Vadodara, Gujarat 390005
//                 </Typography>
//               </Stack>
//             </Box>
//             <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
//               <IconButton color="inherit" href="#" aria-label="Facebook">
//                 <FaFacebook />
//               </IconButton>
//               <IconButton color="inherit" href="#" aria-label="Twitter">
//                 <FaTwitter />
//               </IconButton>
//               <IconButton
//                 color="inherit"
//                 href="https://www.linkedin.com/in/mahesh-gulechaa-941867210"
//                 target="_blank"
//                 aria-label="LinkedIn"
//               >
//                 <FaLinkedin />
//               </IconButton>
//               <IconButton
//                 color="inherit"
//                 href="https://www.instagram.com/in/mahesh-gulechaa-941867210"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram />
//               </IconButton>
//             </Stack>
//             {/* Google Map */}
//             <Box
//               sx={{
//                 mt: 3,
//                 width: "100%",
//                 height: "200px",
//                 borderRadius: 2,
//                 overflow: "hidden",
//               }}
//             >
//               <iframe
//                 title="Google Map"
//                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15887.12599008619!2d73.1659085!3d22.3176504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b84cad1c5f%3A0x5f36b27a05260b16!2sAtlantis%20K10!5e0!3m2!1sen!2sus!4v1697762919003!5m2!1sen!2sus"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//               />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>

//       {/* Snackbar for form submission feedback */}
//       <Snackbar
//         open={open}
//         autoHideDuration={3000}
//         onClose={handleClose}
//         message="Thank you! Your message has been submitted."
//       />
//     </Box>
//   );
// }

// export default ContactUs;
import  { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  Divider,
  Grid,
  IconButton,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your form submission logic
    setIsSubmitting(true);
    setTimeout(() => {
      setOpen(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 500);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        py: 6,
        px: 2,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 1,
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#f9f9f9",
          width: { xs: "100%", md: "80%", lg: "70%" },
          overflow: "hidden",
        }}
      >
        {/* Right Side: Contact Form Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                color: "#00796b",
              }}
            >
              Contact Us
            </Typography>
            <Typography sx={{ mb: 3 }} color="textSecondary">
              Please fill out the form below, and our team will get back to you
              promptly.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#005b5b",
                    },
                  }}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Stack>
            </form>
          </Box>
        </Grid>

        {/* Left Side: Get in Touch Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundColor: "#00796b",
              color: "white",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Box
              sx={{
                border: "4px solid white",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Avatar
                alt="Fortuna Enterprise"
                src="company-logo-png.png"
                sx={{
                  width: 60,
                  height: 60,
                }}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                color: "white",
              }}
            >
              Get in Touch
            </Typography>
            <Typography sx={{ mb: 2, fontSize: { xs: "0.85rem", md: "1rem" } }}>
              We’re here to assist you with all your import-export needs. Reach
              out to us through any of the following methods:
            </Typography>
            <Divider sx={{ mb: 2, backgroundColor: "whiteAlpha.400" }} />
            <Typography fontWeight="bold">Contact Information:</Typography>
            <Box
              sx={{ border: "1px solid white", borderRadius: 1, p: 2, mt: 2 }}
            >
              <Stack spacing={1}>
                <Typography display="flex" alignItems="center">
                  <FaPhoneAlt style={{ marginRight: 8 }} />
                  +91-7506615066
                </Typography>
                <Typography display="flex" alignItems="center">
                  <FaEnvelope style={{ marginRight: 8 }} />
                  <span
                    style={{ color: "#ffeb3b", textDecoration: "underline" }}
                  >
                    info@fortunaenterprise.in
                  </span>
                </Typography>
                <Typography display="flex" alignItems="center">
                  <FaMapMarkerAlt style={{ marginRight: 8 }} />
                  Fortuna Enterprise B-320, Atlantis K10, 3A, Sayaji Path,
                  Alkapuri, Vadodara, Gujarat 390005
                </Typography>
              </Stack>
            </Box>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <IconButton color="inherit" href="#" aria-label="Facebook">
                <FaFacebook />
              </IconButton>
              <IconButton color="inherit" href="#" aria-label="Twitter">
                <FaTwitter />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.linkedin.com/in/mahesh-gulechaa-941867210"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/in/mahesh-gulechaa-941867210"
                aria-label="Instagram"
              >
                <FaInstagram />
              </IconButton>
            </Stack>
            {/* Google Map */}
            <Box
              sx={{
                mt: 3,
                width: "100%",
                height: "200px",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15887.12599008619!2d73.1659085!3d22.3176504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b84cad1c5f%3A0x5f36b27a05260b16!2sAtlantis%20K10!5e0!3m2!1sen!2sus!4v1697762919003!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Thank you! Your message has been submitted."
      />
    </Box>
  );
}

export default ContactUs;
