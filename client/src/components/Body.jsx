import { Center, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Body = () => {
  const paragraphStyle = {
    color: "yellow",
    fontSize: "24px",
    fontFamily: "Helvetica, Arial, sans-serif",
    marginTop: "60px",
  };
  // Define the style object for the button
  const buttonStyle = {
    width: "200px", // Default width
    height: "40px", // Default height
    fontFamily: "Helvetica",
    color: "white", // Default color
    backgroundColor: "crimson", // Updated to crimson red
  };

  return (
    <Center>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          height: "100%",
          width: "100%",
          paddingTop: "40px",
        }}
      >
        <center>
          <img
            src="https://images6.alphacoders.com/134/1345576.jpeg"
            alt="Jujitsu Kaisen"
            style={{
              width: "1200px",
              height: "770px",
              objectFit: "cover", 
            }}
          />
          <Link to="/home">
            <Button
              style={{
                ...buttonStyle,
                fontFamily: '"Libre Baskerville", serif',
              }}
              mt={4}
            >
              Go to Search -&gt;
            </Button>
          </Link>
        </center>
        <center>
          <p style={paragraphStyle}>
            This is a website dedicated to all anime lovers out there. Whether
            you're looking for information about your favorite anime or want to
            read and discuss about the latest episodes, you've come to the right
            place.
          </p>
          <p style={paragraphStyle}>
            Feel free to explore the different sections of our website. You can
            search for information about specific anime, read our blog posts, or
            join the community forum to interact with other anime enthusiasts.{" "}
          </p>
          <p style={paragraphStyle}>
            Get ready for an adrenaline-pumping adventure like never before!
            Dive into the captivating world of anime and immerse yourself in
            thrilling stories, breathtaking battles, and unforgettable
            characters. Whether you're a seasoned anime enthusiast or just
            getting started, prepare to be swept off your feet by the sheer
            excitement and wonder that awaits you. Join us on this epic journey,
            and let your imagination soar to new heights!
          </p>
        </center>
      </div>
    </Center>
  );
};

export default Body;
