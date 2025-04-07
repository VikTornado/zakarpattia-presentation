import React from "react";

export default function RecoveryCenter() {
  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Relax – Everything Will Be Fine
        </h1>
        <p className="text-lg text-gray-600">
          Comprehensive recovery and support center for military personnel and
          civilians
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          To create a place where patients feel safe, confident, and supported
          at every step of their recovery journey.
        </p>
      </section>

      {/* Target Audience */}
      <section className="py-10 bg-gray-50 px-4 rounded">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Who is this center for?
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Military personnel</li>
          <li>Families of military personnel</li>
          <li>Civilians affected by war</li>
        </ul>
      </section>

      {/* Services */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Recovery services we provide
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <li>Prosthetics</li>
          <li>Spinal and cranial nerve disorders</li>
          <li>Skeletal injuries and musculoskeletal disorders</li>
          <li>Burns</li>
          <li>Amputations</li>
          <li>Cardiorespiratory conditions</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="py-10 bg-gray-50 px-4 rounded">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Advantages of the Center
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>A full range of recovery services in one center</li>
          <li>The best neurosurgery and rehabilitation doctors in Ukraine</li>
          <li>
            Integration with the healing nature of Zakarpattia: thermal waters,
            mountains, fresh air
          </li>
          <li>Veteran hubs directly within the center</li>
          <li>Support for employment and self-realization after recovery</li>
          <li>Socialization and psychological support</li>
          <li>Modern, friendly design without hospital atmosphere</li>
          <li>Outdoor recreation areas and nearby leisure facilities</li>
          <li>Event space and engaging activities during rehabilitation</li>
        </ul>
      </section>

      {/* Infrastructure */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Infrastructure
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>100 bed spaces</li>
          <li>Total area – 5460 m²</li>
          <li>Own bomb shelter – 350 m²</li>
          <li>Estimated patient flow – 2400 per year (650 outpatients)</li>
        </ul>
      </section>

      {/* Partners */}
      <section className="py-10 bg-gray-50 px-4 rounded">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Partners of the Project
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Government of Hungary</li>
          <li>Ajax Systems company</li>
          <li>
            Czech regions: Vysočina, Pardubice, Ústí nad Labem,
            Moravian-Silesian, Kralovehradecký
          </li>
        </ul>
      </section>

      {/* Geography */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Why Zakarpattia?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Located in the most peaceful area of Ukraine, Zakarpattia offers
          reduced stress and anxiety, access to European expertise, and a rich
          base for physical and psychological recovery.
        </p>
      </section>

      {/* Support Call-to-Action */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Support the 4.5.0 Recovery Center
        </h2>
        <p className="text-gray-700 mb-6">
          Your support helps thousands of Ukrainians recover and rebuild their
          lives.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Support the Project
        </button>
      </section>
    </div>
  );
}
