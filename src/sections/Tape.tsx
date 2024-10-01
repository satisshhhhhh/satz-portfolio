import StarIcon from "@/assets/icons/star.svg";

const words = [
  "I can do something like this",
  "User Friendly",
  "Responsive",
  "Performant",
  "Accessible",
  "Scalable",
  "Usable",
  "Reliable",
  "Secure",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="relative overflow-hidden">
          {/* Animated container that will move the words */}
          <div className="flex flex-none gap-4 pr-2 py-3 animate-marquee whitespace-nowrap">
            {words.concat(words).map((word, index) => (
              <div key={index} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
