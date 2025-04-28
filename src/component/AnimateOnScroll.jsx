import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function AnimateOnScroll({
  children,
  className,
  delay = 0,
  animation = "fade",
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const animations = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: delay,
        },
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: delay,
        },
      },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: delay,
        },
      },
    },
    slideUp: {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: delay,
        },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: delay,
        },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimateOnScroll;
