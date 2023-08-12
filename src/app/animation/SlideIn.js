import { motion } from "framer-motion";

const SlideIn = ({ children, direction = "up", duration = 1 }) => {
  const getInitialPosition = (dir) => {
    switch (dir) {
      case "up":
        return { y: 50 };
      case "down":
        return { y: -50 };
      case "left":
        return { x: -50 };
      case "right":
        return { x: 50 };
      default:
        return {};
    }
  };

  const getFinalPosition = (dir) => {
    switch (dir) {
      case "up":
        return { y: 0 };
      case "down":
        return { y: 0 };
      case "left":
        return { x: 0 };
      case "right":
        return { x: 0 };
      default:
        return {};
    }
  };

  const animationVariants = {
    initial: {
      opacity: 0,
      ...getInitialPosition(direction),
      ease: [0.6, 0.01, -0.05, 0.95],
    },
    animate: {
      opacity: 1,
      ...getFinalPosition(direction),
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  };

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        variants={animationVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: duration }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideIn;
