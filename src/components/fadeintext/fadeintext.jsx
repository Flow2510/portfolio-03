import { motion } from "framer-motion";

export default function FadeInText({ text }) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px"}}
    >
      {words.map((word, i) => (
        <span
          key={word + i}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.split("").map((char, index) => (
            <motion.span
              key={char + index}
              variants={letter}
              transition={{ ease: "linear", type: "tween", duration: 0.2 }}
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