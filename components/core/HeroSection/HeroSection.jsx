import {
  HeroHeadlineWrapper,
  HeroImgWrapper,
  HeroSvg
} from "./Herosection.elements";

export default function HeroSection() {
  return (
    <>
      <HeroHeadlineWrapper>
        <p className="para one">More Than</p> <p className="para two">Just</p>
        <p className="para three"> Shorter </p>
        <p className="para four"> Links </p>
      </HeroHeadlineWrapper>
      <HeroImgWrapper>
        <HeroSvg width="400" height="400"/>
      </HeroImgWrapper>
      
    </>
  );
}
