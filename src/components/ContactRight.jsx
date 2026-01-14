"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import {
  ArrowBigUpDash,
  Mail,
  NotebookText,
  Phone,
  User,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { socialIcons } from "@/data/socials";
import emailjs from "@emailjs/browser";
import { useTheme } from "@/context/ThemeProvider";

export default function ContactRight() {
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const templateParams = {
      name: data.name,
      email: data.email,
      title: data.subject,
      phone: data.phone,
      message: data.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_62ueqse",
        "template_elc9tej",
        templateParams,
        "gBwR6m0DS33gMqoc0"
      )
      .then((result) => {
        // console.log(result);
        // console.log("Email sent:", result.text);
        reset();
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Check console for details.");
      });
  };

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-black/40 text-white/70"
          : theme === "light"
          ? "bg-base-200 shadow-sm text-black/90"
          : ""
      } rounded-2xl w-full border border-white/10 p-4 md:p-8`}
    >
      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">Send me a message</h2>
      <p
        className={`${
          theme === "dark"
            ? "text-gray-500"
            : theme === "light"
            ? "text-black/70"
            : ""
        } text-sm mb-6`}
      >
        Feel free to reach out for any queries or collaborations
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 text-white/90"
      >
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="relative hover:scale-102 transition duration-200">
              <input
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className={`${
                  theme === "dark"
                    ? "bg-black text-white/75 border-white/20 hover:border-gray-600"
                    : theme === "light"
                    ? "border-black/20 hover:border-gray-400"
                    : ""
                } peer w-full rounded-lg border-2 px-8 pt-6 pb-2 focus:border-yellow-400 outline-none resize-none placeholder-transparent caret-teal-500`}
              />

              <label
                className={`absolute left-7 top-3 text-xs ${
                  theme === "dark"
                    ? "text-gray-400 peer-placeholder-shown:text-gray-500"
                    : theme === "light"
                    ? "peer-placeholder-shown:text-gray-800"
                    : ""
                } transition-all
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm  peer-focus:top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-yellow-400 pointer-events-none`}
              >
                Your Name
              </label>

              <User className="absolute top-4 peer-focus:top-6 left-2 h-4 w-4 text-yellow-600" />
              <UserRound className="absolute top-4 peer-focus:top-6 left-2 h-4 w-4 text-yellow-600" />
            </div>

            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <div className="relative hover:scale-102 transition duration-200">
              <input
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                })}
                className={`${
                  theme === "dark"
                    ? "bg-black text-white/75 border-white/20 hover:border-gray-600"
                    : theme === "light"
                    ? "border-black/20 hover:border-gray-400"
                    : ""
                } peer w-full rounded-lg border-2 px-8 pt-6 pb-2 focus:border-yellow-400 outline-none resize-none placeholder-transparent caret-teal-500`}
              />
              <label
                className={`absolute left-7 top-3 text-xs ${
                  theme === "dark"
                    ? "text-gray-400 peer-placeholder-shown:text-gray-500"
                    : theme === "light"
                    ? "peer-placeholder-shown:text-gray-800"
                    : ""
                } transition-all
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm  peer-focus:top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-yellow-400 pointer-events-none`}
              >
                Email
              </label>
              <Mail className="absolute top-4 peer-focus:top-6 left-2 h-4 w-4 text-yellow-600" />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative hover:scale-102 transition duration-200">
            <input
              placeholder="Phone Number (Optional)"
              {...register("phone")}
              className={`${
                theme === "dark"
                  ? "bg-black text-white/75 border-white/20 hover:border-gray-600"
                  : theme === "light"
                  ? "border-black/20 hover:border-gray-400"
                  : ""
              } peer w-full rounded-lg border-2 px-8 pt-6 pb-2 focus:border-yellow-400 outline-none resize-none placeholder-transparent caret-teal-500`}
            />
            <label
              className={`absolute left-7 top-3 text-xs ${
                theme === "dark"
                  ? "text-gray-400 peer-placeholder-shown:text-gray-500"
                  : theme === "light"
                  ? "peer-placeholder-shown:text-gray-800"
                  : ""
              } transition-all
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm  peer-focus:top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-yellow-400 pointer-events-none`}
            >
              Phone Number (Optional)
            </label>
            <Phone className="absolute top-4 peer-focus:top-6 left-2 h-4 w-4 text-yellow-600" />
          </div>

          <div className="relative hover:scale-102 transition duration-200">
            <input
              {...register("subject", { required: "Subject is required" })}
              placeholder="Subject"
              className={`${
                theme === "dark"
                  ? "bg-black text-white/75 border-white/20 hover:border-gray-600"
                  : theme === "light"
                  ? "border-black/20 hover:border-gray-400"
                  : ""
              } peer w-full rounded-lg border-2 px-8 pt-6 pb-2 focus:border-yellow-400 outline-none resize-none placeholder-transparent caret-teal-500`}
            />
            <label
              className={`absolute left-7 top-3 text-xs ${
                theme === "dark"
                  ? "text-gray-400 peer-placeholder-shown:text-gray-500"
                  : theme === "light"
                  ? "peer-placeholder-shown:text-gray-800"
                  : ""
              } transition-all
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm  peer-focus:top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-yellow-400 pointer-events-none`}
            >
              Subject
            </label>
            <NotebookText className="absolute top-4 peer-focus:top-6 left-2 h-4 w-4 text-yellow-600" />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="relative hover:scale-102 transition duration-200">
          <textarea
            rows="4"
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
            className={`peer w-full rounded-lg ${
              theme === "dark"
                ? "bg-black text-white/75 border-white/20 hover:border-gray-600"
                : theme === "light"
                ? "border-black/20 hover:border-gray-400"
                : ""
            } border-2 px-4 pt-6 pb-2
      focus:border-yellow-400 outline-none resize-none
       placeholder-transparent`}
          />

          <label
            className={`absolute left-4 top-3 text-xs ${
              theme === "dark"
                ? "text-gray-400 peer-placeholder-shown:text-gray-500"
                : theme === "light"
                ? "peer-placeholder-shown:text-gray-800"
                : ""
            } transition-all
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm  peer-focus:top-3  peer-focus:text-xs peer-focus:text-yellow-400 pointer-events-none`}
          >
            {" "}
            Message
          </label>

          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${
            theme === "dark"
              ? "text-white/75"
              : theme === "light"
              ? "text-black/80"
              : ""
          } mx-auto flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-7 md:px-15 py-3 font-bold cursor-pointer hover:scale-105 transition text-sm md:text-base`}
        >
          Send Message
          <ArrowBigUpDash className="rotate-90 animate-bounce h-5 md:h-6" />
        </button>
      </form>

      <div className="flex flex-col">
        {/* Social Icons */}
        <div className="mt-4 flex justify-center gap-2.5 md:gap-4">
          {socialIcons.map((icon) => (
            <Link href={icon.link} target="_blank" key={icon.link}>
              <Image
                src={`/${icon.img}.png`}
                alt={icon.img}
                width={30}
                height={30}
                className="cursor-pointer opacity-70 hover:opacity-100 p-1 border border-gray-200 transition rounded-full bg-white/25 hover:bg-white/10 text-red-500"
              />
            </Link>
          ))}
        </div>
        {/* Footer */}
        <p
          className={`text-center text-xs md:text-sm ${
            theme === "dark"
              ? "text-gray-500"
              : theme === "light"
              ? "text-black/75"
              : ""
          }  mt-6`}
        >
          I will get back to you as soon as possible
        </p>
      </div>
    </div>
  );
}
