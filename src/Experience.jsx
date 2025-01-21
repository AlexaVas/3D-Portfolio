import {ScrollControls, Scroll, Html} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Land from './components/Land'
import  Environment from './components/Environment'
import Movement from './components/Movement'
import Interface from './components/Interface'
import { Suspense } from 'react'
import Fallback from './components/Fallback'
import Animations from './components/Animation'
import Character from './components/Character'





export default function Experience({setScroll, setContactMeOpen, setProjectsOpen})
{


 
    return (
      <>
        {/* <Perf position="top-left" /> */}
        <Suspense
          fallback={
            <Html as="div" fullscreen>
              <Fallback></Fallback>
            </Html>
          }>
          <Environment />

          <ScrollControls pages={6} damping={0.5}>
            <Land />

            <Movement setContactMeOpen={setContactMeOpen} />

            <group rotation={[0.1,1,1.5]} position={[-0.4,0.99,-0.4]}>
            <Animations>
              <Character/>
            </Animations>
            </group>

            <Scroll html>
              <Interface
                setScroll={setScroll}
                setProjectsOpen={setProjectsOpen}
              />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </>
    );
}

