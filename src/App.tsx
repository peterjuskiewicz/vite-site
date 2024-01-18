import piotrOne from "./assets/piotr_one.jpg";
import piotrTwo from "./assets/piotr_two.jpg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";

function TwoColumnLayout() {
  return (
    <Box sx={{ backgroundColor: "#292929" }}>
      <Navigation />
      <Grid container spacing={0} sx={{ width: "100%", padding: 12 }}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: "0px", backgroundColor: "black" }}
        >
          <Box
            component="img"
            sx={{
              width: "40vw",
              height: "80vh",
              objectFit: "cover",
            }}
            alt="Your Image"
            src={piotrOne}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            sx={{ color: "#EFB9B9" }}
          >
            YOUR IT PARTNER
          </Typography>
          <Typography variant="h5" align="center" sx={{ color: "white" }}>
            Let's succeed together!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function ServiceCard({ image, title, price, description }: any) {
  return (
    <Box
      sx={{
        height: "75vh",
        width: "30vw",
        border: "1px solid #4A4A4A",
      }}
    >
      <Box
        component="img"
        width="100%"
        height="55%"
        sx={{
          objectFit: "cover",
        }}
        alt="Your Image"
        src={image}
      />
      <Typography variant="h5" sx={{ margin: 4, color: "white" }}>
        {title}
      </Typography>
      <Box
        sx={{ border: "1px solid #4A4A4A", width: "85%", margin: "0 auto" }}
      />
      <Typography
        variant="body1"
        sx={{ margin: 4, textAlign: "left", color: "white" }}
      >
        {description}
      </Typography>
      <Typography
        variant="body1"
        sx={{ margin: 4, textAlign: "left", color: "white" }}
      >
        {price}
      </Typography>
    </Box>
  );
}

function TestimonialCard({ text, clientName }: any) {
  return (
    <Box
      sx={{
        height: "45vh",
        width: "45vh",
        backgroundColor: "#292929",
        padding: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flex: 9, display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "white" }}>{text} </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography sx={{ color: "white", textAlign: "left" }}>
          {clientName}{" "}
        </Typography>
      </Box>
    </Box>
  );
}

function Navigation() {
  return (
    <Box sx={{ display: "flex", paddingTop: 2, paddingLeft: 6 }}>
      <Typography sx={{ marginLeft: 4, color: "#F5F5F5" }}>Home</Typography>
      <Typography sx={{ marginLeft: 4, color: "#F5F5F5" }}>Services</Typography>
      <Typography sx={{ marginLeft: 4, color: "#F5F5F5" }}>Contact</Typography>
    </Box>
  );
}

function BioSection() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#EFD7D7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Box
          component="img"
          sx={{
            width: 180,
            height: 180,
            objectFit: "cover",
            borderRadius: "50%",
          }}
          alt="Your Image"
          src={piotrTwo}
        />
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ color: "black", marginTop: 4 }}
        >
          BIO
        </Typography>
        <Typography
          align="center"
          sx={{ maxWidth: 800, color: "black", margin: "0 auto" }}
        >
          Since 2019, I’ve been providing professional IT consulting services to
          clients from London and beyond. From strategic planning to innovative
          solutions, my focus is always on building an efficient and
          results-driven relationship. I’ll work with you to create a customized
          plan of action for yourself or your organization. Get in touch to
          learn more about my vision and IT consulting approach.
        </Typography>
      </Box>
    </Box>
  );
}

function ServicesSection() {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#292929", padding: 8 }}>
      <Typography variant="h3" sx={{ color: "white", marginBottom: 8 }}>
        MY SERVICES
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          justifyContent: "space-around",
          marginTop: 4,
        }}
      >
        <ServiceCard
          price={"$ 75"}
          image={piotrOne}
          description={"45 min session"}
          title={"Digital fluency"}
        ></ServiceCard>
        <ServiceCard
          price={"$ 199"}
          image={piotrOne}
          description={"package of four 45 min session"}
          title={"Digital fluency expert"}
        ></ServiceCard>
      </Box>
    </Box>
  );
}

function TestimonialsSection() {
  return (
    <CarouselProvider
      naturalSlideWidth={1000}
      naturalSlideHeight={1250}
      totalSlides={3}
    >
      <Box sx={{ height: "100vh", backgroundColor: "black", padding: 8 }}>
        <Typography variant="h3" sx={{ color: "white", marginBottom: 4 }}>
          CLIENT TESTIMONIALS
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "white", fontStyle: "italic", marginBottom: 8 }}
        >
          See what my clients are saying
        </Typography>

        <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
          <TestimonialCard
            text={
              "The best experience ever The best experience ever The best experience ever The best experience ever"
            }
            clientName={"Mike Like"}
          ></TestimonialCard>
          <TestimonialCard
            text={
              "The best experience ever The best experience ever The best experience ever The best experience ever"
            }
            clientName={"Mike Like"}
          ></TestimonialCard>
          <TestimonialCard
            text={
              "The best experience ever The best experience ever The best experience ever The best experience ever"
            }
            clientName={"Mike Like"}
          ></TestimonialCard>
        </Box>
      </Box>
    </CarouselProvider>
  );
}

function ContactMeSection() {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#EFD7D7", padding: 16 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "black",
        }}
      >
        <Box sx={{ flex: 1, backgroundColor: "yellow" }}></Box>
        <Box sx={{ flex: 1 }}></Box>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "black",
          width: "100%",
          height: "10vh",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ marginLeft: 4, color: "white" }}>
          juskiewi.cz
        </Typography>
      </Box>
      <TwoColumnLayout />
      <BioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactMeSection />
    </>
  );
}

export default App;
