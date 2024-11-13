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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });

  // **New: State for errors**
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const { firstname, lastname, email, phone, message, service } = formData;

    // **New: Individual field validation**
    if (!firstname) newErrors.firstname = "First name is required";
    if (!lastname) newErrors.lastname = "Last name is required";
    if (!email) newErrors.email = "Email address is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!message) newErrors.message = "Message is required";
    if (!service) newErrors.service = "Please select a service";

    setErrors(newErrors);

    // **New: Return whether form is valid**
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // **New: Validate form**
    if (!validateForm()) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3e55aee4-5c14-4cb8-b945-dfa81252a6e0",
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!");
        e.target.reset();
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
          service: ""
        });
      } else {
        toast.error("Error: Message not sent.");
      }
    } catch (error) {
      toast.error("Error: Message not sent.");
    } finally {
      setSubmitting(false);
    }
  };

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
                Your ideas deserve to shine online. I provide tailored web development services that bring your concepts to life with sleek designs and seamless functionality. Let’s collaborate and make your digital goals a reality!
              </p>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    className="w-full"
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleInputChange}
                  />
                  {/* **New: Error message** */}
                  {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
                </div>
                <div>
                  <Input
                    className="w-full"
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleInputChange}
                  />
                  {/* **New: Error message** */}
                  {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
                </div>
                <div>
                  <Input
                    className="w-full"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {/* **New: Error message** */}
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <Input
                    className="w-full"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {/* **New: Error message** */}
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>
              {/* Select Service */}
              <div>
                <Select className="w-full" name="service" value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className='w-full gap-2'>
                    <SelectValue placeholder="Select a service" className="pb-4" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="Front-end-development">Front End Development</SelectItem>
                      <SelectItem value="ux-ui-design">UX/UI Implementation</SelectItem>
                      <SelectItem value="Full-stack-Development">Full Stack Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* **New: Error message** */}
                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
              </div>
              {/* Message Textarea */}
              <div>
                <Textarea
                  name="message"
                  placeholder="Type Your Message Here"
                  className="h-[200px]"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {/* **New: Error message** */}
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              {/* Submit Button */}
              <Button
                type="submit"
                disabled={submitting}
                className={clsx("mt-4 bg-accent-DEAFULT hover:bg-accent-hover text-white", {
                  "opacity-50 cursor-not-allowed": submitting
                })}
              >
                {submitting ? "Sending..." : "Send Message"}
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
