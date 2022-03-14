import { useState, useEffect, useContext } from "react";
import { LinkContext } from "../../../context/ShortenedLinksContext";
import {
  CopyBtn,
  PastLinkWrapper,
  ShortedLinksWrapper,
  ShortedLinksWrapperBtn,
} from "./PastLinks.elements";
import React from "react";
import uuid from "react-uuid";

import useCopyToClipboard from "../../../hooks/useClipboard";

export default function PastLinks() {
  const { shortedLinks, setShortenedLinks } = useContext(LinkContext);
  const [isCopied, handleCopy] = useCopyToClipboard();

  useEffect(() => {
    let retrieveItems = localStorage.getItem("inputLink");

    if (retrieveItems) {
      retrieveItems = JSON.parse(retrieveItems);
      // console.log(retrieveItems);

      retrieveItems.map((el) => {
        setShortenedLinks((shortedLinks) => [...shortedLinks, el]);
      });
    }
  }, [setShortenedLinks]);

  return (
    <>
      {shortedLinks.length != 0 ? (
        <>
          {shortedLinks.map((el) => {
            return (
              <PastLinkWrapper key={uuid()}>
                <ShortedLinksWrapper>{el[0]}</ShortedLinksWrapper>
                <ShortedLinksWrapperBtn>
                  {el[1]}
                  <CopyBtn
                    onClick={(event) => {
                      handleCopy(el[1]);

                      event.target.innerHTML = "Copied!!";
                    }}
                  >
                    Copy
                  </CopyBtn>
                </ShortedLinksWrapperBtn>
              </PastLinkWrapper>
            );
          })}
        </>
      ) : (
        <PastLinkWrapper>
          <p>No Links Shortened yet!!!</p>
        </PastLinkWrapper>
      )}
    </>
  );
}
