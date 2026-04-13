import { motion, useScroll, useTransform } from 'motion/react';
import './animatedtext.scss';
import { useRef } from 'react';

export default function AnimatedText({ text }) {
    const words = text.split(" ");
    const textRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "end center"]
    });

    return(
        <span ref={textRef} className='animated-text'>
            {words.map((word, index) => {

                const color = useTransform(
                    scrollYProgress,
                    [index / words.length, (index + 1) / words.length],
                    ["#ffffff80", "#fafafa"]
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