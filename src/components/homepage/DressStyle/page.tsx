import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import * as motion from "framer-motion/client";
import DressStyleCard from "./DressStyleCard";

const DressStyle = () => {
<<<<<<< HEAD
 
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        delayChildren: 0.5, 
      },
    },
  };


  const elementVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

 
  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="px-4 xl:px-0">
      <motion.section
        className="max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
       
        <motion.h2
          variants={headingVariants}
=======
  return (
    <div className="px-4 xl:px-0">
      <section className="max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
>>>>>>> 80db49b (done)
          className={cn([
            integralCF.className,
            "text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize",
          ])}
        >
<<<<<<< HEAD
          BROWSE BY DRESS STYLE
        </motion.h2>

      
        <motion.div
          className="flex flex-col sm:flex-row md:h-[289px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5"
          variants={elementVariants}
=======
          BROWSE BY dress STYLE
        </motion.h2>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5"
>>>>>>> 80db49b (done)
        >
          <DressStyleCard
            title="Casual"
            url="/shop#casual"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[url('/images/dress-style-1.png')]"
          />
          <DressStyleCard
            title="Formal"
            url="/shop#formal"
            className="md:max-w-[684px] h-[190px] bg-[url('/images/dress-style-2.png')]"
          />
        </motion.div>
<<<<<<< HEAD

       
        <motion.div
          className="flex flex-col sm:flex-row md:h-[289px] space-y-5 sm:space-y-0 sm:space-x-5"
          variants={elementVariants}
=======
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] space-y-5 sm:space-y-0 sm:space-x-5"
>>>>>>> 80db49b (done)
        >
          <DressStyleCard
            title="Party"
            url="/shop#party"
            className="md:max-w-[684px] h-[190px] bg-[url('/images/dress-style-3.png')]"
          />
          <DressStyleCard
            title="Gym"
            url="/shop#gym"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[url('/images/dress-style-4.png')]"
          />
        </motion.div>
<<<<<<< HEAD
      </motion.section>
=======
      </section>
>>>>>>> 80db49b (done)
    </div>
  );
};

export default DressStyle;
