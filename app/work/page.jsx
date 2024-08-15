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

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "project 1",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quasi at accusantium facere nostrum? Quisquam, consequatur nesciunt?`,
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "javaScript" }],
    Image: '/assets/work/thumb1.png',
    live: "",
    github: "/",
  },
  {
    num: "02",
    category: "Frontend",
    title: "project 2",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quasi at accusantium facere nostrum? Quisquam, consequatur nesciunt?`,
    stack: [{ name: "TailwindCss" }, { name: "javaScript" }, { name: "React" }],
    Image: '/assets/work/thumb2.png',
    live: "",
    github: "/",
  },
  {
    num: "03",
    category: "Frontend",
    title: "project 3",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quasi at accusantium facere nostrum? Quisquam, consequatur nesciunt?`,
    stack: [{ name: "TailwindCss" }, { name: "React" }, { name: "Next.js" }],
    Image: '/assets/work/thumb3.png',
    live: "",
    github: "/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              {/* project.category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-DEAFULT transition-all duration-500 capitalize:">
                {project.category} project
              </h2>
              {/* project.desctiption */}
              <p className='text-white/60'>{project.description}</p>

              {/* stacks */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (<li key={index}
                    className='text-xl text-accent-DEAFULT'>
                    {item.name}
                    {/* remove the last commo */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border text-white/60"></div>
              {/* button */}
              <div>
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
