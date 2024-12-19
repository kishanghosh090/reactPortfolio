import React from "react";

import { motion } from "framer-motion";
import { Form } from "react-router-dom";

function Contact() {
  const [action, setAction] = React.useState(null);
  const whenSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-slate-900 text-white rounded-t-3xl z-40"
    >
      <div className=" isolate px-6  lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] z-30"
          />
        </div>
        {/* main content */}
        <div className="px-4 py-20 h-[100vh] flex flex-col items-center  md:w-[40%] m-auto z-50">
          <h1 className="text-center md:text-5xl text-3xl font-extrabold my-5">
            Contact Me
          </h1>
          <Form
            onSubmit={whenSubmit}
            className="md:text-2xl text-xl md:w-[100%] flex flex-col gap-4 bg-slate-800 py-4 px-4 rounded-3xl z-50"
          >
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              className="px-4 py-2 rounded-full bg-slate-700 focus:outline-none"
              placeholder="Your Name"
            />
            <label htmlFor="email" className="text-slate-50">
              Enter Your Email
            </label>
            <input
              type="email"
              className="px-4 py-2  rounded-full bg-slate-700 focus:outline-none"
              placeholder="Your Email"
            />
            <label htmlFor="message" className="text-slate-50">
              Enter Your Message
            </label>
            <textarea
              className="px-4 py-2 rounded-3xl bg-slate-700 focus:outline-none"
              placeholder="Your Message"
            ></textarea>
            <button className="px-4 py-2 rounded-full bg-pink-600">
              Submit
            </button>
          </Form>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
