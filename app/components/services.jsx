"use client";
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion"

const services = [
  {
    num: '01',
    title: 'Interactive Features and Animations',
    description: 'Interactive Features and Animations enhance user experience by adding dynamic elements using JavaScript or React, implementing animations and transitions, and managing events like clicks and form submissions.',
    href: ""
  },
  {
    num: '02',
    title: 'UI/UX Design Implementation',
    description: 'UI/UX Design Implementation translates design mockups into functional web pages, focusing on aesthetics and usability to create intuitive user interfaces that enhance the overall user experience.',    
    href: ""
  },
  {
    num: '03',
    title: 'Responsive Web Design and Mobile Optimization',
    description: 'Responsive Web Design ensures websites are mobile-friendly and adapt to various screen sizes using media queries and flexible layouts, providing an optimal viewing experience across all devices.',
    href: ""
  },
  {
    num: '04',
    title: 'Cross-Browser Compatibility',
    description: 'Cross-Browser Compatibility ensures that websites function correctly across multiple browsers, addressing browser-specific issues and inconsistencies while utilizing feature detection and fallbacks for unsupported features.',
    href: ""
  },
]
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index}
                className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-DEAFULT transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                    <BsArrowDownRight className="text-primary  text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-DEAFULT transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
