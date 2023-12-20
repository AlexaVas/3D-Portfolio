/** @format */

import {Sky, Clouds, Cloud } from "@react-three/drei"
import * as THREE from "three"


export default function Environment()

{
    
// const {position, azimuth} = useControls('sun-position',{
    //     position:
    //     {value:{x:-3, y:0.8, z:-1}},
    //     azimuth:{value:1}
    // })

return (
  <>
    <Sky sunPosition={[-3, 0.8, -1]} azimuth={1} />
    <Clouds material={THREE.MeshBasicMaterial}>
      <Cloud position={[1, -1, -2]} seed={5} scale={5} volume={0.5} fade={50} />
      <Cloud
        position={[1, 1, 2]}
        seed={1}
        scale={0.7}
        volume={0.5}
        color="#d9bff5"
        fade={30}
      />
    </Clouds>
  </>
)
}

