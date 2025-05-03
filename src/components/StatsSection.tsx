// "use client";
// import CountUp from "react-countup";
// import { motion } from "framer-motion";

// const stats = [
//   { end: 5, suffix: "+", label: "Years of Experience" },
//   { end: 40, suffix: "+", label: "Best Dishes" },
//   { end: 9000, suffix: "+", label: "Satisfied Customers" },
//   { end: 3, suffix: "", label: "Specialists Chef" },
// ];

// export default function StatsSection() {
//   return (
//     <section className="w-full bg-[#070d0f] py-16">
//       <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 text-center md:grid-cols-4">
//         {stats.map((stat, index) => (
//           <motion.div key={index}>
//             <h2 className="text-4xl font-bold text-[#D4B87B] md:text-5xl">
//               <CountUp
//                 end={stat.end}
//                 duration={2}
//                 separator=","
//                 suffix={stat.suffix}
//               />
//             </h2>
//             <p className="mt-2 text-sm font-medium text-[#C1B8A3] md:text-base">
//               {stat.label}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { end: 5, suffix: "+", label: "Years of Experience" },
  { end: 40, suffix: "+", label: "Best Dishes" },
  { end: 9000, suffix: "+", label: "Satisfied Customers" },
  { end: 3, suffix: "", label: "Specialist Chefs" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section ref={ref} className="w-full bg-[#070d0f] py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 text-center md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 * index }}
          >
            <h2 className="text-4xl font-bold text-[#D4B87B] md:text-5xl">
              {hasAnimated ? (
                <CountUp
                  end={stat.end}
                  duration={4}
                  separator=","
                  suffix={stat.suffix}
                />
              ) : (
                "0"
              )}
            </h2>
            <p className="mt-2 text-sm font-medium text-[#C1B8A3] md:text-base">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
