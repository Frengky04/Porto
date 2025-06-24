"use client";
import { poppins } from "@/app/ui/fonts";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface ProjectData {
  src: string | string[];
  title: string;
  desc: string;
  detail: string;
  link?: string;
}

export default function Project() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [modalData, setModalData] = useState<ProjectData | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const webProjects: ProjectData[] = [
    {
      src: "/festin.png",
      title: "Festin POS System",
      desc: "Online POS system for all-you-can-eat restaurant.",
      detail: `Developed a web-based Point-of-Sale (POS) system for Festin Unique All You Can Eat using Next.js, Tailwind CSS, and PostgreSQL. 
This system helps streamline order management, table coordination, and real-time transactions in a buffet-style restaurant setting. 
The app is responsive and optimized for multiple devices.<br /><br />
<strong>Built with:</strong><br />
- Next.js 14 & Tailwind CSS<br />
- Vercel PostgreSQL<br />
- Fully deployed using Vercel<br /><br />
<strong>Test Login:</strong><br />
Email: admin@gmail.com<br />
Password: adminn`,
      link: "https://festin-unique.vercel.app/login",
    },
    {
      src: "/belikopi1.png",
      title: "Belikopi POS System",
      desc: "Online POS system for a local coffee shop.",
      detail: `Developed a web-based Point-of-Sale (POS) system for BeliKopi using Next.js, Tailwind CSS, and PostgreSQL. 
Main features include order management, inventory tracking, sales reporting, and role-based login for employees and supervisors. 
The application is fully responsive and easy to use across various devices.<br /><br />
<strong>Test Login:</strong><br />
Employee: karyawan@nextmail.com / 123456<br />
Supervisor: spv@nextmail.com / 123456`,
      link: "https://bebas-goat.vercel.app/login",
    },
  ];

  const uiuxProjects: ProjectData[] = [
    {
      src: Array.from({ length: 21 }, (_, i) => `/bakoelkaos/${i + 1}.png`),
      title: "BakoelKaos Webside",
      desc: "UI/UX design for BakoelKaos webside interface.",
      detail: "A complete UI/UX design for BakoelKaos ordering system, featuring a modern interface from login to checkout. focused on user-friendly experience.",
    },
    {
      src: Array.from({ length: 23 }, (_, i) => `/siperemku1/${i + 1}.png`),
      title: "SIPeremku Webside",
      desc: "UI/UX design for SIPeremku webside interface.",
      detail: "SIPeremku is a web-based Point-of-Sale (POS) system designed to manage motorcycle rental services, especially for campus or community use. It offers online booking, user data verification, rental history tracking, and real-time availability management.",
    },
    {
      src: Array.from({ length: 20 }, (_, i) => `/defcal1/${i + 1}.png`),
      title: "Defcal aplication",
      desc: "UI/UX design for Defcal caloria detection mobile app.",
      detail: "Defcal is a mobile application that helps users detect and estimate the number of calories in food. By utilizing image recognition or manual input, users can track their daily calorie intake easily..",
    },
    {
      src: Array.from({ length: 2 }, (_, i) => `/festin/${i + 1}.png`),
      title: "Festin Unique Logo",
      desc: "Visual logo for restauran festin unique.",
      detail: "<strong>Chef Hat:</strong> Symbolizes that Festin Unique promises high-quality food prepared by experienced chefs.<br /><strong>Festin:</strong> A French word meaning “feast” or “banquet”, representing a celebration or gathering full of various dishes.<br /><strong>Unique:</strong> Highlights something special, different, or one-of-a-kind. It reflects the restaurant's concept of providing one transaction per customer with various package options.<br /> <strong>5 Stars:</strong> Represents quality and excellence, indicating the high standards of the restaurant.",
    },
    {
      src: Array.from({ length: 36 }, (_, i) => `/styco/${i + 1}.png`),
      title: "Styco aplication",
      desc: "UI/UX design for styco fashion mobile app.",
      detail: "Styco is a personal styling app that recommends the best outfits for users based on their preferences, wardrobe, weather, or occasion. It provides AI-based fashion suggestions to boost confidence and simplify daily outfit decisions..",
    },
  ];

  const certifications: ProjectData[] = [
    {
      src: "/mpsi.png",
      title: "Information System Project Management",
      desc: "Competency certification in managing IT-based projects.",
      detail: "Issued by an official institution, this certification covers core skills in planning, executing, and completing system development projects effectively.",
    },
    {
      src: "/ksi.png",
      title: "Information Security Certification",
      desc: "Basic certification in IT security.",
      detail: "Covers fundamentals of data security, encryption, and network protection for information systems.",
    },
    {
      src: "/tableu.png",
      title: "Tableau Certification",
      desc: "Introductory certification in data visualization.",
      detail: "Demonstrates skills in using Tableau to build dashboards and extract business insights through interactive data visualizations.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-700 to-blue-200 relative text-white">
      <nav className="sticky top-0 z-50 bg-gray-700 bg-opacity-80 backdrop-blur-md flex justify-between items-center px-8 md:px-16 py-4">
        <div className={`${poppins.className} text-2xl font-bold text-white`}>Frengky Lois Wongan</div>
        <div className="hidden md:flex gap-8 text-white text-lg font-light">
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/about-me" className="hover:text-yellow-300 transition">About Me</Link>
          <Link href="/project" className="hover:text-yellow-300 transition">Projects</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="text-white text-3xl">☰</button>
          {isDropdownOpen && (
            <div className="absolute top-20 right-8 bg-white bg-opacity-90 text-black rounded-md shadow-md p-4 z-50">
              <Link href="/" className="block py-2 hover:text-yellow-700">Home</Link>
              <Link href="/about-me" className="block py-2 hover:text-yellow-700">About Me</Link>
              <Link href="/project" className="block py-2 hover:text-yellow-700">Projects</Link>
              <Link href="/contact" className="block py-2 hover:text-yellow-700">Contact</Link>
            </div>
          )}
        </div>
      </nav>
      
      <section className="pt-32 px-6 md:px-20 pb-20 z-10">
        <h1 className={`${poppins.className} text-4xl md:text-5xl font-extrabold text-center text-white mb-12`}>
          My Projects
        </h1>

        <h2 className="text-2xl font-bold mb-6 mt-10 text-yellow-200">🌐 Web Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, idx) => (
            <div key={idx} className="bg-white bg-opacity-90 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition duration-300">
              <Image
                src={project.src as string}
                alt={project.title}
                width={500}
                height={300}
                onClick={() => {
                  setModalData(project);
                  setActiveImageIndex(0); // ✅ Reset image index
                }}
                className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 text-gray-800 space-y-2">
                <h3 className="text-xl font-semibold text-blue-800">{project.title}</h3>
                <p className="text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-16 text-yellow-200">🎨 UI/UX Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiuxProjects.map((project, idx) => (
            <div key={idx} className="bg-white bg-opacity-90 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition duration-300">
              <Image
                src={Array.isArray(project.src) ? project.src[0] : project.src}
                alt={project.title}
                width={500}
                height={300}
                onClick={() => {
                  setModalData(project);
                  setActiveImageIndex(0); // ✅ Reset image index
                }}
                className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 text-gray-800 space-y-2">
                <h3 className="text-xl font-semibold text-blue-800">{project.title}</h3>
                <p className="text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-16 text-yellow-200">📜 Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((project, idx) => (
            <div key={idx} className="bg-white bg-opacity-90 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition duration-300">
              <Image
                src={project.src as string}
                alt={project.title}
                width={500}
                height={300}
                onClick={() => {
                  setModalData(project);
                  setActiveImageIndex(0); // ✅ Reset image index
                }}
                className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 text-gray-800 space-y-2">
                <h3 className="text-xl font-semibold text-blue-800">{project.title}</h3>
                <p className="text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setModalData(null)}>
          <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 max-w-2xl mx-auto relative" onClick={(e) => e.stopPropagation()}>
            <div className="relative mb-4">
              {Array.isArray(modalData.src) ? (
                <div className="relative flex items-center justify-center">
                  <button
                    onClick={() => setActiveImageIndex(prev => prev === 0 ? modalData.src.length - 1 : prev - 1)}
                    className="absolute left-0 text-xl bg-white bg-opacity-90 hover:bg-yellow-300 text-blue-900 px-4 py-2 rounded-full shadow-lg border-2 border-blue-900 transition-transform hover:scale-110 z-20"
                  >
                    ←
                  </button>
                  <img
                    src={modalData.src[activeImageIndex]}
                    alt={`Slide ${activeImageIndex}`}
                    className="h-64 rounded-lg object-contain"
                  />
                  <button
                    onClick={() => setActiveImageIndex(prev => prev === modalData.src.length - 1 ? 0 : prev + 1)}
                    className="absolute right-0 text-xl bg-white bg-opacity-90 hover:bg-yellow-300 text-blue-900 px-4 py-2 rounded-full shadow-lg border-2 border-blue-900 transition-transform hover:scale-110 z-20"
                  >
                    →
                  </button>
                </div>
              ) : (
                <img src={modalData.src as string} alt={modalData.title} className="rounded-lg w-full h-auto mb-4" />
              )}

              {modalData.link && (
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-yellow-300 transition"
                  title="Visit Website"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
                  </svg>
                </a>
              )}
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">{modalData.title}</h3>
            <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: modalData.detail }} />
            <button
              className="absolute top-2 right-3 text-gray-600 text-3xl hover:text-red-500"
              onClick={() => setModalData(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
