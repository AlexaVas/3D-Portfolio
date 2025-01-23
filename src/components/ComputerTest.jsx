import { Html, Environment, useGLTF } from "@react-three/drei"
import { useControls } from "leva"
import { useState,useEffect,useMemo } from "react";
import * as THREE from 'three'


export default function ComputerTest({on, setContactMeOpen}) {
  // const computer = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");
  const computer = useGLTF("laptop.glb");
 // console.log(computer.nodes);
  // Load the texture using useMemo
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return loader.load(
      "/pictures/contactme.jpg",
      (loadedTexture) => {
        // Configure texture wrapping and scaling
         loadedTexture.flipY = false; 
     loadedTexture.wrapS = THREE.RepeatWrapping;
     loadedTexture.wrapT = THREE.RepeatWrapping;
        loadedTexture.repeat.set(1, 1); // Adjust as needed

        loadedTexture.minFilter = THREE.LinearMipmapLinearFilter; // For minification
      },
      undefined,
      (error) => console.error("Texture loading error:", error)
    );
  }, []);
  useEffect(() => {
    if (computer.scene) {
      // Find the Top mesh
      const topMesh = computer.nodes.Screen; // Adjust if needed
      if (topMesh) {
        // Update the material dynamically
        topMesh.material = new THREE.MeshBasicMaterial({
          map: on ? texture : null, // Apply texture based on "on"
          transparent: true,
          opacity: 1, // Numeric opacity
          roughness: 0.0,
          metalness: 0.9,
          color: on ? new THREE.Color("white") : new THREE.Color("black"),
        });

        topMesh.material.needsUpdate = true; // Ensure material updates
      }
    }
  }, [computer, on, texture]); // Dependencies include texture
  return (
    <>
      <Environment preset="sunset" />
      <primitive
        object={computer.scene}
        onClick={() => setContactMeOpen(true)}
        scale={0.1}
        position={[-1.39, -0.22, -0.6]}
        rotation-y={1.53}></primitive>
   
      {/* <Html
        transform
        occlude
        wrapperClass="htmlScreen"
        distanceFactor={0.118}
        position={[-1.528, -0.065, -0.606]}
        rotation-z={-1.7}
        rotation-y={1.83}
        rotation-x={1.7}
        zIndexRange={[on ? 5 : -10, -20]}
        onOcclude={set}
        style={{
          transition: "all 0.5s",
          opacity: hidden ? 0 : 1,

          // transform: `scale(${hidden ? 0.5 : 1})`,
          transform: `scale(${on ? 1 : 0.5})`,
        }}>
        <div className="test flex justify-center flex-col items-center">
          <button className="w-2/4 m-3 text-7xl p-8 rounded-2xl animate-background shadow-md hover:shadow-lg hover:p-10 bg-gradient-to-r from-white via-purple-100 via-30% to-purple-300">
            Contact Me
          </button>
        </div>
      </Html> */}
    </>
  );
}