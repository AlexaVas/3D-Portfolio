import { Html, Environment, useGLTF } from "@react-three/drei"
import { useControls } from "leva"

export default function Computer({on}) {

const computer = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");


//  const position = useControls("position", {
//    x: { value: 1.70, min: -2, max: 3 },
//    y: { value: 1.83, min: -2, max: 3 },
//    z: { value: -1.7, min: -2, max: 3 }
//  });
return (
  <>
    <Environment preset="sunset" />
    <primitive
      object={computer.scene}
      scale={0.1}
      position={[-1.39, -0.22, -0.6]}
      rotation-y={1.53}></primitive>
    {on?<Html
      transform   
      wrapperClass="htmlScreen"
      distanceFactor={0.118}
      position={[-1.528, -0.065, -0.606]}
      rotation-z={-1.7}
      rotation-y={1.83}
      rotation-x={1.7}
      zIndexRange={[on?2:-10, -20]}
      
      >
      <iframe style={{
        transition: "all 0.5s",
        opacity: on ? 1 : 0,
        transform: `scale(${on ? 1 : 0})`,
        display:`${on?'block':"none"}`
      }}
      occlude="blending"src="https://alexavas.github.io/Portfolio" />
    </Html>:null}
  </>
);


}