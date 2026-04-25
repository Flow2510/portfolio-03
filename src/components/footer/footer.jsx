import { motion } from 'motion/react';
import './footer.scss';

import git from '../../assets/images/git.png'
import gitAnimated from '../../assets/images/gitanimated.gif'
import linkedin from '../../assets/images/linkedin.png'
import linkedinAnimated from '../../assets/images/linkedinanimated.gif'
import mail from '../../assets/images/mail.png'
import mailAnimated from '../../assets/images/mailanimated.gif'
import SocialIcon from '../socialicon/socialicon';

export default function Footer() {
    return(
        <footer className='footer'>
            <div className='footer__content'>
                <div className='footer__content-wrapper'>
                    <div className='footer__content-container'>
                        <motion.h2
                            className='footer__content-title'
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true}} 
                        >
                            Florian Sendra
                        </motion.h2>
                        <motion.p
                            className='footer__content-text'
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}   
                            viewport={{ once: true}} 
                        >
                            Développeur Front-End React
                        </motion.p>
                        <motion.p
                            className='footer__content-text'
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}   
                            viewport={{ once: true}} 
                        >
                            Available now
                        </motion.p>
                    </div>
                    <div className='footer__social'>
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
                    </div>
                </div>
            </div>
        </footer>
    )
}