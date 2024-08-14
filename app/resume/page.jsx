"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss, SiNextdotjs, SiNodedotjs
} from "react-icons/si";

const about = {
  title: "About me",
  description: `
  Experienced front-end developer skilled in React, Next.js, and Tailwind CSS, focused on building intuitive, responsive, and visually appealing web interfaces.`,
  info: [
    { fieldName: "Name", fieldValue: "Zain Coleman" },
    { fieldName: "Phone", fieldValue: "(+92) 3421083883" },
    { fieldName: "Experience", fieldValue: "3+ years" },
    { fieldName: "Skype", fieldValue: "Zain.hunzai" },
    { fieldName: "Nationality", fieldValue: "Pakistani" },
    { fieldName: "Email", fieldValue: "Dev.zainulabbdin@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Urdu, Hindi" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sit molestiae possimus fugit, totam fuga, eum eius voluptates laborum eligendi obcaecati.`,
  items: [
    {
      company: "NorthNine",
      position: "Front End Developer",
      duration: "2023 - present",
    },
    {
      company: "Uconnect",
      position: "Front End Developer Intern",
      duration: "Summer 2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sit molestiae possimus fugit, totam fuga, eum eius voluptates laborum eligendi obcaecati.`,
  items: [
    {
      institution: "Meta Web Development Course",
      degree: "Front End Developer",
      duration: "August 2023",
    },
    {
      institution: "Meta React Course",
      degree: "React Basics to Advanced",
      duration: "September 2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: `
  Experienced front-end developer skilled in React, Next.js, and Tailwind CSS, focused on building intuitive, responsive, and visually appealing web interfaces.`,
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" }
      }}
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="felx flex-col gap-9 text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-5">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index}>
                          <span>{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div>
                            {/* dot */}
                            <span></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <h2>{education.title}</h2>
              <p>{education.description}</p>
              {/* Map through education.items to display each education */}
            </TabsContent>

            <TabsContent value="skills">
              <h2>{skills.title}</h2>
              <p>{skills.description}</p>
              <ul>
                {skills.skillList.map((skill, index) => (
                  <li key={index}>
                    {skill.icon} {skill.name}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="about">
              <h2>{about.title}</h2>
              <p>{about.description}</p>
              <ul>
                {about.info.map((item, index) => (
                  <li key={index}>
                    <strong>{item.fieldName}:</strong> {item.fieldValue}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
