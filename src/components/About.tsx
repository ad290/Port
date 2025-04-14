import { motion } from "framer-motion";
import { useState } from "react";
import FlipCard from "./FlipCard";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }: { index: any; title: any; icon: any; description: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full h-full min-h-[280px] p-[1px] rounded-[20px] shadow-card"
      >
        <FlipCard isFlipped={isFlipped}>
          <div className="bg-tertiary w-full h-full rounded-[19px] py-5 px-4 flex justify-around items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain rounded-[50%]" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="mt-4 bg-[#00ffccb3] px-4 py-2 rounded-xl animate-pulse text-white"
            >
              {isFlipped ? "" : "Click me!! "}
            </button>
          </div>
          <div className="bg-tertiary w-full h-full rounded-[19px] py-5 px-4 flex justify-center items-center flex-col">
            <p className="text-secondary text-center text-[17px] leading-[30px]">
              {description}
            </p>
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="mt-4 bg-[#00ffccb3] px-4 py-2 rounded-xl cursor-pointer text-white"
            >
              Show Less
            </button>
          </div>
        </FlipCard>
      </motion.div>
  );
};

const About = () => {
  return (
    <div className={`min-h-[620px] ${styles.padding}`} id="about">
      <motion.div variants={textVariant(0.2)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm an enthusiastic software developer, familiar with JavaScript, Typescript
        and various popular frameworks like Next.js, Mern stack and more.
      </motion.p>

      <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About);
