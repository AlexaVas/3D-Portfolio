
import React, { useEffect, useRef } from "react";
import { useFBX, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three'
import useAnimationStore from "../stores/useAnimationStore";


export default function Character({...props}) {
  const gltf = useGLTF("character.glb");

  //Zustand

  const initializeAnimationSet = useAnimationStore(
    (state) => state.initializeAnimationSet
  );
  // Set All your animations
  const animationSet = {
    wave:3,
    sit:1,
    idle:2,
    point:0

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