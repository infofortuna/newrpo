import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";

export default function PricingPlans() {
  const pricingPlans = [
    {
      name: "Standard",
      description:
        "Paid in full at the time of advance deposit to the supplier.",
      services: [
        "Supplier Identification",
        "Sampling and Product Development",
        "Negotiation and Price Evaluation",
        "Quality Control and Inspection",
        "Logistics and Supply Chain Management",
        "Ongoing Supplier Management",
        "Supplier Performance Evaluation",
      ],
      productValues: [
        { value: "$1k - $3k", fee: "$200" },
        { value: "$3k - $5k", fee: "$300" },
        { value: "$5k - $10k", fee: "$500" },
        { value: "$10k - $20k", fee: "$700" },
        { value: "$20k - $30k", fee: "$1000" },
        { value: "More than $30k", fee: "Negotiable" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-16 px-4">
      <Typography variant="h4" component="h1" className="font-bold mb-4">
        Pricing Plans
      </Typography>
      <Typography variant="body1" className="text-center mb-8">
        Consultation regarding Indian market outlook, supplier complexity, price
        ranges, import plans and procedures, custom compliances are free.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} className="bg-white">
            <CardHeader
              title="Let us know your requirements"
              className="bg-blue-600 text-white"
            />
            <CardContent>
              <form>
                <TextField
                  label="Full Name *"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="Company Name *"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="Work Email *"
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="WhatsApp Number *"
                  variant="outlined"
                  type="tel"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="Product Requirement Specification *"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="mt-4">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>

        {/* Pricing Section */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} className="bg-white">
            <CardHeader
              title="Standard Pricing"
              className="bg-blue-600 text-white"
            />
            <CardContent>
              <Typography variant="body2" className="mb-4">
                Paid in full at the time of advance deposit to the supplier.
              </Typography>
              <Typography variant="h6">Included Services:</Typography>
              <ul className="list-disc list-inside mb-4">
                {pricingPlans[0].services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <table className="w-full text-left border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-2 py-1">
                      Product Value
                    </th>
                    <th className="border border-gray-300 px-2 py-1">
                      Service Fee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingPlans[0].productValues.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1">
                        {item.value}
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        {item.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Google Map Section */}
      <div className="w-full mt-10">
        <h2 className="text-xl font-semibold text-center mb-4">Our Location</h2>
        <Box
          sx={{
            mt: 4,
            width: "100%",
            height: "200px",
            borderRadius: "lg",
            overflow: "hidden",
          }}>
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
      </div>
    </div>
  );
}
