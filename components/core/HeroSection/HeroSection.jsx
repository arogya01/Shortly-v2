import {
  HeroHeadlineWrapper,
  HeroImg,
  HeroImgWrapper,
  Box,
  Header,
  Subheader,
  CtaBtn
} from "./Herosection.elements";

export default function HeroSection() {
  return (
    <>
      <Box >
      <HeroHeadlineWrapper pt="8rem" >
        <Header>
        <p>More Than Just</p>
        <p>Shorter Links</p>
        </Header>
        <Subheader classname="sub" color="gray">Build your brand recognition and get detailed insights on how your links are
        </Subheader>
        <CtaBtn background="cyan" border="none" padding="1rem" borderRadius={10} width={160} fontWeight="bold" color="white" >Get Started</CtaBtn>
      </HeroHeadlineWrapper>
      <HeroImgWrapper>
       <HeroImg />
      </HeroImgWrapper>
      </Box>
    </>
  );
}
