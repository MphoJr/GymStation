/* src/components/TrustedPartners.jsx */
import React from "react";

const partners = [
  { name: "Bonitas", img: "/images/bonitas.png" },
  { name: "PnP Smart Shopper", img: "/images/pnp.png" },
  { name: "Edgars Club", img: "/images/edgars.png" },
  { name: "FNB", img: "/images/fnb.png" },
  { name: "USN", img: "/images/usn.png" },
  { name: "Puma", img: "/images/puma.png" },
  { name: "Thyme FitChef", img: "/images/fitchef.png" },
  { name: "African Padel", img: "/images/padel.png" },
];

export default function TrustedPartners() {
  return (
    <section className="bg-black py-12 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Trusted Partners
      </h2>

      {/* Rotating logos */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee space-x-16">
          {partners.map((p, idx) => (
            <img
              key={idx}
              src={p.img}
              alt={p.name}
              className="h-16 w-auto object-contain"
            />
          ))}
          {/* Duplicate logos for seamless loop */}
          {partners.map((p, idx) => (
            <img
              key={`dup-${idx}`}
              src={p.img}
              alt={p.name}
              className="h-16 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
