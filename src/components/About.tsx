import { Factory, Target, Award } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <Factory className="h-10 w-10 md:h-12 md:w-12 text-sanika-blue z-10" />
    ),
    title: "Our Company",
    description:
      "Based in Koregaon Bhima, Pune, our state-of-the-art 25,000 sq.ft. manufacturing plant is equipped with modern injection molding machinery to deliver high-quality plastic components.",
    delay: 0.1,
  },
  {
    icon: (
      <Target className="h-10 w-10 md:h-12 md:w-12 text-sanika-blue z-10" />
    ),
    title: "Our Mission",
    description:
      "To be a world-class plastic injection molding solution provider, driving innovation and sustainability while meeting the evolving needs of our customers with precision and excellence.",
    delay: 0.3,
  },
  {
    icon: <Award className="h-10 w-10 md:h-12 md:w-12 text-sanika-blue z-10" />,
    title: "Our Vision",
    description:
      "We focus on customer satisfaction, product quality, and cost efficiency. Our commitment is to deliver innovative solutions that exceed expectations and contribute to our clients' success.",
    delay: 0.5,
  },
];

const About = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="about"
      className="section-padding bg-sanika-lightgray animate-on-scroll"
    >
      <div className="container mx-auto container-padding">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-heading animate-item">About Us</h2>
          <div className="accent-bar mx-auto animate-item"></div>
          <p className="text-sanika-gray text-base md:text-lg max-w-3xl mx-auto animate-item">
            Established in 2009, Sanika Plast Pvt. Ltd. is a leading
            manufacturer of precision plastic components for the white goods and
            automotive sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: feature.delay,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative glass-panel p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group overflow-hidden"
            >
              {/* Background blur icon */}
              <div className="absolute top-4 right-4 opacity-10 text-sanika-blue/40 scale-[2.5] pointer-events-none">
                {feature.icon}
              </div>

              <div className="relative z-10 mb-4">{feature.icon}</div>

              <h3 className="text-lg md:text-xl font-semibold mb-3 text-sanika-darkgray group-hover:text-sanika-blue transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sanika-gray text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
