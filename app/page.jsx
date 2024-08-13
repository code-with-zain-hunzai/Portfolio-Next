import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button'
import React from 'react'
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className='w-full'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-24">
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl '>Software Developer</span>
            <h1 className='h1 mb-6 mt-5'>Hello I'm <span className='text-accent-DEAFULT'>Luka Coleman</span>
            </h1>
            <p className='max-w-[500px] mx-auto xl:mx-0 text-white/80'>I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies</p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant="outline"
                size="lg"
                className="uppercase items-center gap-2 mt-5">
                <span >Download CV</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6 mt-5" iconStyles="w-9 h-9 border border-accent-DEAFULT rounded-full flex justify-center items-center text-accent-DEAFULT text-base hover:bg-accent-DEAFULT hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* image */}
          <div className="order-1 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home


