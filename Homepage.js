
import React from "react";

export default function Homepage() {
  return (
    <div className="bg-sky-200 min-h-screen font-sans text-gray-800">
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">Akino Solar</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2 text-black">SOLAR REPAIR & MAINTENANCE</h2>
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">AKINO SOLAR</h1>
          <p className="text-lg font-bold text-black">Call us today! <span className="text-2xl">(865) 351-1080</span></p>
          <button className="mt-6 px-6 py-3 bg-yellow-400 text-white rounded-full shadow-lg hover:bg-yellow-300 transition">Get a Free Estimate</button>
        </div>
        <div className="mt-10 md:mt-0">
          <img src="/sun-icon.png" alt="Smiling Sun Icon" className="w-64 h-64" />
        </div>
      </section>

      <section className="bg-white py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Akino Solar?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-4xl">🌤️</span>
            <h3 className="font-bold text-lg mt-4">Experienced Technicians</h3>
            <p className="text-sm mt-2">Trained professionals with years of solar experience.</p>
          </div>
          <div>
            <span className="text-4xl">🔧</span>
            <h3 className="font-bold text-lg mt-4">Reliable Service</h3>
            <p className="text-sm mt-2">Fast, friendly, and efficient repair & maintenance.</p>
          </div>
          <div>
            <span className="text-4xl">⚡</span>
            <h3 className="font-bold text-lg mt-4">Locally Owned</h3>
            <p className="text-sm mt-2">Proudly serving Knoxville and surrounding areas.</p>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t mt-12 py-6 px-6 text-sm text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Akino Solar. All rights reserved.</p>
        <p>Designed with ☀️ in Tennessee</p>
      </footer>
    </div>
  );
}
