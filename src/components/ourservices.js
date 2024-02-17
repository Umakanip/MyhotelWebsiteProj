import react from "react";
import Grid from "@mui/material/Grid";

function Services() {
  return (
    <div style={{ padding: "90px 100px 0" }}>
      <Grid container spacing={2}>
        <Grid item md={1}>
          <p className="service-line"></p>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <p className="service-text">
            Our<br></br> Services
          </p>
        </Grid>
        <Grid item xs={12} md={7} sm={6}>
          <p className="service-para">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
