import ContactLeft from "@/components/ContactLeft";
import ContactRight from "@/components/ContactRight";
import React from "react";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black px-6 py-10 text-white/70"
    >
      <h2 className="text-2xl sm:text-3xl text-center lg:text-4xl font-bold">
        <span className="text-[#FF6B00]">Contact </span>With Me
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-transparent mx-auto rounded-full mb-10" />
      <div className="flex flex-col md:flex-row gap-10">
        <ContactLeft />
        <ContactRight />
      </div>
    </section>
  );
};

export default ContactPage;
