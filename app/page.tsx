"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { poppins } from "@/app/ui/fonts";

export default function Page() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center relative text-white bg-gradient-to-br from-gray-700 to-blue-200"
    >
      {/* Navbar */}
      <nav className="absolute top-6 left-0 right-0 flex justify-between items-center px-8 md:px-16 z-10">
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
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="text-white text-3xl"
          >
            ☰
          </button>
          {isDropdownOpen && (
            <div className="absolute top-16 right-8 bg-white bg-opacity-90 text-black rounded-md shadow-md p-4 z-50">
              <Link href="/" className="block py-2 hover:text-yellow-700">Home</Link>
              <Link href="/about-me" className="block py-2 hover:text-yellow-700">About Me</Link>
              <Link href="/project" className="block py-2 hover:text-yellow-700">Projects</Link>
              <Link href="/contact" className="block py-2 hover:text-yellow-700">Contact</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="z-10 mt-24 md:mt-0 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-16">
        {/* Text Section */}
        <div className="text-left md:w-1/2 space-y-6 mt-10 md:mt-0">
          <h1 className={`${poppins.className} text-4xl md:text-5xl font-extrabold`}>
            Hi, I&apos;m  Frengky 👋
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200">
            An Information Systems student who is passionate about technology, business, and design. Currently building something impactful and continuously learning every day.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/Frengky04"
              className="bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-yellow-300 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/frengky-lois-wongan-8948a9330/"
              className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/Frengky.jpg"
              alt="Frengky"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
