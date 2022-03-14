import styled from "@emotion/styled";

export const PastLinkWrapper = styled.div`
  padding: 1rem;
  margin: 2rem;
  border: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  display:flex;
  flex-flow:column nowrap;
  align-items:center;

  @media(min-width:1000px){
    flex-flow:row nowrap;
    justify-content:space-between;
    align-items:center;
  }
`;



export const ShortedLinksWrapper = styled.div`
  padding:0.5rem;
  margin:0.5rem 0;
`;
export const ShortedLinksWrapperBtn = styled(ShortedLinksWrapper)`
  display:flex; 
  flex-flow:column nowrap;
  align-items:center;

  @media(min-width:1000px){
    flex-flow:row nowrap;
    align-items:center;
    
  }

`
export const CopyBtn = styled.button`
  height:2rem;
  padding:0 1rem;
  background-color:#2acfcf;
  font-weight:700;
  color:#fff;
  border:none;
  border-radius:10px;
  margin-left:1rem;
  cursor:pointer;
  margin-top:1rem;
  
  @media(min-width:1000px){
    height:3rem;
    padding:0 2rem;
    font-size:1.2rem;
    justify-content:center;
    margin:0;
    margin-left:1rem;
  }
`
