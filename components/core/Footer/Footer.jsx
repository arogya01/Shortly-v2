import {
  FooterHeader,
  FooterWrapper,
  WebsiteLogo,
  FooterLinksWrapper,
  FooterLinks,
  IconWrapper,
  FacebookIcon,
  PinterestIcon,
  InstaIcon,
  TwitterIcon,
  IconWrapperDesktop,
  DesktopWrapper
} from "./Footer.element";

export default function Footer() {
  return (
    <FooterWrapper>
      <DesktopWrapper>
      <WebsiteLogo />
      <IconWrapperDesktop>
          <FacebookIcon />
          <TwitterIcon />
          <InstaIcon />
          <PinterestIcon />
      </IconWrapperDesktop>
      </DesktopWrapper>


      <FooterLinksWrapper>
        <FooterHeader>Features</FooterHeader>
        <FooterLinks>Link Shortening</FooterLinks>
        <FooterLinks>Branded Links</FooterLinks>
        <FooterLinks>Analytics</FooterLinks>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterHeader>Resources</FooterHeader>
        <FooterLinks>Blog</FooterLinks>
        <FooterLinks>Developers</FooterLinks>
        <FooterLinks>Support</FooterLinks>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterHeader>Company</FooterHeader>
        <FooterLinks>About</FooterLinks>
        <FooterLinks>Our Team</FooterLinks>
        <FooterLinks>Careers</FooterLinks>
        <FooterLinks>Contact</FooterLinks>
      </FooterLinksWrapper>

      <IconWrapper>
          <FacebookIcon />
          <TwitterIcon />
          <InstaIcon />
          <PinterestIcon />
      </IconWrapper>
    </FooterWrapper>
  );
}
