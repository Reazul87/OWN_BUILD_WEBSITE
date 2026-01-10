import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const socialIcons = [
  { img: "linkedin_64", link: "https://www.linkedin.com/in/md-reazul-hasan" },
  { img: "twitter_64", link: "https://twitter.com/hasanreazul87" },
  {
    img: "github_64",
    link: "https://github.com/Reazul87",
  },
  {
    img: "facebook_64",
    link: "https://www.facebook.com/profile.php?id=61573084834889",
  },
];

const links = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Projects", href: "#projects" },
  // { name: "Experience", href: "#experience" },
];


const handleSubscribe = (e) => {
  e.preventDefault();
  const email = e.target.elements[0].value;
  // console.log(email);
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email");
    return;
  }

  const templateParams = {
    email: email,
    name: "To be Subscriber",
    title: "Subscription Request",
    message:
      "Please subscribe me to the newsletter.interested to subscribe to your newsletter.",
    time: new Date().toLocaleString(),
  };

  emailjs
    .send(
      "service_62ueqse",
      "template_tnueb8s",
      templateParams,
      "gBwR6m0DS33gMqoc0"
    )
    .then((result) => {
      console.log(result);
      e.target.elements[0].value = "";
      console.log("Email sent:", result.text);
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Check console for details.");
    });
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4 relative inline-block">
            Md Reazul Hasan
            <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-yellow-500"></span>
          </h3>

          <p className="text-sm leading-relaxed mb-6">
            I am a passionate developer creating innovative solutions. My
            portfolio showcases my projects and skills in web development and
            design.
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-yellow-500" />
              Bogura, Bangladesh
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-yellow-500" />
              hasanreazul87@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-yellow-500" />
              +880 1717-741419
            </li>
          </ul>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 relative inline-block">
            Quick Links
            <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-yellow-500"></span>
          </h3>

          <div className="space-y-3 text-sm">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer transition"
              >
                <ArrowRight size={14} className="text-yellow-500" />
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 relative inline-block">
            Connect With Me
            <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-yellow-500"></span>
          </h3>

          <div className="flex gap-4 mb-6">
            {socialIcons.map((Icon) => (
              <div
                key={Icon.img}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition cursor-pointer"
              >
                <Link
                  href={Icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    height={20}
                    width={20}
                    src={`/${Icon.img}.png`}
                    alt={Icon.img}
                  />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-sm mb-3">Subscribe to my newsletter</p>

          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 bg-gray-800 text-sm text-white rounded-l-md outline-none"
            />
            <button className="bg-yellow-500 text-black px-4 py-2 text-sm font-semibold rounded-r-md hover:bg-yellow-400 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-yellow-500/30 mt-16"></div>

      {/* Bottom */}
      <div className="px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p className="text-center">
          © 2026 Md Reazul Hasan. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center md:flex-row gap-3 md:gap-6">
          <span className="hover:text-yellow-400 cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-yellow-400 cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-yellow-400 cursor-pointer">
            Cookie Policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
