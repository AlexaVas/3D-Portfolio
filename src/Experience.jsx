import { OrbitControls} from '@react-three/drei'
import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import Land from './components/Land'
import  Environment from './components/Environment'
import { useControls } from 'leva'


export default function Experience()
{

 
    return (
      <>
        
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        
        <Environment/>
        <Land />
      </>
    );
}