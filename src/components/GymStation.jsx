// src/components/GymStation.jsx
import React from "react";

/* ---- Data ------------------------------------------------------ */
const features = [
  {
    title: "Unlimited Access",
    description: "Train whenever you want.",
  },
  {
    title: "Pro Equipment",
    description: "Everything you need to hit your goals.",
  },
  {
    title: "Free Classes",
    description: "Yoga, HIIT, Zumba & more.",
  },
  {
    title: "Expert Coaches",
    description: "Guidance from certified trainers.",
  },
  {
    title: "Nutrition Tips",
    description: "Eat smart, train harder.",
  },
  {
    title: "Fitness Community",
    description: "Stay motivated together.",
  },
];

/* ---- Reusable card --------------------------------------------- */
const FeatureCard = ({ title, description }) => (
  <div className="border border-gray-700 rounded-lg p-6 shadow-md bg-gray-800 hover:bg-gray-700 transition">
    <h3 className="text-xl font-semibold text-green-400 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

/* ---- Main component --------------------------------------------- */
const GymStation = () => {
  return (
    <section className="bg-gradient-to-br from-green-900 to-black text-white min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Join our community and take the first step toward
          <br />
          your best self — with expert trainers, modern facilities, and a plan
          built for you.
        </h1>

        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md transition"
          >
            JOIN MEMBERSHIP NOW!
          </a>
        </div>
      </div>

      {/* Features grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-green-400 mb-8">
          Membership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <FeatureCard
              key={idx}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GymStation;
