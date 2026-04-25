import { motion } from "framer-motion";

export default function FadeInText({ text }) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const word = {
    hidden: { y: 80 },
    visible: { y: 0 }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      {words.map((w, i) => (
        <motion.span
          key={w + i}
          variants={word}
          transition={{ ease: "easeOut", duration: 0.4 }}
          style={{ display: "inline-block", marginRight: "0.5rem" }}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}