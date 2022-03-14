import { createContext, useState } from "react";

export const LinkContext=createContext();

export default function ShortenedLinkProvider(props){
    const [shortedLinks,setShortenedLinks] = useState([]);
    const [currentLink,setCurrentLink] = useState("");

    return(
        <LinkContext.Provider value={{shortedLinks,setShortenedLinks,currentLink,setCurrentLink}}>
            {props.children}
        </LinkContext.Provider>
    )
}