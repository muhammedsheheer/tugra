"use client";
import CountUp from "react-countup";

const stats = [
  { end: 5, suffix: "+", label: "Years of Experience" },
  { end: 40, suffix: "+", label: "Best Dishes" },
  { end: 9000, suffix: "+", label: "Satisfied Customers" },
  { end: 3, suffix: "", label: "Specialists Chef" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-[#070d0f] py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 text-center md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold text-[#D4B87B] md:text-5xl">
              <CountUp
                end={stat.end}
                duration={2}
                separator=","
                suffix={stat.suffix}
              />
            </h2>
            <p className="mt-2 text-sm font-medium text-[#C1B8A3] md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
