import { motion } from "framer-motion";

export default function FadeInText({ text }) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}

          {/* espace entre les mots */}
          <span>&nbsp;</span>
        </span>
      ))}
    </motion.span>
  );
}