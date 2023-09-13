/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <Navbar/>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>AXIOM-SUM</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an  article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;