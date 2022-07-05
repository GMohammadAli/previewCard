import { 
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button
} from "@mui/material"
import Image from "./images/image-product-desktop.jpg";
import {ShoppingCart} from "@mui/icons-material"
import "./App.css"


function App() {
  return (
    <div className="container">
      <Card className="card-container">
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <CardMedia
              component="img"
              image={Image}
              alt="product image"
              className="img-size"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} className="col-size" zeroMinWidth>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span>Perfume</span>
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                <p>
                  Gabrielle
                  <br /> Essence Eau De Parfum
                </p>
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                component="div"
                className="paragraph-card"
              >
                A floral,solar and voluptuous interpretation composed by Olivier
                Polge,Permufer-creator for the house of CHANEL
              </Typography>
              <Typography gutterBottom className="prices-card">
                <b>$149.99</b>
                <del style={{ fontFamily: "Arial", marginLeft: "5%" }}>
                  $169.99
                </del>
              </Typography>
            </CardContent>
            <CardActions className="action-card">
              <Button className="button-card" variant="container" size="large">
                <ShoppingCart />
                Add to Cart
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default App;
