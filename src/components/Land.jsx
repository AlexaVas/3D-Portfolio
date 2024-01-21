import { Center, useGLTF, useTexture, Sparkles, shaderMaterial } from "@react-three/drei"
import { extend, useFrame } from "@react-three/fiber";
import waterVertex from '../shaders/water/vertex.glsl'
import waterFragment from "../shaders/water/fragment.glsl";
import * as THREE from 'three'
import { useRef } from "react"

const WaterMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#afe5fa"),
    uColorEnd: new THREE.Color("#63bee0"),
  },
  waterVertex,
  waterFragment
);

extend({WaterMaterial})

export default function Land ()
{

    
    const {nodes} = useGLTF('./land-model/portfolio-or.glb')


    const landTexture = useTexture('./land-model/baked-land.jpg')
    landTexture.flipY = false 

    const itemsTexture = useTexture('./land-model/baked-items.jpg')
    itemsTexture.flipY = false

   
    const waterMaterial = useRef()

    useFrame((state,delta)=>
    {
        waterMaterial.current.uTime += delta

      
    })
   
return (
  <>
    <group>
      <Center>
        <mesh geometry={nodes.floor.geometry}>
          <meshBasicMaterial map={landTexture} />
        </mesh>
        <mesh
          geometry={nodes.fountain.geometry}
          position={nodes.fountain.position}>
          <meshBasicMaterial map={itemsTexture} />
        </mesh>
        <mesh
          geometry={nodes["bush-short"].geometry}
          position={nodes["bush-short"].position}>
          <meshBasicMaterial map={itemsTexture} />
        </mesh>
        <mesh
          geometry={nodes["bush-tall"].geometry}
          position={nodes["bush-tall"].position}>
          <meshBasicMaterial map={itemsTexture} />
        </mesh>
        <mesh
          geometry={nodes["merged-base"].geometry}
          position={nodes["merged-base"].position}
          rotation={nodes["merged-base"].rotation}>
          <meshBasicMaterial map={itemsTexture} />
        </mesh>
        <mesh
          geometry={nodes["lamp-light"].geometry}
          position={nodes["lamp-light"].position}
          rotation={nodes["lamp-light"].rotation}
          scale={[1,0.9,1.1]}>
          <meshBasicMaterial color={"#faf6d9"} />
        </mesh>
        <mesh
          geometry={nodes.waterGeometry.geometry}
          position={nodes.waterGeometry.position}
          rotation={nodes.waterGeometry.rotation}>
         <waterMaterial ref={waterMaterial}/>
          </mesh>

          <Sparkles
            size={4}
            scale={[2,1,2]}
            position={[1,0.8,1]}
            speed={0.3}
            count={20}/>
      </Center>
    </group>
  </>
);
}

