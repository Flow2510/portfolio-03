import { motion, useScroll, useTransform } from 'motion/react';
import './animatedtext.scss';
import { useRef } from 'react';

export default function AnimatedText({ text, finalColor, transitionColor }) {
    const words = text.split(" ");
    const textRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start 80%", "end 25%"]
    });

    return(
        <span ref={textRef} className='animated-text'>
            {words.map((word, index) => {

                const color = useTransform(
                    scrollYProgress,
                    [index / words.length, (index + 1) / words.length],
                    [transitionColor, finalColor]
                );

                return(
                    <motion.span
                        key={word + index}
                        style={{
                            color,
                            display: "inline-block",
                            marginRight: "6px"
                        }}
                    >
                        {word}
                    </motion.span>
                )
            })}
        </span>
    )
}