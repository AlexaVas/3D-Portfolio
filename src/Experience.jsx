import {ScrollControls, Scroll, Html} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Land from './components/Land'
import  Environment from './components/Environment'
import Movement from './components/Movement'
import Interface from './components/Interface'
import { Suspense } from 'react'
import Fallback from './components/Fallback'





export default function Experience({setScroll, setContactMeOpen, setProjectsOpen})
{


 
    return (
      <>
        {/* <Perf position="top-left" /> */}
    <Suspense fallback={<Html as="div" fullscreen><Fallback></Fallback></Html>}>
        <Environment />
      
        <ScrollControls pages={6} damping={0.5}>
          <Land />
          <Movement setContactMeOpen={setContactMeOpen} />

          <Scroll html>
            <Interface setScroll={setScroll} setProjectsOpen={setProjectsOpen} />
          </Scroll>
        </ScrollControls>
       </Suspense>     
      </>
    );
}

