"use client";
import { poppins } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutMe() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-700 to-blue-200 relative text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-700 bg-opacity-80 backdrop-blur-md flex justify-between items-center px-8 md:px-16 py-4">
        <div className={`${poppins.className} text-2xl font-bold text-white`}>
          Frengky Lois Wongan
        </div>

        <div className="hidden md:flex gap-8 text-white text-lg font-light">
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/about-me" className="hover:text-yellow-300 transition">About Me</Link>
          <Link href="/project" className="hover:text-yellow-300 transition">Projects</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white text-3xl"
          >
            ☰
          </button>
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

      {/* Content */}
      <div className="flex items-center justify-center px-6 md:px-20 py-32 z-10">
        <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl p-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-10">

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/Frengky.jpg"
                alt="Profile Photo"
                width={240}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* About Me Description */}
          <div className="text-gray-800 md:w-3/4 space-y-6">
            <h2 className={`${poppins.className} text-4xl font-bold text-blue-800`}>
              About Me
            </h2>
            <p className="text-lg leading-relaxed">
              Hello! My name is <strong>Frengky Wongan</strong>, 
              I am a creative and solution-oriented individual with a strong passion for technology, design, and innovation. 
              With a background in both web development and UI/UX design, I enjoy crafting digital experiences that are not only functional but also visually engaging and user-friendly.
              <br /><br />
              My work focuses on combining design thinking with technical execution to deliver intuitive interfaces and seamless user flows. 
              I pay close attention to detail, user needs, and overall usability to ensure that every solution I create meets both aesthetic and practical standards.
              <br /><br />
              I&apos;m always eager to learn new technologies, explore creative approaches, and collaborate on impactful digital products that solve real problems and improve people’s daily lives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-lg bg-white shadow hover:shadow-md transition">
                <h4 className="font-semibold text-blue-700">🎓 Education</h4>
                <p>Universitas Atma Jaya Yogyakarta <br /> Information Systems (2021–Present)</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow hover:shadow-md transition">
                <h4 className="font-semibold text-blue-700">💻 Skills</h4>
                <p>React.js, Next.js, Tailwind CSS, UI/UX Design, TypeScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
