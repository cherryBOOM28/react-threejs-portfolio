import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { networks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { div } from "framer-motion/client";



const Network = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Contact me.</p>
          <h2 className={styles.sectionHeadText}>My social networks.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {networks.map((network, index) => (
            <div 
                key={index} 
                className="w-[40px] h-[40px] rounded-[50px] bg-white flex items-center justify-center mt-5 hover:bg-opacity-25 cursor-pointer"
                onClick={() => window.open(network.link_network, "_blank")}
            >
                <img src={network.icon} className={`w-[26px]`} />
            </div>
        ))}
      </div>
    
    </div>
  );
};

export default SectionWrapper(Network, "");