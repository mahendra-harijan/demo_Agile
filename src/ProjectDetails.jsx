import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Smartphone,
  Wifi,
  Github,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
} from "lucide-react";

// ---- Sample project data (swap this out for any project you like) ----
const project = {
  name: "SmartHome IoT Controller",
  tagline: "Standalone ESP32 home automation with a native Flutter app",
  status: "Completed",
  duration: "6 weeks",
  category: "Embedded Systems / IoT",
  description:
    "A fully standalone home automation system built around the ESP32, controllable from a custom Flutter Android app over local Wi-Fi. No cloud dependency, no third-party hub — just fast, private, local control of lights, fans, and appliances from your phone.",
  stack: [
    { label: "ESP32", icon: Cpu },
    { label: "Flutter", icon: Smartphone },
    { label: "Local Wi-Fi", icon: Wifi },
  ],
  features: [
    "Real-time device control over local network, no internet required",
    "Custom relay-driver firmware written in C++ for the ESP32",
    "Flutter Android app with live device state sync",
    "Auto-discovery of the controller on the home network",
    "Manual override switches for offline/failsafe operation",
  ],
  stats: [
    { label: "Devices supported", value: "8" },
    { label: "Avg. response time", value: "120ms" },
    { label: "Doc pages written", value: "57" },
  ],
  links: {
    github: "#",
    demo: "#",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ProjectDetails() {
  return (
    <div className="min-h-screen w-full bg-[#0B1120] text-slate-200 relative overflow-hidden">
      {/* subtle circuit-grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #22D3EE 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-3xl mx-auto px-6 py-16"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
              <CheckCircle2 size={12} />
              {project.status}
            </span>
            <span className="text-xs text-slate-500 font-mono">
              {project.category}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.name}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            {project.tagline}
          </p>
        </motion.div>

        {/* Meta row */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-10 border-b border-slate-800 pb-6"
        >
          <span className="flex items-center gap-1.5">
            <Calendar size={14} /> {project.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Layers size={14} /> {project.stack.length} core technologies
          </span>
          <div className="ml-auto flex gap-3">
            <a
              href={project.links.github}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <Github size={16} /> Code
            </a>
            <a
              href={project.links.demo}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink size={16} /> Demo
            </a>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.section variants={item} className="mb-10">
          <h2 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-3">
            Overview
          </h2>
          <p className="text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </motion.section>

        {/* Tech stack */}
        <motion.section variants={item} className="mb-10">
          <h2 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 text-sm"
              >
                <Icon size={16} className="text-cyan-400" />
                {label}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Features */}
        <motion.section variants={item} className="mb-10">
          <h2 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            Key Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-slate-300">
                <CheckCircle2
                  size={16}
                  className="text-cyan-400 mt-0.5 shrink-0"
                />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Stats */}
        <motion.section
          variants={item}
          className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-8"
        >
          {project.stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.section>
      </motion.div>
    </div>
  );
}
