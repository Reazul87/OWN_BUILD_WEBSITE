"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ChevronRight, Clock } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Real-Time Web with WebSocket & Socket.IO",
    excerpt:
      "Discover how to build lightning-fast real-time applications using WebSocket protocol and Socket.IO library in your JavaScript projects.",
    date: "January 15, 2025",
    author: "Md Reazul Hasan",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    category: "JavaScript",
  },
  {
    id: 2,
    title: "Redux – A Comprehensive Guide",
    excerpt:
      "Master state management in React applications with this deep dive into Redux, including best practices and real-world patterns.",
    date: "January 8, 2025",
    author: "Md Reazul Hasan",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    category: "React",
  },
  {
    id: 3,
    title: "Understanding Routing in Next.js",
    excerpt:
      "Explore the powerful routing system in Next.js – from basic page routing to dynamic routes and API endpoints.",
    date: "December 28, 2024",
    author: "Md Reazul Hasan",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    category: "Next.js",
  },
  {
    id: 4,
    title: "My Developer Journey Begins",
    excerpt:
      "A personal reflection on my path into web development, the challenges faced, and lessons learned along the way.",
    date: "December 15, 2024",
    author: "Md Reazul Hasan",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    category: "Personal",
  },
];

export default function BlogsSection() {
  return (
    <section id="blogs" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#FF6B00]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-[#FF6B00]">Blogs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-transparent mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Sharing my knowledge and experiences in web development through
            technical articles and tutorials.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl bg-[#111111]/80 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-[#FF6B00]/30 transition-all">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FF6B00]/90 text-white text-xs font-medium">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF6B00] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  {/* Author & Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] flex items-center justify-center text-xs font-bold text-white">
                        RJ
                      </div>
                      <span className="text-sm text-gray-400">
                        {blog.author}
                      </span>
                    </div>

                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm text-[#FF6B00] hover:text-[#FF8C00] font-medium group/link"
                    >
                      Read more
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Corner Glow */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#FF6B00]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-[#FF6B00]/30 text-white font-medium hover:bg-[#FF6B00]/10 transition-all"
          >
            View All Articles
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
