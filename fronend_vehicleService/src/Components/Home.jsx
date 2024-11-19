import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="main-content">
      <Container>
        <Typography variant="h1" align="center" gutterBottom>
          Welcome to Our Vehicle Service Booking App!
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
          Book your next service hassle-free.
        </Typography>

        <Carousel className="mt-5">
          <Carousel.Item>
            <div className="carousel-content">
              <img
                className="d-block w-100 carousel-image"
                src="https://media.istockphoto.com/id/1427644040/photo/employee-of-a-car-wash-or-a-car-detailing-studio-cleans-the-cockpit.jpg?s=612x612&w=0&k=20&c=pDYSGzli1CU1uE-ssSTifnZzmOjzSND4nM1VMmx_qWM="
                alt="Car Detailing Service"
              />
              <Carousel.Caption className="carousel-caption">
                <Typography variant="h2" className="text-white">
                  Car Detailing Service
                </Typography>
                <Typography variant="body1" className="text-white">
                  Treat your vehicle to our premium car detailing service. Our
                  meticulous process includes exterior washing, waxing, interior
                  vacuuming, and upholstery cleaning. Enhance the aesthetics and
                  maintain the value of your car with our professional touch.
                </Typography>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-content">
              <img
                className="d-block w-100 carousel-image"
                src="https://t4.ftcdn.net/jpg/02/36/90/13/360_F_236901374_aqlTX6FZorFdQjreTjVaUpoE0x5AJ7fk.jpg"
                alt="Oil Change Service"
              />
              <Carousel.Caption className="carousel-caption">
                <Typography variant="h2" className="text-white">
                  Oil Change Service
                </Typography>
                <Typography variant="body1" className="text-white">
                  Ensure your vehicle runs smoothly with our quick and efficient
                  oil change service. We use high-quality oils and filters to
                  maintain optimal engine performance and prolong the life of
                  your vehicle. Trust our experts to keep your engine healthy
                  and reliable.
                </Typography>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-content">
              <img
                className="d-block w-100 carousel-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaqg9wt7VDi1_feAoWu2jyIsTzxIaODcacA&s"
                alt="Brake Inspection and Repair"
              />
              <Carousel.Caption className="carousel-caption">
                <Typography variant="h2" className="text-white">
                  Brake Inspection and Repair
                </Typography>
                <Typography variant="body1" className="text-white">
                  Safety comes first with our thorough brake inspection and
                  repair service. Our certified technicians inspect brake pads,
                  rotors, calipers, and brake fluid to ensure your vehicle stops
                  reliably. Stay confident on the road with brakes in top
                  condition.
                </Typography>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-content">
              <img
                className="d-block w-100 carousel-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCxN0YSwsnLytWKTMoV9AwvnmXDqCoH98Kw&s"
                alt="Tire Rotation Service"
              />
              <Carousel.Caption className="carousel-caption">
                <Typography variant="h2" className="text-white">
                  Tire Rotation Service
                </Typography>
                <Typography variant="body1" className="text-white">
                  Maximize tire longevity and performance with our professional
                  tire rotation service. We ensure even wear on all tires by
                  rotating them according to manufacturer specifications.
                  Improve safety, handling, and fuel efficiency with regular
                  tire rotations.
                </Typography>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-content">
              <img
                className="d-block w-100 carousel-image"
                src="https://www.shutterstock.com/image-photo/smart-car-service-diagnostics-software-600nw-2140353371.jpg"
                alt="Engine Diagnostic Service"
              />
              <Carousel.Caption className="carousel-caption">
                <Typography variant="h2" className="text-white">
                  Engine Diagnostic Service
                </Typography>
                <Typography variant="body1" className="text-white">
                  Stay ahead of engine issues with our comprehensive engine
                  diagnostic service. Using advanced tools, we identify and
                  diagnose engine problems accurately. Trust our expertise to
                  keep your engine running smoothly and efficiently.
                </Typography>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>

        <Container className="mt-5">
          <Typography variant="h2" align="center" gutterBottom>
            Why Choose Us?
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    Professional Technicians
                  </Typography>
                  <Typography variant="body1">
                    Our team consists of skilled technicians with years of
                    experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    Quality Service
                  </Typography>
                  <Typography variant="body1">
                    We guarantee top-notch service using high-quality products.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    Customer Satisfaction
                  </Typography>
                  <Typography variant="body1">
                    Your satisfaction is our priority; we ensure your needs are
                    met.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
