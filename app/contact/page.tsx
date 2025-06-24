"use client";
import { poppins } from "@/app/ui/fonts";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-700 to-blue-200 text-white">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-700 bg-opacity-80 backdrop-blur-md flex justify-between items-center px-8 md:px-16 py-4">
        <div className={`${poppins.className} text-2xl font-bold text-white`}>
          Frengky Lois Wongan
        </div>

        <div className="hidden md:flex gap-6 text-white text-lg font-light">
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/about-me" className="hover:text-yellow-300 transition">About Me</Link>
          <Link href="/project" className="hover:text-yellow-300 transition">Projects</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-white text-3xl">☰</button>
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

      {/* Contact Content */}
      <section className="flex items-center justify-center px-6 md:px-20 py-32">
        <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl p-10 w-full max-w-xl text-center space-y-8">
          <h1 className={`${poppins.className} text-4xl font-bold text-blue-800`}>
            Let&apos;s Collaborate
          </h1>
          <p className="text-gray-800">
            Feel free to reach out — whether it&apos;s for a project, collaboration, or just to connect.
          </p>

          <div className="space-y-6 text-left">
            <ContactItem icon="/email.png">
              frengky.wongan2004@gmail.com
            </ContactItem>
            <ContactItem icon="/linkedin.png">
              Frengky Lois Wongan
            </ContactItem>
            <ContactItem icon="/ig.png">
              @frengkywongan
            </ContactItem>
          </div>
        </div>
      </section>
    </main>
  );
}

// Updated ContactItem component
function ContactItem({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition hover:scale-[1.02] flex items-center gap-4">
      <Image src={icon} alt="icon" width={32} height={32} className="rounded" />
      <span className="text-blue-900 break-words">{children}</span>
    </div>
  );
}
