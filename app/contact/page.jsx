"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clsx from "clsx";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: '(+92) 3421083883'
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: 'Dev.zainulabbdin@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: 'Alsaba Chock, Sonikot, Gilgit'
  },
];

async function handleSubmit(e) {
    e.preventDefault();
    
    const firstname = e.target.firstname.value.trim();
    const lastname = e.target.lastname.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.message.value.trim();
    const service = e.target.service.value;

    if (!firstname || !lastname || !email || !phone || !message || !service) {
        toast.error("Please fill out all fields!");
        return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "3e55aee4-5c14-4cb8-b945-dfa81252a6e0",
            name: `${firstname} ${lastname}`,
            email: email,
            message: message,
            phone: phone, 
            service: service
        }),
    });
    const result = await response.json();
    if (result.success) {
        toast.success("Message sent successfully!");
        e.target.reset();
    } else {
        toast.error("Error: Message not sent.");
    }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <ToastContainer />
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent-DEAFULT">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit pariatur alias commodi doloribus est inventore voluptates.
              </p>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="First Name" />
                <Input name="lastname" type="text" placeholder="Last Name" />
                <Input name="email" type="email" placeholder="Email Address" />
                <Input name="phone" type="tel" placeholder="Phone Number" />
              </div>
              {/* Select Service */}
              <Select name="service">
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="ux-ui-design">UX/UI Design</SelectItem>
                    <SelectItem value="logo-design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Message Textarea */}
              <Textarea name="message" placeholder="Type Your Message Here" className="h-[200px]" />
              {/* Submit Button */}
              <Button type="submit" className="mt-4 bg-accent-DEAFULT hover:bg-accent-hover text-white">
                Send Message
              </Button>
            </form>
          </div>
          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <div className="flex flex-col gap-10">
              {info.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-14 w-14 items-center flex justify-center rounded-md bg-[#27272c] text-accent-DEAFULT text-2xl">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
