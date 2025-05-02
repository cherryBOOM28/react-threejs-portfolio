import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { Link } from 'react-router-dom'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
      >
        My name is Louise, I am a beginner Frontend developer with a focus on
        creating user-friendly and responsive interfaces. I love seeing code
        turn into a working product — especially when it helps people. I am
        confident in working with HTML, CSS, JavaScript and React. I am
        constantly improving my skills, learning TypeScript and strive to write
        clean, understandable code.
        <br></br>
        <br></br>I love to understand the details, improve the performance of
        interfaces and learn new things. I can work both independently and in a
        team. In my portfolio, you will find projects where I apply modern
        approaches to development, including the component approach, working
        with REST API and state management.
      </motion.p>

      <motion.p>
        <button className="w-[240px] h-[50px] bg-[#915EFF] mt-[20px] rounded-3xl">
          <a
            href="/cv-louisa-frontend-eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume (PDF)
          </a>
        </button>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
