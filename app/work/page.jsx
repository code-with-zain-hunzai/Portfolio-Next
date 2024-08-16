"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtn from '@/components/WorkSliderBtn';

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quasi at accusantium facere nostrum? Quisquam, consequatur nesciunt?`,
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: '/assets/work/thumb1.png',
    live: "",
    github: "/",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project 2",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quasi at accusantium facere nostrum? Quisquam, consequatur nesciunt?`,
    stack: [{ name: "TailwindCss" }, { name: "JavaScript" }, { name: "React" }],
    image: '/assets/work/thumb2.png',
    live: "",
    github: "/",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project 3",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quasi at accusantium facere nostrum? Quisquam, consequatur nesciunt?`,
    stack: [{ name: "TailwindCss" }, { name: "React" }, { name: "Next.js" }],
    image: '/assets/work/thumb3.png',
    live: "",
    github: "/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlidesChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className='flex flex-col gap-8 h-[50%]'>
              {/* Outline number */}
              <div className="text-8xl leading-none font-extrabold ">
                {project.num}
              </div>
              {/* Project category */}
              <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* Project description */}
              <p className='text-white/60'>{project.description}</p>

              {/* Stacks */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-xl text-accent-DEAFULT'>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Border */}
              <div className="border-t border-white/60  my-4"></div>

              {/* Buttons */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/20 flex justify-center items-center group'>
                        <div className='text-white hover:text-accent transition duration-300 cursor-pointer'>
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-accent-DEAFULT' />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/20 flex justify-center items-center group'>
                        <div className='text-white hover:text-accent transition duration-300 cursor-pointer'>
                          <BsGithub className='text-white text-3xl group-hover:text-accent-DEAFULT' />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlidesChange}>
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overLay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className='object-cover'
                        alt={`Thumbnail for ${project.title}`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none rounded-full"
                btnStyles="bg-accent-DEAFULT hover:bg-accent-hover text-primary text-[22px] w-8 h-8 flex justify-center rounded-full items-center transition-all"
                iconsStyles="text-white text-xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
