import './hero.scss';
import { motion, useScroll, useTransform } from 'motion/react';

import git from '../../assets/images/git.png'
import gitAnimated from '../../assets/images/gitanimated.gif'
import linkedin from '../../assets/images/linkedin.png'
import linkedinAnimated from '../../assets/images/linkedinanimated.gif'
import mail from '../../assets/images/mail.png'
import mailAnimated from '../../assets/images/mailanimated.gif'
import SocialIcon from '../socialicon/socialicon';

export default function Hero({ sectionRef }) {

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start 40%"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], ["1", "0.8"])
    const x = useTransform(scrollYProgress, [0, 1], [0, -150])

    return(
        <section className='hero'>
            <motion.div className='hero__content' style={{ scale, x }}>
                <motion.h2 
                    className='hero__content-title'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true}}
                >
                    <span>Développeur </span><span>Front-End & UI</span>
                </motion.h2>
                <div className='hero__content-wrapper'>
                    <motion.p 
                        className='hero__content-text'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true}}
                    >
                        Je conçois des interfaces web modernes, performantes et centrées utilisateur. Mon objectif est de créer des expériences simples, fluides et efficaces.
                    </motion.p>
                    <motion.p 
                        className='hero__content-text'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}    
                        viewport={{ once: true}} 
                    >
                        J’utilise React, SCSS et des animations légères pour transformer des idées en interfaces interactives et accessibles sur tous les supports.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true}} 
                >
                    <a className='hero__content-link' href='#gallery'>[<span className='hero__content-link--hover'></span>Explorer mes projets<span className='hero__content-link--hover'></span>]</a>
                </motion.div> 
            </motion.div>
            <div className='hero__footer'>
                <motion.div 
                    className='hero__footer-border'
                    initial={{ width: 0 }}
                    animate={{width: "100%" }}
                    transition={{ duration: 1.2}}
                    viewport={{ once: true}} 
                >
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}   
                    className='hero__footer-social'
                    viewport={{ once: true}} 
                >
                    <SocialIcon 
                        icon={git}
                        iconAnimated={gitAnimated}
                        aria={"Voir mon profil GitHub (ouvre dans un nouvel onglet)"}
                        href={"https://github.com/Flow2510"}
                        filter={false}
                    />
                    <SocialIcon 
                        icon={linkedin}
                        iconAnimated={linkedinAnimated}
                        aria={"Voir mon profil LinkedIn (ouvre dans un nouvel onglet)"}
                        href={"https://www.linkedin.com/in/florian-sendra-3270961a1/"}
                        filter={false}
                    />
                    <SocialIcon 
                        icon={mail}
                        iconAnimated={mailAnimated}
                        aria={"M’envoyer un email (ouvre dans un nouvel onglet)"}
                        href={"mailto:sendra.florian@gmail.com"}
                        filter={false}
                    />
                </motion.div>
                <div className='hero__footer-wrapper'>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}   
                        viewport={{ once: true}} 
                    >
                        Available now
                    </motion.p>
                </div>
            </div>
        </section>
    )
}