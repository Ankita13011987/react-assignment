import React from "react";
import "./style.css";
import ClassCompDemo from "./classComponent"
import FunctionalCompDemo from "./functionalComponent"
import PropsDemo from "./demoProps"
import StatesDemo from "./demoState"
import LifeCycleMethodsDemo from "./lifeCycleMethod.js"

export default function App() {
  return (
    <div>
      {/* <ClassCompDemo></ClassCompDemo>  
      <FunctionalCompDemo></FunctionalCompDemo> 
      <PropsDemo name="Ankita Singh"/>   
      <StatesDemo></StatesDemo> */}
      <LifeCycleMethodsDemo></LifeCycleMethodsDemo>
    </div>
  );
}

