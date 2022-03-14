import React, { useState, useEffect } from "react";
import {
  NavbarLinksWrapper,
  NavContainer,
  WebsiteLogoWrapper,
  NavLink,
  WebsiteLogo,
  NavbarLinksMobileWrapper,
  NavMobileLink,
  HamLogoWrapper
} from "./Navbar.elements";

const HamburgerLogo = () => {
  const style = {
    width: 24,
    height: 24,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      data-hide="false"
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

const CrossLogo = () => {
  const style = {
    width: 24,
    height: 24,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      data-hide="true"
    >
      <path d="M18 6L6 18"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  );
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  console.log(width, height);
  return {
    width,
    height,
  };
}

const Navbar = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(!isNavOpen);
  };
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      //   console.log("window is",windowDimensions);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <NavContainer>
        <WebsiteLogoWrapper>
          <WebsiteLogo />
        </WebsiteLogoWrapper>
        {windowDimensions.width > 560 ? (
          <NavbarLinksWrapper>
            <NavLink >Features</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Resources</NavLink>
          </NavbarLinksWrapper>
        ) : (
          <HamLogoWrapper onClick={handleNavOpen}>
            {isNavOpen ? <CrossLogo /> : <HamburgerLogo />}
            {/* <HamburgerLogo /> */}
          </HamLogoWrapper>
        )}
      </NavContainer>

      {windowDimensions.width < 560 && isNavOpen ? (
        <NavbarLinksMobileWrapper>
          <NavMobileLink>Features</NavMobileLink>
          <NavMobileLink>Pricing</NavMobileLink>
          <NavMobileLink>Resources</NavMobileLink>
        </NavbarLinksMobileWrapper>
      ) : null}
    </>
  );
};

export default Navbar;
