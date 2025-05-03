// components/FeaturesSection.tsx
import { Flame, Sparkles, UtensilsCrossed } from "lucide-react";

const features = [
  {
    icon: <Flame size={40} />,
    title: "EXQUISITE STEAK",
    desc: "Indulge in a variety of premium cuts from local and international sources carefully dry-aged for rich flavor profiles.",
  },
  {
    icon: <UtensilsCrossed size={40} />,
    title: "IMPECCABLE SERVICE",
    desc: "Experience top-notch hospitality and innovative culinary creations crafted by our skilled Executive Chef.",
  },
  {
    icon: <Sparkles size={40} />,
    title: "LUXURY DINING",
    desc: "Immerse yourself in a luxurious and intimate atmosphere where every bite is a journey through perfectly executed flavors and textures.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 gap-8 bg-[#070d0f] px-4 py-12 text-center text-[#d2b892] md:grid-cols-3 md:px-20">
      {features.map((f, i) => (
        <div key={i}>
          <div className="mb-4 flex justify-center">{f.icon}</div>
          <h3 className="text-xl font-semibold tracking-wider">{f.title}</h3>
          <div className="mx-auto my-2 h-1 w-10 bg-[#d2b892]" />
          <p className="text-sm text-[#c5b9a0]">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
