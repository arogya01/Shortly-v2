import { createContext, useState } from "react";

export const SpinnerContext=createContext();

export default function GlobalSpinnerProvider(props){
    const [globalSpinner,setGlobalSpinner] = useState(false);

    return(
        <SpinnerContext.Provider value={{globalSpinner,setGlobalSpinner}}>
            {props.children}
        </SpinnerContext.Provider>
    )
}