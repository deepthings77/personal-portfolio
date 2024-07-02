import React, { useContext,useState, useEffect, useRef } from "react";
import AppContext from "../../components/AppContextFolder/AppContext";



export default function Page() {
 
  const context = useContext(AppContext);

 

  // useEffect to clear others projects
  useEffect(() => {
  // remove the interval Cookie timer setter when
  if (typeof window !== "undefined") {
    // remove Typing project EventListeners
    window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
    document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    // remove Portfolio project NavBar EventListeners
    window.removeEventListener("scroll", context.sharedState.portfolio.NavBar.IntervalEvent);
    context.sharedState.portfolio.NavBar.IntervalEvent = null;
    context.sharedState.portfolio.NavBar.scrolling = null;
    context.sharedState.portfolio.NavBar.scrollSizeY = null;

  }
  }, [context.sharedState]);

}