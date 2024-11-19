import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CommuteIcon from "@mui/icons-material/Commute";
import BuildIcon from "@mui/icons-material/Build";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const services = [
    {
      title: "Car Detailing Service",
      description:
        "Treat your vehicle to our premium car detailing service. Our meticulous process includes exterior washing, waxing, interior vacuuming, and upholstery cleaning. Enhance the aesthetics and maintain the value of your car with our professional touch.",
      icon: <LocalCarWashIcon sx={{ fontSize: 80 }} />,
    },
    {
      title: "Oil Change Service",
      description:
        "Ensure your vehicle runs smoothly with our quick and efficient oil change service. We use high-quality oils and filters to maintain optimal engine performance and prolong the life of your vehicle. Trust our experts to keep your engine healthy and reliable.",
      icon: <LocalGasStationIcon sx={{ fontSize: 80 }} />,
    },
    {
      title: "Brake Inspection and Repair",
      description:
        "Safety comes first with our thorough brake inspection and repair service. Our certified technicians inspect brake pads, rotors, calipers, and brake fluid to ensure your vehicle stops reliably. Stay confident on the road with brakes in top condition.",
      icon: <DirectionsCarIcon sx={{ fontSize: 80 }} />,
    },
    {
      title: "Tire Rotation Service",
      description:
        "Maximize tire longevity and performance with our professional tire rotation service. We ensure even wear on all tires by rotating them according to manufacturer specifications. Improve safety, handling, and fuel efficiency with regular tire rotations.",
      icon: <CommuteIcon sx={{ fontSize: 80 }} />,
    },
    {
      title: "Engine Diagnostic Service",
      description:
        "Stay ahead of engine issues with our comprehensive engine diagnostic service. Using advanced tools, we identify and diagnose engine problems accurately. Trust our expertise to keep your engine running smoothly and efficiently.",
      icon: <BuildIcon sx={{ fontSize: 80 }} />,
    },
    {
      title: "Vehicle Shuttle Service",
      description:
        "Enjoy the convenience of our vehicle shuttle service. Whether you need transportation while your vehicle is being serviced or for any other purpose, our reliable shuttle service is here to meet your needs.",
      icon: <AirportShuttleIcon sx={{ fontSize: 80 }} />,
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Great service! My car looks brand new after their detailing service. Highly recommended!",
      author: "John Doe",
    },
    {
      id: 2,
      quote:
        "Fast and efficient oil change. They use top-notch products, and my car runs smoother than ever.",
      author: "Jane Smith",
    },
    {
      id: 3,
      quote:
        "I rely on their brake inspection service to keep my family safe. They never disappoint.",
      author: "Michael Johnson",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "What is included in your car detailing service?",
      answer:
        "Our car detailing service includes exterior washing, waxing, interior vacuuming, and upholstery cleaning using high-quality products.",
    },
    {
      id: 2,
      question: "How often should I rotate my tires?",
      answer:
        "We recommend rotating your tires every 6,000 to 8,000 miles to ensure even wear and prolong their lifespan.",
    },
    {
      id: 3,
      question: "Do you offer shuttle service?",
      answer:
        "Yes, we provide a vehicle shuttle service for your convenience while your vehicle is being serviced.",
    },
  ];

  const servicePlans = [
    {
      id: 1,
      title: "Basic Plan",
      description:
        "Includes essential services such as oil change and tire rotation.",
      price: "$99",
    },
    {
      id: 2,
      title: "Premium Plan",
      description:
        "Comprehensive package covering car detailing, brake inspection, and engine diagnostics.",
      price: "$199",
    },
    {
      id: 3,
      title: "Custom Plan",
      description:
        "Tailored services based on your specific vehicle needs and preferences.",
      price: "Varies",
    },
  ];

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <Typography variant="h2" sx={{ textAlign: "center", mt: 4, mb: 2 }}>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  height: 200,
                }}
              >
                {service.icon}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5">{service.title}</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
          Testimonials
        </Typography>
        <Carousel>
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <Box sx={{ p: 4 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {testimonial.quote}
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "right" }}>
                  - {testimonial.author}
                </Typography>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
          FAQs
        </Typography>
        <Grid container spacing={3}>
          {faqs.map((faq) => (
            <Grid item xs={12} key={faq.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{faq.question}</Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {faq.answer}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
          Service Plans
        </Typography>
        <Grid container spacing={3}>
          {servicePlans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{plan.title}</Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {plan.description}
                  </Typography>
                  <Typography variant="h4" sx={{ textAlign: "center", mt: 2 }}>
                    {plan.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
