import { Html, Environment, useGLTF } from "@react-three/drei"
import { useControls } from "leva"
import { useState } from "react";

export default function ComputerTest({on, setContactMeOpen}) {

const computer = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");

const [hidden, set] = useState();
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
      onClick={() => setContactMeOpen(true)}
      scale={0.1}
      position={[-1.39, -0.22, -0.6]}
      rotation-y={1.53}></primitive>
    {on ? (
      <Html
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
          transform: `scale(${hidden ? 0.5 : 1})`,
        }}>
        <div className="test flex justify-center flex-col items-center">
          <button className="w-2/4 m-3 text-7xl p-8 rounded-2xl animate-background shadow-md hover:shadow-lg hover:p-10 bg-gradient-to-r from-white via-purple-100 via-30% to-purple-300">
            Contact Me
          </button>
        </div>
      </Html>
    ) : null}
  </>
);


}