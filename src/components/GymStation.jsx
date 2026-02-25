/* src/components/GymStation.jsx */
import React from "react";

/* ---------- Data -------------------------------------------- */
const features = [
  { title: "Unlimited Access", description: "Train whenever you want." },
  {
    title: "Pro Equipment",
    description: "Everything you need to hit your goals.",
  },
  { title: "Free Classes", description: "Yoga, HIIT, Zumba & more." },
  { title: "Expert Coaches", description: "Guidance from certified trainers." },
  { title: "Nutrition Tips", description: "Eat smart, train harder." },
  { title: "Fitness Community", description: "Stay motivated together." },
];

const offerings = [
  { title: "Plato", img: "/images/plato.jpg" },
  { title: "Mobility", img: "/images/mobility.jpg" },
  { title: "Booty Factory", img: "/images/booty.jpg" },
  { title: "Hybrid Training Floor", img: "/images/hybrid.jpg" },
  { title: "Reformer Pilates", img: "/images/pilates.jpg" },
  { title: "Strength", img: "/images/strength.jpg" },
];

/* ---------- Feature card -------------------------------- */
const FeatureCard = ({ title, description }) => (
  <div className="border border-gray-700 rounded-lg p-6 shadow-md bg-gray-800 hover:bg-gray-700 transition">
    <h3 className="text-3xl font-semibold text-green-400 mb-2">{title}</h3>
    <p className="text-gray-300 text-xl">{description}</p>
  </div>
);

/* ---------- Offering card -------------------------------- */
const OfferingCard = ({ title, img }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg group ">
    <img
      src={img}
      alt={title}
      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
    </div>
  </div>
);

/* ---------- Nav bar --------------------------------------- */
const NavBar = () => (
  <nav className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-sm py-4">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-green-400">GymLogo</div>
      <ul className="flex space-x-8 text-gray-300">
        <li>
          <a href="#" className="hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

/* ---------- Main component --------------------------------- */
export const GymStation = () => (
  <div className="bg-gradient-to-br from-green-900 to-black text-white min-h-screen">
    <>
      {/* Nav bar */}
      <NavBar />

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-6 py-20 sm:py-28"
        style={{
          backgroundImage:
            "url('https://www.planetfitness.co.za/wp-content/uploads/2026/02/Feb-Blog-image.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto">
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
      </section>

      {/* FEATURES grid */}
      <div className="max-w-full mx-auto px-6 py-12">
        <h2 className="text-7xl font-bold text-green-400 mb-8">Membership</h2>
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

      {/* OFFERINGS grid */}
      <div className="max-w-full mx-auto px-6 py-12 ">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-7xl font-bold text-green-400">Our Offerings</h2>
          <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition text-xl">
            See Class Schedules
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((o, idx) => (
            <OfferingCard key={idx} title={o.title} img={o.img} />
          ))}
        </div>
      </div>
    </>
  </div>
);

export default GymStation;
