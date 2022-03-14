import {
  BrandIcon,
  FeaturesWrapper,
  FeaturesHeadlineWrapper,
  FeatureHeadline,
  FeatureCards,
  FeatureDescription,
  BrandIconWrapper,
  BlueLine,
  FeatureCardWrapper,
  PosterWrapper,
  PosterBtn
} from "./Features.elements";
import myImage from "../../../public/images/Meteor.png";
import{ StyledImage} from '../Shortner/Shortner.elements'


export default function Features() {
  return (
    <FeaturesWrapper>
      <FeaturesHeadlineWrapper>
        <FeatureHeadline>Advanced Statistics</FeatureHeadline>
        <p>
          Track how your links are performing across the web with our advanced
          statistical dashboard
        </p>
      </FeaturesHeadlineWrapper>
    
     <FeatureCardWrapper>
      <FeatureCards>
        <BrandIconWrapper>
        <BrandIcon />
        </BrandIconWrapper>
        <FeatureDescription>
          Boost your brand recognition with each click. Generic Links dont mean
          a thing. Branded Links help instil confidence in your content.
        </FeatureDescription>
      </FeatureCards>

      {/* <BlueLine/> */}
      <FeatureCards>
        <BrandIconWrapper>
        <BrandIcon />
        </BrandIconWrapper>
        <FeatureDescription>
          Boost your brand recognition with each click. Generic Links dont mean
          a thing. Branded Links help instil confidence in your content.
        </FeatureDescription>
      </FeatureCards>
      {/* <BlueLine/> */}
      <FeatureCards>
        <BrandIconWrapper>
        <BrandIcon />
        </BrandIconWrapper>
        <FeatureDescription>
          Boost your brand recognition with each click. Generic Links dont mean
          a thing. Branded Links help instil confidence in your content.
        </FeatureDescription>
      </FeatureCards>
    </FeatureCardWrapper>
    
    <PosterWrapper>
    <StyledImage
        src={myImage}
        objectFit="cover"
        layout="fill"
        quality={100}
        alt="someImg"
      />
      <h2>Boost Your Links Today</h2>
      <PosterBtn>Get Started</PosterBtn>
    </PosterWrapper>
    </FeaturesWrapper>
  );
}
