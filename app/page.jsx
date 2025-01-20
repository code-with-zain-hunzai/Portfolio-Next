import React from "react";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Services from "./components/services";
import Resume from "./components/resume";
import Work from "./components/work";
import Contact from "./components/contact";
import Typewriter from "@/components/ui/typewriter";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="w-full space-y-28 z-10 pt-28 overflow-hidden">
      {/* Home Section */}
      <section id="home" className="w-full">
        <div className="container mx-auto h-full">
          <HeaderSection />
        </div>
      </section>

      {/* Other Sections */}
      <Stats />
      <section id="services">
        <Services />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </section>
  );
};

const HeaderSection = () => (
  <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-10">
    <TextSection />
    <ImageSection />
  </div>
);

const TextSection = () => (
  <div className="text-center xl:text-left order-2 xl:order-none">
    <span className="text-xl">Software Developer</span>
    <Typewriter />
    <p className="max-w-[500px] mx-auto xl:mx-0 text-white/80">
      I excel at crafting elegant digital experiences and am proficient in
      various programming languages and technologies.
    </p>
    <div className="flex flex-col xl:flex-row items-center gap-8">
      <DownloadButton />
      <SocialLinks />
    </div>
  </div>
);

const ImageSection = () => (
  <div className="order-1 xl:order-none xl:mb-0">
    <Photo />
  </div>
);

const DownloadButton = () => (
  <a
    href="/assets/zain.pdf"
    download="Zain_Resume.pdf"
    aria-label="Download my CV"
    className="uppercase items-center gap-2 mt-5"
  >
    <Button variant="outline" size="lg" className="flex items-center gap-2">
      <span>Download CV</span>
      <FiDownload />
    </Button>
  </a>
);

const SocialLinks = () => (
  <div className="mb-8 xl:mb-0">
    <Social
      containerStyles="flex gap-6 mt-5"
      iconStyles="w-9 h-9 border border-accent-DEFAULT rounded-full flex justify-center items-center text-accent-DEFAULT text-base hover:bg-accent-DEFAULT hover:text-[#00e187] hover:transition-all duration-500"
    />
  </div>
);

export default Home;
