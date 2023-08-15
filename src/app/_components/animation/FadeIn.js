import { motion } from "framer-motion";

const fadeInVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const FadeIn = ({ children, duration = 2 }) => (
  <motion.div
    variants={fadeInVariants}
    initial="initial"
    animate="animate"
    transition={{ duration: duration }}
  >
    {children}
  </motion.div>
);

export default FadeIn;
