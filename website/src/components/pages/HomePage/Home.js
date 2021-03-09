import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Section from "../../Section/Section";
const Home = () => {
  return (
    <>
      <Section {...homeObjOne} />
      <Section {...homeObjThree} />
      <Section {...homeObjTwo} />
      <Section {...homeObjFour} />
    </>
  );
};

export default Home;
