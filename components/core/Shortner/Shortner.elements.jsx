import styled from "@emotion/styled";
import myImage from "../../../public/images/Meteor.png";

import Image from 'next/image';

export const ShortnerWrapper = styled.main`
  margin:2rem;
  padding: 2rem;
  position:relative;  
  display:flex;
  flex-flow:row; 
  justify-content:center;

  @media(min-width:768px){
    padding:4rem;
  }
`;

export const StyledImage = styled(Image)`
  border-radius:10px;
  position:fixed;
  z-index:-20;
  overflow:hidden;
  
`

export const ShortnerInput = styled.input`
  
  height:3rem;
  border-radius:10px;
  z-index:2;
  width:100%;
  font-size:1rem;
  font-family: 'Poppins', sans-serif;

  &::placeholder{
    font-size:1rem;
  }
  @media(min-width:768px){
    width:70%;
  }
`

export const ShortnerBtn = styled.button`
  height:3rem;
  padding:0 2rem;
  background-color:#2acfcf;
  font-weight:700;
  font-size:1.2rem;
  color:#fff;
  border:none;
  border-radius:10px;
  margin-top:2rem ;
  cursor:pointer;

  @media(min-width:768px){
    margin-top:0;
    margin-left:2rem;
  }
`

export const ShortnerInputWrapper = styled.div`
  display:flex;
  flex-flow:column wrap;
  width:100%;
  z-index:5;

  @media(min-width:768px){
    flex-flow:row nowrap;
    align-items:center;
    justify-content:center;
  }
`
