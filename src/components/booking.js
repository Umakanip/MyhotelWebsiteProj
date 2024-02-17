import Grid from "@mui/material/Grid";
import MyImg from "./../components/images/images";
import EastIcon from "@mui/icons-material/East";
import PlaceIcon from "@mui/icons-material/Place";

function Booking() {
  const style = {};
  return (
    <div>
      <Grid container spacing={2} style={{ marginTop: "30px" }}>
        <Grid item xs={12} md={4} sm={6}>
          <div style={{ position: "relative", margin: "0 30px" }}>
            <img className="fire-water" src={MyImg.FireWater} alt="" />
            <div className="fire-overlay">
              <h3>The Wondon</h3>
              <p
                style={{
                  fontSize: "12px",
                }}
              >
                we are all about we are all about to the fullest and oil content
                diningout or intaining out or in!
              </p>
              <div>
                <span style={{ fontSize: "12px" }}>
                  {" "}
                  <PlaceIcon style={{ color: "#ffffff" }} /> Mumbai City
                </span>
                <button className="book-now">
                  Book Now <EastIcon />
                </button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <div style={{ position: "relative", margin: "0 30px" }}>
            <img className="wondon-img" src={MyImg.Wondon} alt="" />
            <div className="fire-overlay">
              <h3>The Wondon</h3>
              <p
                style={{
                  fontSize: "12px",
                }}
              >
                we are all about we are all about to the fullest and oil content
                diningout or intaining out or in!
              </p>
              <div>
                <span style={{ fontSize: "12px" }}>
                  <PlaceIcon style={{ color: "#ffffff" }} /> Mumbai City
                </span>
                <button className="book-now">
                  Book Now <EastIcon />
                </button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          <div style={{ textAlign: "center", paddingTop: "30%" }}>
            <img src={MyImg.Arrow2} style={{ width: "15%" }} alt="" />
            <p
              style={{ color: "#3d7475", fontSize: "20px", fontWeight: "500" }}
            >
              see more
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Booking;
