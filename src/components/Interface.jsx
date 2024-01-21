/** @format */
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { useScroll} from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrame } from "@react-three/fiber";
import Indicator from "./Indicator";

gsap.registerPlugin(ScrollTrigger)

const Section = ({ children }) => {
  return (
    <>
      <section
        className="h-screen w-screen p-4 md:p-12  m-10 max-w-screen-2xl mx-auto flex flex-col
        items-center md:items-start justify-center">
        {children}
      </section>
    </>
  );
};

export default function Interface({setScroll}) {

  const container = useRef();
   const intro = useRef();
   const middle = useRef();
  const scroll = useScroll();
  const lastScroll = useRef();
  const currentScroll = useRef();
 
useFrame((state)=>{
            
    //Text Opacity
    
    let opacity1 = 1 - scroll.range(0, 1 / 18);
    let opacity2 = 1 - scroll.range(0, 1 / 8);
    let opacity3 = 1 - scroll.range(1 / 2, 1 / 20);

    container.current.style.opacity = opacity1;
    intro.current.style.opacity = opacity2
    middle.current.style.opacity = opacity3;

    //Scroll Indicator
    lastScroll.current = scroll.offset

    if (lastScroll.current !== currentScroll.current) {

      currentScroll.current = scroll.offset;
      setScroll(true);
    } else {
      setScroll(false);
    }
    
})


  return (
    <>
      <div className="flex flex-col items-center w-screen">
        <Section>
          <h1
            ref={container}
            className=" text-center md:text-left font-sans font-medium text-3xl md:text-7xl relative md:left-5 tracking-wide ">
            <p className="break-words">Hello,</p> I'm Alexandra.
          </h1>
          <h2
            ref={intro}
            className=" text-center md:text-left font-sans font-medium text-xl md:text-2xl md:left-5 relative 
          top-10 tracking-wid">
            I'm a{" "}
            <a className="rounded-sm bg-gradient-to-r from-white via-purple-100 via-30% to-purple-300">
              Front-End Developer
            </a>{" "}
            based in Berlin.
          </h2>
        </Section>
        <Section></Section>
        <Section>
          <h1
            ref={middle}
            className="font-sans font-medium text-2xl md:right-20 tracking-wid self-end">
            I create 3D web experiences.{" "}
          </h1>
        </Section>
      </div>
    </>
  );
}
