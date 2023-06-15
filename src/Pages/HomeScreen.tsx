import React from "react";
import Hero from "./Home/Hero";
import Categories from "./Home/Categories";
import Choice from "./Home/Choice";
import Selection from "./Home/Selection";
import CloseCourse from "./Home/CloseCourse";
import StudentsRemark from "./Home/StudentsRemark";
import Sponsors from "./Home/Sponsors";
import Option from "./Home/Option";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Choice />
      <Selection />
      <CloseCourse />
      <StudentsRemark />
      <Sponsors />
      <Option />
    </div>
  );
};

export default HomeScreen;
