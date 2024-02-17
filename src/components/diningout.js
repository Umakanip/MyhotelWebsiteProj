import react from "react";
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/system";

function Diningout() {
  const theme = useTheme();
  return (
    <div style={{ height: "200px", paddingTop: "30px" }}>
      <Grid container spacing={2}>
        <StyledGridItem item md={1}>
          <p className="dining-line"></p>
        </StyledGridItem>
        <Grid item xs={12} md={4} sm={6}>
          <p className="dining-text">
            some top restaurant for dining out or in
          </p>
        </Grid>
        <Grid item xs={12} md={7} sm={6}>
          <p className="dining-para">
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

const StyledGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default Diningout;
