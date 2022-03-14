import {
  ShortnerBtn,
  ShortnerInput,
  ShortnerWrapper,
  StyledImage,
  ShortnerInputWrapper,
} from "./Shortner.elements";
import myImage from "../../../public/images/Meteor.png";
import { useState,useEffect,useContext } from "react";
import {LinkContext} from '../../../context/ShortenedLinksContext';
import Spinner from "../../util/Spinner";
import { SpinnerContext } from "../../../context/globalSpinnerContext";

export default function Shortner() {
  const [inputLink, setInputLink] = useState("");
  const {shortedLinks,setShortenedLinks,currentLink,setCurrentLink} = useContext(LinkContext)
  const { globalSpinner, setGlobalSpinner } = useContext(SpinnerContext);


  const handleOnClick =async (event) => {
    // event.target.disabled = true;
    console.log(event.target.disabled);

    setGlobalSpinner(true);
    event.target.disabled=true;
    try{
       const res =await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`,{
         method:"GET"
       });
       const obj = await res.json();

       setCurrentLink(obj.result.full_short_link);
       const shortLink = obj.result.full_short_link;
       const shortenedArr = [inputLink,shortLink];
       setShortenedLinks((shortedLinks)=> [...shortedLinks,shortenedArr]);

       if(localStorage.getItem("inputLink")){
        // console.log(true);
         const retrivedItem = localStorage.getItem("inputLink");
         const retrieveArr = JSON.parse(retrivedItem);
         const newArr = [shortenedArr,...retrieveArr];
         localStorage.setItem("inputLink",JSON.stringify(newArr));
        
       }
       else {
         localStorage.setItem("inputLink",JSON.stringify([shortenedArr]));

       }
      

       event.target.disabled=false;
       setGlobalSpinner(false);
      }
    catch(err){
      console.log("err: ",err);
    }
  };
   
  
  return (
    <ShortnerWrapper>
      <StyledImage
        src={myImage}
        objectFit="content"
        layout="fill"
        quality={100}
        alt="someImg"
      />
      <ShortnerInputWrapper>
        <ShortnerInput
          value={inputLink}
          placeholder="Shorten a link here..."
          onChange={(e) => {
            setInputLink(e.target.value);
            // console.log(`the input value is ${e.target.value} , ${inputLink}`);
          }}
          type="text"
        />
        <ShortnerBtn onClick={handleOnClick}>
          <Spinner />
          Shorten It
          </ShortnerBtn>
      </ShortnerInputWrapper>
    </ShortnerWrapper>
  );
}
