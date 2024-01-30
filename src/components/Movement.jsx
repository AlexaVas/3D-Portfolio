import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
import { useScroll, Html, Scroll } from "@react-three/drei"
import { useState, useLayoutEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva";
import Computer from "./Computer";
import ComputerTest from "./ComputerTest";

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

useFrame((state, delta) => {
  setCamera(state.camera);

  tl.current?.seek(scroll.offset * tl.current.duration());

  state.camera.lookAt(-1.39, 0, -0.6);

  if(scroll.offset > 0.9){

    setOn(true)
    
  }else {

    setOn(false)
  }

});

  useGSAP(() => {
    if (camera) {
      tl.current = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut" },
      });

      tl.current
        .to(camera.position, { y: 2 }, 0)
        .to(camera.position, { x: -10 }, 0)
        .to(camera.position, { z: -5 }, 0)

        .to(camera.position, { x: 10 }, 2)
        .to(camera.position, { z: -6 }, 2)

        .to(camera.position, { x: 8 }, 4)
        .to(camera.position, { z: 3 }, 4)

        .to(camera.position, { y: 1 }, 6)
        .to(camera.position, { x: 3 }, 6)
        .to(camera.position, { z: 0 }, 6)

        .to(camera.position, { y: 0 }, 8)
        .to(camera.position, { x: -1 }, 8)
        .to(camera.position, { z: -0.6 }, 8)
        
    }
  }, [camera]);

  return (
    <>
      {/* <Computer on={on} /> */}
      <ComputerTest on={on} setContactMeOpen={setContactMeOpen}/>
    </>
  );
}

