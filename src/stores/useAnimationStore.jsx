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

      sit: () => {
        set((state) => {
          if (state.curAnimation !== state.animationSet.sit) {
            return { curAnimation: state.animationSet.sit };
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

      idle: () => {
        set((state) => {
          if (state.curAnimation !== state.animationSet.idle) {
            return { curAnimation: state.animationSet.idle };
          }
          return {};
        });
      },

      point: () => {
        set((state) => {
          if (state.curAnimation !== state.animationSet.point) {
            return { curAnimation: state.animationSet.point };
          }
          return {};
        });
      },
    };
  })
);
