import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";

const abouts = [
  {
    title: "iOS Development",
    description: "I am an iOS Developer",
    imgUrl: "",
  },
  {
    title: "iOS Design",
    description: "I am an iOS Designer",
    imgUrl: "",
  },
  {
    title: "UI/UX",
    description: "I am an iOS Designer for UI/UX",
    imgUrl: "",
  },
];

const About = () => {
  return (
    <>
      <h2 className="head=text">
        I Know That
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          ></motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
