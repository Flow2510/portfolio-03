import { motion } from 'motion/react'
import './reveallink.scss'

export default function RevealLink({ href, text }) {
    const letters = text.split("")

    const STAGGER = 0.025
    const DURATION = 0.25

    return(
        <motion.div 
            initial="initial"
            whileHover="hovered"
            className="reveal-link"
            transition={{
                staggerChildren: 0.2,
            }}
        >
                <div>
                    {letters.map((l, i) => (
                        <motion.span 
                            style={{ display: "inline-block" }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "-100%"}
                            }}
                            key={l + i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </div>
                <div
                    style={{ position: 'absolute', inset: 0}}
                >
                    {letters.map((l, i) => (
                        <motion.span 
                            style={{ display: "inline-block" }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: 0 }
                            }}
                            key={l + i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </div>
        </motion.div>
    )
}