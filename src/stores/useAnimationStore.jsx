/** @format */

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";


export default create(
  subscribeWithSelector((set) => {
    return {
      /**
       * Character animations state manegement
       */
      // Initial animation

      curAnimation: null,
      animationSet: {},

      initializeAnimationSet: (animationSet) => {
        set((state) => {
          if (Object.keys(state.animationSet).length === 0) {
            return { animationSet };
          }
          return {};
        });
      },

      sitting: () => {
        set((state) => {
          if (
            state.curAnimation !== state.animationSet.sitting
          ) {
            return { curAnimation: state.animationSet.sitting };
          }

          return {};
        });
      },
      wave: () => {
        set((state) => {
          if (state.curAnimation !== state.animationSet.wave) {
            return { curAnimation: state.animationSet.wave };
          }
          return {};
        });
      },
    };
  })
);
