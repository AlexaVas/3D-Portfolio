import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Indicator from './components/Indicator.jsx'
import { useState, useEffect } from 'react'
import axios from "axios";


const root = ReactDOM.createRoot(document.querySelector('#root'))

function App(){

    const [scroll, setScroll] = useState(0)
    const [contactMe, setContactMeOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);   

    
    ////
    useEffect(() => {
        const sendNotification = async () => {
          try {
            const send = await axios.post(
              "https://mail-server-5cbw.vercel.app/portfolio"
            );

            console.log("Welcome to my portfolio");
          } catch (err) {
            // console.log(err)
          }
        };

        sendNotification();
      }, []);
  ////

return (
  <>
  
    <Canvas
      className="r3f"
      flat
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-70, 4, -25],
      }}>
      <Experience
        setScroll={setScroll}
        setContactMeOpen={setContactMeOpen}
        setProjectsOpen={setProjectsOpen}
      />
    </Canvas>
    

    <Indicator
      scroll={scroll}
      setContactMeOpen={setContactMeOpen}
      contactMe={contactMe}
      setProjectsOpen={setProjectsOpen}
      projectsOpen={projectsOpen}
    />
  </>
);

}
root.render(<App/>)