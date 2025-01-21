
import React, { useEffect, useRef } from "react";
import { useFBX, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three'
import useAnimationStore from "../stores/useAnimationStore";


export default function Character({...props}) {
  const gltf = useGLTF("character.glb");

  //Zustand

  const sittingAnimation = useAnimationStore((state) => state.sitting);
  const waveAnimation = useAnimationStore((state) => state.wave);


  const currAnimation = useAnimationStore((state) => state.curAnimation);
  const initializeAnimationSet = useAnimationStore(
    (state) => state.initializeAnimationSet
  );
  // Set All your animations
  const animationSet = {
    sitting: 0,
    wave: 1,
  };

  useEffect(() => {
    // Initialize animation set
    initializeAnimationSet(animationSet);
  }, []);
  ///

  //if (currAnimation !== 1 ){waveAnimation()}

  return (
    
    <primitive
      {...props}
      scale={0.5}
      rotation={[-1.5, 1.5,0.4]}
      position={[-1.45, 0, -1]}
      object={gltf.scene}
    />
  );
}