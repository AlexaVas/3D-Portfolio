import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
import { useScroll, Html, Scroll } from "@react-three/drei"
import { useState, useLayoutEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva";
import ComputerTest from "./ComputerTest";
import useAnimationStore from "../stores/useAnimationStore";
export default function Movement({setContactMeOpen}){
  const scroll = useScroll();
  const tl = useRef();
  const [camera, setCamera] = useState();

//    const position = useControls("position", {
//      x: { value: -2, min: -10, max: 10 },
//      y: { value: 1.5, min: -10, max: 10 },
//      z: { value: 2, min: -10, max: 10 }
//    });

//   const targetLookAt = { x: -1.39, y: 0, z: -0.6 }

const targetLookAt = { x: -2, y: 1.5, z: 2 };
const [on, setOn] = useState(false)
const sittingAnimation = useAnimationStore((state) => state.sit);
const waveAnimation = useAnimationStore((state) => state.wave);
const idleAnimation = useAnimationStore((state) => state.idle);
const pointAnimation = useAnimationStore((state) => state.point);
const animationSet = useAnimationStore((state) => state.animationSet);


useFrame((state, delta) => {
  setCamera(state.camera);

  tl.current?.seek(scroll.offset * tl.current.duration());

  state.camera.lookAt(-1.39, 0, -0.6);
//laptop
  if(scroll.offset > 0.9){

    setOn(true)

    
  }else {

    setOn(false)
  }

//character
if (scroll.offset > 0.95) {
  pointAnimation()
} else if ((scroll.offset > 0.85) & (scroll.offset < 0.95)) {
  sittingAnimation();
} else if (scroll.offset > 0.7 && scroll.offset < 0.85) {
  waveAnimation();
} else {
  idleAnimation();
} 


});



  useGSAP(() => {
    if (camera) {
      tl.current = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut" },
      });

      tl.current
       

        .to(camera.position, { y: 2, x: -10, z: -5 }, 0)
        .to(camera.position, { x: 10, z: -6 }, 2)
        .to(camera.position, { x: 8, z: 2,y:3 }, 4)

        .to("#testimonial_one", { opacity: 0, duration: 0.5 }, ">+=0.5")
        .to("#testimonial_two", { opacity: 0, duration: 0.5 }, ">")
        .to("#testimonial_three", { opacity: 0, duration: 0.5 }, ">")

        .to(camera.position, { y: 0.9, x: 3, z: 0 }, 8)
        .to(camera.position, { y: 0.25, x: -0.3, z: -0.4 }, 10);
        
    }
  }, [camera]);

  return (
    <>
   
      <ComputerTest on={on} setContactMeOpen={setContactMeOpen}/>
    
    </>
  );
}

