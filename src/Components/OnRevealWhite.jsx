import { useEffect, useRef, useCallback } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const OnRevealWhite = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slidecontrols = useAnimation();

  const startMainAnimation = useCallback(() => mainControls.start("visible"), [mainControls]);
  const startSlideAnimation = useCallback(() => slidecontrols.start("visible"), [slidecontrols]);

  useEffect(() => {
    if (isInView) {
      startMainAnimation();
      startSlideAnimation();
    }
  }, [isInView, startMainAnimation, startSlideAnimation]);

  return (
    <div ref={ref} style={{position: "relative", width, overflow: "hidden"}} >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"                        
          animate={slidecontrols}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "#fff",
            zIndex: 20,
          }}
        />
      </motion.div>
    </div>
  );
};