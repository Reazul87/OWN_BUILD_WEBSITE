"use client";
import { AtSign, Check, Copy, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ContactLeft = () => {
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  const copyText = (text, label) => {
    navigator.clipboard.writeText(text);
    if (label === "WhatsApp") {
      setIsWhatsApp(true);
      setTimeout(() => setIsWhatsApp(false), 1000);
    } else {
      setIsEmail(true);
      setTimeout(() => setIsEmail(false), 1000);
    }
  };

  return (
    <div className="space-y-6 rounded-2xl border border-white/10 bg-black/40 p-2 sm:p-8 md:p-10 w-full max-w-lg mx-auto md:mx-0 text-white/70">
      <h3 className="text-lg sm:text-xl font-semibold text-center md:text-left">
        Let’s Connect
      </h3>

      {/* WhatsApp */}
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-green-500/10 p-3 hover:scale-105 transition duration-300">
        <a
          href="https://wa.me/8801717741419"
          target="_blank"
          className="flex items-center gap-2 md:gap-3 w-full sm:w-auto mb-2 sm:mb-0"
        >
          <div className="p-1.5 bg-green-500 rounded-full">
            <Image
              src="/whatsapp_644.png"
              alt="WhatsApp"
              width={25}
              height={25}
            />
          </div>
          <div>
            <p className="text-green-400/95 text-sm sm:text-base">WhatsApp</p>
            <p className=" text-xs sm:text-base">+8801717741419</p>
          </div>
        </a>

        <button
          onClick={() => copyText("+8801717741419", "WhatsApp")}
          className="mt-2 sm:mt-0"
        >
          <div className="bg-gray-700 p-2 rounded-full cursor-pointer">
            {!isWhatsApp ? (
              <Copy className="text-white/65" width={16} height={16} />
            ) : (
              <Check className="text-green-400/95" width={16} height={16} />
            )}
          </div>
        </button>
      </div>

      {/* Email */}
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-blue-500/10 p-3 hover:scale-105 transition duration-300">
        <a
          href="mailto:hasanreazul87@gmail.com"
          className="flex items-center gap-2 md:gap-3 w-full sm:w-auto mb-2 sm:mb-0"
        >
          <div className="p-2 bg-blue-500 rounded-full">
            <AtSign className="text-white/80" height={20} width={20} />
          </div>
          <div>
            <p className="text-blue-400 text-sm sm:text-base">Email</p>
            <p className=" text-xs sm:text-base">
              hasanreazul87@gmail.com
            </p>
          </div>
        </a>

        <button
          onClick={() => copyText("hasanreazul87@gmail.com", "Email")}
          className="mt-2 sm:mt-0"
        >
          <div className="bg-gray-700 p-2 rounded-full cursor-pointer">
            {!isEmail ? (
              <Copy className="text-white/65" width={16} height={16} />
            ) : (
              <Check className="text-blue-400/95" width={16} height={16} />
            )}
          </div>
        </button>
      </div>

      {/* Location */}
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-purple-500/10 p-2 hover:scale-105 transition duration-300">
        <div className="p-2 bg-purple-500 rounded-full">
          <MapPin width={20} height={20} className="text-white/90" />
        </div>
        <div>
          <p className="text-purple-400/95 text-sm sm:text-base">Location</p>
          <p className="text-xs sm:text-base">
            Sherpur, Bogura, Bangladesh
          </p>
        </div>
      </div>

      {/* Illustration */}
      <div className="rounded-xl border border-white/10 bg-black/40 p-4 sm:p-6 flex justify-center">
        <video autoPlay loop muted playsInline className="brightness-85">
          <source src="/gif3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default ContactLeft;
