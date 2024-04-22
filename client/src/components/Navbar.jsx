import { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useMediaQuery,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
import AuthService from "../utils/auth";

const Navbar = () => {
  const location = useLocation();
  const [isSmallerThan750] = useMediaQuery("(max-width: 750px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle logout
  const handleLogout = () => {
    AuthService.logout();
  };

  // Render different elements based on the current route
  const renderNavbar = () => {
    // Get the user's profile
    const profile = AuthService.getProfile();
    // Extract username from profile
    const username = profile ? profile.username : null;

    if (
      location.pathname === "/home" ||
      location.pathname === "/login-signup" ||
      location.pathname === "/contact" ||
      location.pathname === "/services" ||
      location.pathname === "/about" ||
      location.pathname === "/favorites"
    ) {
      return (
        <Box
          bg="black"
          px={4}
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={isSmallerThan750 ? "column" : "row"}
        >
          {/* Hamburger icon */}
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Open Menu"
              icon={<HamburgerIcon color="white" />}
              variant="outline"
              colorScheme="blackAlpha"
              size="lg"
              onClick={toggleMenu}
              style={{ marginRight: "10px" }}
            />
            {/* Dropdown menu */}
            <MenuList
              style={{
                marginTop: "15px",
                background: "black",
              }}
            >
              <MenuItem
                style={{
                  background: "black",
                  color: "white",
                  fontFamily: "Unica One",
                  fontSize: "30px",
                }}
              >
                <Link href="/home">Search</Link>
              </MenuItem>
              <MenuItem
                style={{
                  background: "black",
                  color: "white",
                  fontFamily: "Unica One",
                  fontSize: "30px",
                }}
              >
                <Link href="/about">About</Link>
              </MenuItem>
              <MenuItem
                style={{
                  background: "black",
                  color: "white",
                  fontFamily: "Unica One",
                  fontSize: "30px",
                }}
              >
                <Link href="/services">Services</Link>
              </MenuItem>
              <MenuItem
                style={{
                  background: "black",
                  color: "white",
                  fontFamily: "Unica One",
                  fontSize: "30px",
                }}
              >
                <Link href="/contact">Contact</Link>
              </MenuItem>
              <MenuItem
                style={{
                  background: "black",
                  color: "white",
                  fontFamily: "Unica One",
                  fontSize: "30px",
                }}
              >
                <Link href="/favorites">My Favorite Anime Selection</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          {/* Otaku-Ani logo on the left */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div
              style={{
                width: "300px",
                height: "81px",
                backgroundColor: "black",
                fontFamily: "Unica One",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "70px",
                color: "white",
                marginLeft: isSmallerThan750 ? "0" : "900px", // Adjust margin based on screen size
                marginBottom: isSmallerThan750 ? "20px" : "0", // Adjust margin bottom based on screen size
               
              }}
            >
              Otaku-Ani
            </div>
          </Link>
          {/* Navbar links */}
                    {/* Navbar links */}
                    <Flex
            flex
            direction={isSmallerThan750 ? "column" : "row"}
            alignItems="center"
            justifyContent="space-between"  // Align items with space between them
          >
            {/* Display the username if logged in */}
            {AuthService.loggedIn() && (
              <>
                <span
                  style={{
                    color: "white",
                    fontSize: "16px",
                    marginRight: "10px",
                    backgroundColor: "#3182ce",
                    width: "95px",
                    textAlign: "center",
                    height: "41px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "7px",
                  }}
                >
                  Logged in {username}
                </span>
                <Button colorScheme="red" ml={4} onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
            {/* Render login and sign up buttons */}
            {!AuthService.loggedIn() && (
              <>
                <Button colorScheme="blue" ml={4}>
                  <Link
                    href="/login-signup"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </Button>
                <Button colorScheme="green" ml={4}>
                  <Link
                    href="/login-signup"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
          </Flex>
        </Box>
      );
    } else {
      // Default navbar for other routes
      return (
        <Box bg="black" px={4} width="100%">
          <Flex direction="column" alignItems="center">
            {/* General navbar elements */}
            <Link
              href="/"
              color="white"
              fontSize="100px"
              fontFamily="Unica One; Arial"
              fontWeight="bold"
              mb={4}
            >
              Otaku-Ani
            </Link>
            <Flex>
              <Link href="/home" color="white" mr={24} fontSize="28px">
                Search
              </Link>
              <Link href="/about" color="white" mr={24} fontSize="28px">
                About
              </Link>
              <Link href="/services" color="white" mr={24} fontSize="28px">
                Services
              </Link>
              <Link href="/contact" color="white" fontSize="28px">
                Contact
              </Link>
            </Flex>
          </Flex>
        </Box>
      );
    }
  };

  return renderNavbar();
};

export default Navbar;
