import MyImg from "./../components/images/images";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <div>
      <Grid container spacing={2} style={{ padding: "10px 100px" }}>
        <Grid item xs={5} md={5}>
          <img alt="" src={MyImg.FooterLeaf} style={{ width: "450px" }}></img>
        </Grid>
        <Grid item xs={4} md={4}>
          <div className="footer-text">
            <p className="footer-notify">Get notified</p>
            <p className="footer-notify">about new amazing products</p>{" "}
            <p className="footer-content">
              Loren ipsum is simply dummy text of printing and typesetting
              industry.
            </p>
            <p className="footer-content">
              It has been the industry standard dummy text ever ince.
            </p>
            <input type="text" className="search-input" value="E-mail"></input>
            <img src={MyImg.Arrow} alt="" className="search-icon"></img>
          </div>
          <div className="footer" style={{ textAlign: "center" }}>
            <ul>
              <li>Product</li>
              <li>Company</li>
              <li>Leran more</li>
              <li>Get in touch</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={3} md={3}></Grid>
      </Grid>
    </div>
  );
}

export default Footer;
