import styled from "@emotion/styled";

export const FeaturesWrapper = styled.section`
  padding: 2rem 0;
  margin: 2rem;
`;
export const FeaturesHeadlineWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column wrap;

  > p {
    padding: 0 1.5rem;
    line-height: 1.5;
  }
`;

export const FeatureHeadline = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;
export const FeatureCardWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
  }
`;

export const FeatureCards = styled.div`
  display: flex;
  flex-flow: column wrap;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  line-height: 1.5;
  padding: 4rem 0 0 0;
  align-items: center;
  position: relative;
  border-radius: 4px;
  margin: 4rem 0.5rem;
`;

export const BrandIconWrapper = styled.span`
  position: absolute;
  top: -32px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #3b3054;
  display: grid;
  place-content: center;
`;

export const FeatureDescription = styled.p`
  padding: 0 1rem 1rem 1rem;
  text-align: center;
  color: #808080;
`;
// export const BlueLine = styled.div`
//     width:20px;
//     height:20px;
//     background-color:#000;

// `

export const PosterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  > h2 {
    color: #fff;
    font-weight: 500;
    text-align: center;
  }
`;

export const PosterBtn = styled.button`
  border-radius: 32px;
  background-color: #2acfcf;
  border: none;
  padding: 1rem 3rem;
  color: #fff;
  font-weight: 700;
  font-size:1.2rem;
  margin:1rem 0;


`;
export const BrandIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <path
        fill="#2BD0D0"
        d="M36.406 11.719c.648 0 1.172.524 1.172 1.172v24.765h1.25a1.172 1.172 0 110 2.344H1.172a1.172 1.172 0 110-2.344h1.25V24.61c0-.647.524-1.172 1.172-1.172H8.28c.648 0 1.172.525 1.172 1.172v13.047h2.344v-8.36c0-.646.524-1.171 1.172-1.171h4.687c.648 0 1.172.525 1.172 1.172v8.36h2.344V19.921c0-.647.524-1.172 1.172-1.172h4.687c.648 0 1.172.525 1.172 1.172v17.734h2.344V12.891c0-.648.524-1.172 1.172-1.172zm-1.172 2.344h-2.343v23.593h2.343V14.063zm-9.375 7.03h-2.343v16.563h2.343V21.094zm-9.375 9.376h-2.343v7.187h2.343V30.47zM7.11 25.78H4.766v11.875h2.343V25.781zM34.062 0a3.52 3.52 0 013.516 3.516 3.52 3.52 0 01-3.516 3.515c-.72 0-1.389-.217-1.947-.59l-4.073 3.055a3.52 3.52 0 01-3.355 4.567 3.496 3.496 0 01-1.514-.344l-4.689 4.688c.22.459.344.973.344 1.515a3.52 3.52 0 01-3.515 3.515 3.52 3.52 0 01-3.488-3.949l-3.45-1.724a3.503 3.503 0 01-2.438.986 3.52 3.52 0 01-3.515-3.516 3.52 3.52 0 013.515-3.515 3.52 3.52 0 013.488 3.949l3.45 1.725a3.503 3.503 0 013.952-.643l4.689-4.688a3.496 3.496 0 01-.344-1.515 3.52 3.52 0 013.515-3.516c.72 0 1.39.218 1.948.59l4.073-3.054A3.52 3.52 0 0134.063 0zm-18.75 18.75c-.646 0-1.171.526-1.171 1.172 0 .646.525 1.172 1.171 1.172.647 0 1.172-.526 1.172-1.172 0-.646-.525-1.172-1.172-1.172zm-9.374-4.688c-.647 0-1.172.526-1.172 1.172 0 .646.525 1.172 1.171 1.172.647 0 1.172-.526 1.172-1.172 0-.646-.525-1.171-1.171-1.171zm18.75-4.687c-.647 0-1.172.526-1.172 1.172 0 .646.525 1.172 1.172 1.172.646 0 1.171-.526 1.171-1.172 0-.646-.525-1.172-1.172-1.172zm9.375-7.031c-.647 0-1.172.526-1.172 1.172 0 .646.525 1.171 1.172 1.171.646 0 1.171-.525 1.171-1.171s-.525-1.172-1.172-1.172z"
      />
    </svg>
  );
};
