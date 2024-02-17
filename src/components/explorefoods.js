import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MyImg from "./../components/images/images";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Explorefoods() {
  return (
    <div style={{ margin: "0 auto", width: "60%", paddingTop: "100px" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Explore our Foods</h2>
        <p
          style={{
            fontSize: "12x",
            padding: "30px 0",
            color: "rgb(196 197 197)",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor<br></br> incididunt ut labore et dolore magna
        </p>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <Card className="card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={MyImg.Oneham}
                  alt="green iguana"
                />
                <CardContent style={{ border: "none" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <span className="card-head">Ham Sandwich</span>
                    <span className="card-rs">$11.45</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-para"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={4} md={4}>
            <Card className="card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={MyImg.Secondham}
                  alt="green iguana"
                />
                <CardContent style={{ border: "none" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <span className="card-head"> Ham Sandwich</span>
                    <span className="card-rs">$11.45</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-para"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4} md={4}>
            <Card className="card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={MyImg.Threeham}
                  alt="green iguana"
                />
                <CardContent style={{ border: "none" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <span className="card-head"> Ham Sandwich</span>
                    <span className="card-rs">$11.45</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-para"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <Card className="card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={MyImg.Fourham}
                  alt="green iguana"
                />
                <CardContent style={{ border: "none" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <span className="card-head"> Ham Sandwich</span>
                    <span className="card-rs">$11.45</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-para"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={4} md={4}>
            <Card className="card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={MyImg.Sixham}
                  alt="green iguana"
                />
                <CardContent style={{ border: "none" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <span className="card-head"> Ham Sandwich</span>
                    <span className="card-rs">$11.45</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-para"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4} md={4}>
            <Card className="card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={MyImg.Fiveham}
                  alt="green iguana"
                />
                <CardContent style={{ border: "none" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <span className="card-head"> Ham Sandwich</span>
                    <span className="card-rs">$11.45</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-para"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Explorefoods;
