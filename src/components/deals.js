import MyImg from "./../components/images/images";
import Grid from "@mui/material/Grid";

function Deals() {
  return (
    <div className="deal-comp">
      <Grid container spacing={2}>
        <Grid item xs={1} md={1} style={{ paddingTop: "15%" }}>
          <p className="deal-line"></p>
        </Grid>
        <Grid item xs={4} md={4} style={{ paddingTop: "15%" }}>
          {/* <div style={{ paddingTop: "40%" }}> */}
          <p className="download">Download app for Exciting Deals</p>

          <p className="download-content">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div>
            <img src={MyImg.GooglePlay} style={{ width: "45%" }}></img>{" "}
            <img src={MyImg.AppStore} style={{ width: "40%" }}></img>
          </div>
          {/* </div> */}
        </Grid>
        <Grid item xs={7} md={7}>
          <div style={{ textAlign: "center", position: "relative" }}>
            <img src={MyImg.AppScreen} className="app-screen"></img>
            <img src={MyImg.Dotbg1} className="app-store"></img>
            <img src={MyImg.Cauliflower}></img>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Deals;
