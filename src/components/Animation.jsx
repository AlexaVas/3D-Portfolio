/** @format */

import { useFBX, useAnimations } from "@react-three/drei";
import { useEffect, useRef, Suspense , useMemo} from "react";
import * as THREE from "three";
// import useGame from "./stores/useGame";
import Character from "./Character";

import useAnimationStore from "../stores/useAnimationStore";

export default function Animations({ children}) {
  // Change the character src to yours
  const group = useRef();

  // Load FBX and extract animations
  const sittingAnimation = useFBX("animations.fbx");
  const { animations } = sittingAnimation;
console.log(animations)
  // Bind animations to the group
  const { actions } = useAnimations(animations, group);

  // Ref to track if animation has started
  const hasStarted = useRef(false);
  /**
   * Character animations setup
   */
  const curAnimation = useAnimationStore((state) => state.curAnimation);

  useEffect(() => {
    if (!actions) return;
console.log(curAnimation)
    // Play the first action
    const firstActionKey = Object.keys(actions)[curAnimation];
    if (firstActionKey && !hasStarted.current) {
      const firstAction = actions[firstActionKey];
      //   firstAction.reset().fadeIn(0.15).play();
      firstAction.reset(); // Reset the animation to the start
      firstAction.setLoop(THREE.LoopOnce); // Ensure it plays only once
      firstAction.clampWhenFinished = true; // Keep the final frame
      firstAction.fadeIn(1).play(); // Play the animation with a fade-in effect
      hasStarted.current = true;
    }

    // Cleanup: Fade out the action on unmount
    return () => {
      const firstActionKey = Object.keys(actions)[curAnimation];
      const firstAction = actions[firstActionKey]; // Retrieve the action
      //firstAction?.stop(); // Stop the animation
      firstAction?.fadeOut(1); // Fade it out
      hasStarted.current = false;
    };
  }, [curAnimation]);

  return (
    <Suspense fallback={null}>
      <group ref={group}>
        {/* Replace character model here */}
        {children}
      </group>
    </Suspense>
  );
}

useFBX.preload("sitting_c.fbx");

