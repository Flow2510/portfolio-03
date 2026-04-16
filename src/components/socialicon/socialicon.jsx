import { motion } from 'motion/react'
import './socialicon.scss'
import { href } from 'react-router-dom'
import { useState } from 'react'
import { style } from 'motion/react-client'

export default function SocialIcon({ icon, iconAnimated, aria, href, filter }) {
    const [isHover, setIsHover] = useState(false)

    return(
        <motion.a 
            href={href} 
            onHoverStart={() => setIsHover(prev => !prev)}
            onHoverEnd={() => setIsHover(prev => !prev)}
            target='_blank' 
            className='social-icon'
            rel="noopener noreferrer"
            aria-label={aria}
        >
            {isHover ?
                <img
                    className='social-icon__image'    
                    src={iconAnimated} alt="" 
                    style={filter ? { filter: "brightness(0)" } : undefined}
                />
            :
                <img
                    className='social-icon__image'    
                    src={icon} 
                    alt="" 
                    style={filter ? { filter: "brightness(0)" } : undefined}
                />
            }
        </motion.a>
    )
}